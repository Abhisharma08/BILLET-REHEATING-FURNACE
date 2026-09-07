'use server';

/**
 * HubSpot UPSERT Contact
 * - Creates contact if email does not exist
 * - Updates contact if email already exists
 * - Supports two-step submissions (Step 1: Contact Info, Step 2: Furnace Details & Budget)
 */

interface HubSpotPayload {
  name: string;
  email: string;
  phone: string;
  company_name?: string;
  designation?: string;
  lead_source?: string;
  budget?: string;
  custom_requirement?: string;
  furnace_requirement?: string;
  production_capacity?: string;
  step?: number;
}

async function executeHubSpotRequest(
  url: string,
  method: 'POST' | 'PATCH',
  accessToken: string,
  properties: Record<string, string>
) {
  let currentProps = { ...properties };
  let response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ properties: currentProps }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);

    // If custom properties do not exist in the HubSpot portal, strip and retry
    if (response.status === 400 && errorData?.errors?.length) {
      const invalidProps: string[] = [];
      for (const err of errorData.errors) {
        if (err.errorType === 'PROPERTY_DOESNT_EXIST') {
          const match = err.message?.match(/Property "([^"]+)" does not exist/);
          if (match && match[1]) {
            invalidProps.push(match[1]);
          }
        }
      }

      if (invalidProps.length > 0) {
        console.warn(
          `HubSpot: Removing properties [${invalidProps.join(', ')}] not found in portal and retrying...`
        );
        for (const prop of invalidProps) {
          delete currentProps[prop];
        }

        response = await fetch(url, {
          method,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ properties: currentProps }),
        });

        if (response.ok) {
          return { ok: true, data: await response.json().catch(() => ({})) };
        }
      }
    }

    return {
      ok: false,
      error: errorData?.message || `HubSpot request failed with status ${response.status}`,
    };
  }

  return { ok: true, data: await response.json().catch(() => ({})) };
}

export async function submitToHubSpot(data: HubSpotPayload) {
  const accessToken = process.env.HUBSPOT_ACCESS_TOKEN;

  if (!accessToken) {
    console.error('HUBSPOT_ACCESS_TOKEN is not configured.');
    return {
      success: false,
      error: 'Server configuration error.',
    };
  }

  try {
    const [firstname, ...lastnameParts] = data.name.trim().split(/\s+/);
    const lastname = lastnameParts.join(' ');

    /**
     * Build combined requirements summary to ensure details are preserved
     * even if custom portal properties (budget/custom_requirement) are not configured.
     */
    const summaryParts: string[] = [];
    if (data.budget) {
      summaryParts.push(`Budget: ${data.budget}`);
    }
    if (data.custom_requirement) {
      summaryParts.push(`Requirement: ${data.custom_requirement}`);
    }
    if (data.step === 1) {
      summaryParts.push('(Step 1 completed)');
    } else if (data.step === 2) {
      summaryParts.push('(Step 2 completed)');
    }

    const furnaceRequirementSummary =
      data.furnace_requirement || summaryParts.join(' | ');

    /**
     * CONTACT PROPERTIES
     */
    const properties: Record<string, string> = {
      email: data.email.trim(),
      firstname: firstname || '',
      lastname: lastname || '',
      phone: data.phone.trim(),
      lead_source: data.lead_source || 'BILLET REHEATING FURNACE LP',
    };

    if (data.company_name) {
      properties.company = data.company_name.trim();
    }
    if (data.designation) {
      properties.jobtitle = data.designation.trim();
    }
    if (furnaceRequirementSummary) {
      properties.furnace_requirement = furnaceRequirementSummary;
    }
    if (data.budget) {
      properties.budget = data.budget;
    }
    if (data.custom_requirement) {
      properties.custom_requirement = data.custom_requirement.trim();
    }

    /**
     * STEP 1 — SEARCH CONTACT BY EMAIL
     */
    const searchResponse = await fetch(
      'https://api.hubapi.com/crm/v3/objects/contacts/search',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          filterGroups: [
            {
              filters: [
                {
                  propertyName: 'email',
                  operator: 'EQ',
                  value: data.email.trim(),
                },
              ],
            },
          ],
          properties: ['email'],
        }),
      }
    );

    if (!searchResponse.ok) {
      const errorData = await searchResponse.json().catch(() => null);
      console.error('HubSpot Search Error:', errorData);
      return {
        success: false,
        error: errorData?.message || 'Failed to search HubSpot contact.',
      };
    }

    const searchData = await searchResponse.json();
    const existingContact = searchData.results?.[0];

    /**
     * STEP 2 — UPDATE EXISTING CONTACT
     */
    if (existingContact) {
      const result = await executeHubSpotRequest(
        `https://api.hubapi.com/crm/v3/objects/contacts/${existingContact.id}`,
        'PATCH',
        accessToken,
        properties
      );

      if (!result.ok) {
        console.error('HubSpot Update Error:', result.error);
        return {
          success: false,
          error: result.error || 'Failed to update contact.',
        };
      }

      return {
        success: true,
        action: 'updated',
      };
    }

    /**
     * STEP 3 — CREATE NEW CONTACT
     */
    const result = await executeHubSpotRequest(
      'https://api.hubapi.com/crm/v3/objects/contacts',
      'POST',
      accessToken,
      properties
    );

    if (!result.ok) {
      console.error('HubSpot Create Error:', result.error);
      return {
        success: false,
        error: result.error || 'Failed to create contact.',
      };
    }

    return {
      success: true,
      action: 'created',
    };
  } catch (error) {
    console.error('HubSpot Submission Exception:', error);
    return {
      success: false,
      error: 'Internal server error during CRM sync.',
    };
  }
}