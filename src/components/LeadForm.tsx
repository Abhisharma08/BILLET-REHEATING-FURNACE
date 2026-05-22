"use client"

import React, { useState } from "react"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { submitToHubSpot } from "@/app/actions/hubspot"

type FormValues = {
  company_name: string
  name: string
  designation: string
  email: string
  phone: string
  capacity_required: string
  process_required: string
  heating_preference: string
  lead_source: string
}

type FormErrors = Partial<Record<keyof FormValues, string>> & {
  submit?: string
}

type LeadFormProps = {
  className?: string
  title?: string
  subtitle?: string
  buttonText?: string
  bottomText?: React.ReactNode
  buttonclassName?: string
  shortForm?: boolean
}

const defaultValues: FormValues = {
  company_name: "",
  name: "",
  designation: "",
  email: "",
  phone: "",
  capacity_required: "",
  process_required: "",
  heating_preference: "",
  lead_source: "Bogie Hearth Furnace LP",
}

function validateStepOne(values: FormValues) {
  const errors: FormErrors = {}

  if (values.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters."
  }

  const phoneDigits = values.phone.replace(/\D/g, "")

  if (phoneDigits.length < 10 || phoneDigits.length > 12) {
    errors.phone = "Enter a valid phone number."
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address."
  }

  if (!values.capacity_required) {
    errors.capacity_required =
      "Please select required capacity."
  }

  return errors
}

function validateFinalStep(values: FormValues) {
  const errors: FormErrors = {}

  if (values.company_name.trim().length < 2) {
    errors.company_name =
      "Please enter your company name."
  }

  if (!values.process_required) {
    errors.process_required =
      "Please select process required."
  }

  if (!values.heating_preference) {
    errors.heating_preference =
      "Please select heating preference."
  }

  return errors
}

export default function LeadForm({
  className,
  title = "Get a Free Technical Consultation",
  subtitle = "Discuss your furnace requirement with our engineers.",
  buttonText = "REQUEST FREE QUOTE + TECHNICAL DRAWING →",
  buttonclassName = "",
  shortForm = false,
  bottomText = (
    <>
      🕐 Our furnace engineers respond within 4 working hours. <br />📞 +91 98113 04306 | +91 98119 54834
    </>
  ),
}: LeadFormProps) {
  const [values, setValues] = useState<FormValues>(defaultValues)

  const [errors, setErrors] = useState<FormErrors>({})

  const [isSubmitting, setIsSubmitting] = useState(false)

  const [step, setStep] = useState(1)

  const [isSuccess, setIsSuccess] = useState(false)

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) {
    const { name, value } = event.target

    setValues((current) => ({
      ...current,
      [name]: value,
    }))

    setErrors((current) => ({
      ...current,
      [name]: undefined,
      submit: undefined,
    }))
  }

  async function handleStepOne() {
    const validationErrors = validateStepOne(values)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})

    setIsSubmitting(true)

    try {
      await submitToHubSpot({
        ...values,
        company_name: "",
        designation: "",
        process_required: "",
        heating_preference: "",
      })

      setStep(2)
    } catch (error) {
      console.error(error)

      setErrors({
        submit:
          "Something went wrong. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault()

    const validationErrors =
      validateFinalStep(values)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})

    setIsSubmitting(true)

    try {
      const result = await submitToHubSpot(values)

      if (!result.success) {
        console.warn("CRM Sync Issue:", result.error)
      }

      setIsSuccess(true)
    } catch (error) {
      console.error("Submission Exception:", error)

      setErrors({
        submit:
          "We encountered a problem. Please try again or contact us directly.",
      })

      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div
        className={`rounded-2xl border border-white/10 bg-white p-8 shadow-2xl md:p-10 ${className}`}
      >
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h3 className="text-3xl font-bold text-primary md:text-4xl">
            Thank You For Your Interest
          </h3>

          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            Our engineering team has received your
            requirement and will get in touch with
            you shortly with the next steps.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white p-6 shadow-2xl md:p-8 ${className}`}
    >
      <h3 className="mb-2 text-3xl font-bold leading-tight text-primary md:text-4xl">
        {title}
      </h3>

      <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
        {subtitle}
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
        noValidate
      >
        <input
          type="hidden"
          name="lead_source"
          value={values.lead_source}
        />

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-black"
              >
                Your Name *
              </label>

              <input
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Your Full Name"
                autoComplete="name"
                className="flex h-12 w-full rounded-xl border border-input bg-white px-4 py-2 text-sm text-black placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              />

              {errors.name ? (
                <p className="text-sm text-destructive">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-black"
              >
                Email Address *
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Your Email Address"
                autoComplete="email"
                className="flex h-12 w-full rounded-xl border border-input bg-white px-4 py-2 text-sm text-black placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              />

              {errors.email ? (
                <p className="text-sm text-destructive">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="phone"
                className="text-sm font-semibold text-black"
              >
                Phone Number *
              </label>

              <input
                id="phone"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                autoComplete="tel"
                inputMode="numeric"
                className="flex h-12 w-full rounded-xl border border-input bg-white px-4 py-2 text-sm text-black placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              />

              {errors.phone ? (
                <p className="text-sm text-destructive">
                  {errors.phone}
                </p>
              ) : null}
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="capacity_required"
                className="text-sm font-semibold text-black"
              >
                Capacity Required *
              </label>

              <select
                id="capacity_required"
                name="capacity_required"
                value={values.capacity_required}
                onChange={handleChange}
                className="flex h-12 w-full rounded-xl border border-input bg-white px-4 py-2 text-sm text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              >
                <option value="">
                  Select Capacity
                </option>

                <option value="2 Ton">
                  2 Ton
                </option>

                <option value="5 Ton">
                  5 Ton
                </option>

                <option value="10 Ton">
                  10 Ton
                </option>

                <option value="20 Ton">
                  20 Ton
                </option>

                <option value="Custom Higher">
                  Custom Higher
                </option>
              </select>

              {errors.capacity_required ? (
                <p className="text-sm text-destructive">
                  {errors.capacity_required}
                </p>
              ) : null}
            </div>

            <Button
              type="button"
              onClick={handleStepOne}
              className={`h-14 w-full bg-primary text-base font-bold text-white hover:bg-primary/90 ${buttonclassName}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                "NEXT STEP →"
              )}
            </Button>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <div className="space-y-1.5">
              <label
                htmlFor="company_name"
                className="text-sm font-semibold text-black"
              >
                Company Name *
              </label>

              <input
                id="company_name"
                name="company_name"
                value={values.company_name}
                onChange={handleChange}
                placeholder="Your Company Name"
                className="flex h-12 w-full rounded-xl border border-input bg-white px-4 py-2 text-sm text-black placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              />

              {errors.company_name ? (
                <p className="text-sm text-destructive">
                  {errors.company_name}
                </p>
              ) : null}
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="designation"
                className="text-sm font-semibold text-black"
              >
                Designation
              </label>

              <select
                id="designation"
                name="designation"
                value={values.designation}
                onChange={handleChange}
                className="flex h-12 w-full rounded-xl border border-input bg-white px-4 py-2 text-sm text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              >
                <option value="">
                  Select Designation
                </option>

                <option value="Owner">
                  Owner
                </option>

                <option value="Purchase Head">
                  Purchase Head
                </option>

                <option value="Plant Manager">
                  Plant Manager
                </option>

                <option value="Engineer">
                  Engineer
                </option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="process_required"
                className="text-sm font-semibold text-black"
              >
                Process Required *
              </label>

              <select
                id="process_required"
                name="process_required"
                value={values.process_required}
                onChange={handleChange}
                className="flex h-12 w-full rounded-xl border border-input bg-white px-4 py-2 text-sm text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              >
                <option value="">
                  Select Process
                </option>

                <option value="Stress Relieving">
                  Stress Relieving
                </option>

                <option value="Annealing">
                  Annealing
                </option>

                <option value="Normalising">
                  Normalising
                </option>

                <option value="Tempering">
                  Tempering
                </option>

                <option value="Pre-Heating">
                  Pre-Heating
                </option>

                <option value="Solution Treatment">
                  Solution Treatment
                </option>
              </select>

              {errors.process_required ? (
                <p className="text-sm text-destructive">
                  {errors.process_required}
                </p>
              ) : null}
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="heating_preference"
                className="text-sm font-semibold text-black"
              >
                Heating Preference *
              </label>

              <select
                id="heating_preference"
                name="heating_preference"
                value={values.heating_preference}
                onChange={handleChange}
                className="flex h-12 w-full rounded-xl border border-input bg-white px-4 py-2 text-sm text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              >
                <option value="">
                  Select Heating Preference
                </option>

                <option value="Gas">
                  Gas
                </option>

                <option value="Oil">
                  Oil
                </option>

                <option value="Electrical">
                  Electrical
                </option>

                <option value="Any">
                  Any
                </option>
              </select>

              {errors.heating_preference ? (
                <p className="text-sm text-destructive">
                  {errors.heating_preference}
                </p>
              ) : null}
            </div>

            {errors.submit ? (
              <p className="rounded-xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                {errors.submit}
              </p>
            ) : null}

            <Button
              type="submit"
              className={`h-14 w-full bg-primary text-base font-bold text-white hover:bg-primary/90 ${buttonclassName}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                buttonText
              )}
            </Button>
          </>
        )}

        <p className="text-center text-xs leading-relaxed text-muted-foreground">
          {bottomText}
        </p>
      </form>
    </div>
  )
}