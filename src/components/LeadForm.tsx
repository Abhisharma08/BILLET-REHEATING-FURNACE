"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2, ArrowRight, ArrowLeft, ShieldCheck, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { submitToHubSpot } from "@/app/actions/hubspot"

export type FormValues = {
  name: string
  email: string
  phone: string
  company_name: string
  budget: string
  custom_requirement: string
  lead_source: string
}

type FormErrors = Partial<Record<keyof FormValues, string>> & {
  submit?: string
}

export type LeadFormProps = {
  className?: string
  title?: string
  subtitle?: string
  buttonText?: string
  bottomText?: React.ReactNode
  buttonclassName?: string
}

const defaultValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  company_name: "",
  budget: "",
  custom_requirement: "",
  lead_source: "BILLET REHEATING FURNACE LP",
}

export const BUDGET_OPTIONS = [
  "20 Lakh - 50 Lakh",
  "50 Lakh to 1 Cr",
  "1 Cr +",
] as const

function validateStep1(values: FormValues): FormErrors {
  const errors: FormErrors = {}

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your full name (minimum 2 characters)."
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address."
  }

  const phoneDigits = values.phone.replace(/\D/g, "")
  if (phoneDigits.length !== 10) {
    errors.phone = "Please enter a valid 10-digit mobile number."
  } else if (!/^[6-9]\d{9}$/.test(phoneDigits)) {
    errors.phone = "Please enter a valid Indian mobile number starting with 6, 7, 8, or 9."
  }

  return errors
}

function validateStep2(values: FormValues): FormErrors {
  const errors: FormErrors = {}

  if (values.company_name.trim().length < 2) {
    errors.company_name = "Please enter your company name."
  }

  if (!values.budget) {
    errors.budget = "Please select your estimated budget range."
  }

  return errors
}

export default function LeadForm({
  className = "",
  title = "Get a Free Technical Consultation",
  subtitle = "Discuss your billet reheating furnace requirements with our senior engineers.",
  buttonText = "GET A FREE QUOTE →",
  buttonclassName = "",
  bottomText = (
    <span className="inline-flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
      <ShieldCheck className="h-4 w-4 text-primary" />
      100% Privacy Protected · Response within 4 Working Hours
    </span>
  ),
}: LeadFormProps) {
  const router = useRouter()

  const [step, setStep] = useState<1 | 2>(1)
  const [values, setValues] = useState<FormValues>(defaultValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
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

  function handlePhoneChange(event: React.ChangeEvent<HTMLInputElement>) {
    let raw = event.target.value.replace(/\D/g, "")

    // Strip leading 91 or 0 if pasted
    if (raw.startsWith("91") && raw.length > 10) {
      raw = raw.slice(2)
    } else if (raw.startsWith("0") && raw.length > 10) {
      raw = raw.slice(1)
    }

    const cleaned = raw.slice(0, 10)

    setValues((current) => ({
      ...current,
      phone: cleaned,
    }))

    setErrors((current) => ({
      ...current,
      phone: undefined,
      submit: undefined,
    }))
  }



  async function handleStep1Submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const validationErrors = validateStep1(values)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setIsSubmitting(true)

    const phoneDigits = values.phone.replace(/\D/g, "")
    const fullPhone = `+91 ${phoneDigits}`

    try {
      // Step 1: Send initial contact info to HubSpot CRM immediately
      const result = await submitToHubSpot({
        name: values.name.trim(),
        email: values.email.trim(),
        phone: fullPhone,
        lead_source: values.lead_source,
        step: 1,
      })

      if (!result.success) {
        console.warn("HubSpot Step 1 notice:", result.error)
      }

      setStep(2)
    } catch (error) {
      console.error("Step 1 Submission Error:", error)
      // Transition to step 2 so visitor flow is not blocked
      setStep(2)
    } finally {
      setIsSubmitting(false)
    }
  }

  async function handleStep2Submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const validationErrors = validateStep2(values)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setIsSubmitting(true)

    const phoneDigits = values.phone.replace(/\D/g, "")
    const fullPhone = `+91 ${phoneDigits}`

    try {
      // Step 2: Update contact in HubSpot with company, budget, and custom requirements
      const result = await submitToHubSpot({
        name: values.name.trim(),
        email: values.email.trim(),
        phone: fullPhone,
        company_name: values.company_name.trim(),
        budget: values.budget,
        custom_requirement: values.custom_requirement.trim(),
        lead_source: values.lead_source,
        step: 2,
      })

      if (!result.success) {
        console.warn("HubSpot Step 2 notice:", result.error)
      }

      router.push("/thank-you")
    } catch (error) {
      console.error("Step 2 Submission Error:", error)
      setErrors({
        submit:
          "We encountered a problem submitting your request. Please try again or contact us directly.",
      })
      setIsSubmitting(false)
    }
  }

  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white p-6 shadow-2xl md:p-8 text-black ${className}`}
    >
      {/* STEP PROGRESS BAR */}
      <div className="mb-6 space-y-2">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-500">
          <span className={step === 1 ? "text-primary font-bold" : "text-emerald-600 font-bold"}>
            {step === 1 ? "1. Contact Info" : "✓ 1. Contact Info"}
          </span>
          <span className={step === 2 ? "text-primary font-bold" : "text-slate-400"}>
            2. Project & Budget
          </span>
        </div>

        {/* Progress track */}
        <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 ease-out"
            style={{ width: step === 1 ? "50%" : "100%" }}
          />
        </div>
      </div>

      {/* HEADER */}
      <h3 className="mb-2 text-left text-xl md:text-2xl font-bold text-primary leading-tight">
        {step === 1 ? title : "Project & Budget Details"}
      </h3>

      <p className="mb-6 text-left text-sm text-muted-foreground leading-relaxed">
        {step === 1
          ? subtitle
          : "Tell us about your company and project scope so we can prepare an accurate proposal."}
      </p>

      {/* ================= STEP 1 FORM ================= */}
      {step === 1 && (
        <form onSubmit={handleStep1Submit} className="space-y-4" noValidate>
          <input type="hidden" name="lead_source" value={values.lead_source} />

          {/* Full Name */}
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-sm font-semibold text-slate-800">
              Full Name *
            </label>
            <input
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma"
              autoComplete="name"
              className="flex h-12 w-full rounded-xl border border-input bg-white px-4 py-2 text-sm text-black placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary transition-all"
            />
            {errors.name && (
              <p className="text-xs font-medium text-destructive">{errors.name}</p>
            )}
          </div>

          {/* Email Address */}
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-sm font-semibold text-slate-800">
              Email Address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              placeholder="name@company.com"
              autoComplete="email"
              className="flex h-12 w-full rounded-xl border border-input bg-white px-4 py-2 text-sm text-black placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary transition-all"
            />
            {errors.email && (
              <p className="text-xs font-medium text-destructive">{errors.email}</p>
            )}
          </div>

          {/* Phone Number with Indian Standard +91 Prefix */}
          <div className="space-y-1.5">
            <label htmlFor="phone" className="text-sm font-semibold text-slate-800">
              Phone Number *
            </label>
            <div className="flex h-12 w-full rounded-xl border border-input bg-white overflow-hidden focus-within:ring-2 focus-within:ring-secondary transition-all">
              <div className="flex items-center gap-1.5 bg-slate-100 px-3.5 text-slate-700 font-semibold text-sm border-r border-input select-none">
                <span className="text-base leading-none">🇮🇳</span>
                <span>+91</span>
              </div>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                maxLength={10}
                value={values.phone}
                onChange={handlePhoneChange}
                placeholder="98765 43210"
                autoComplete="tel"
                className="flex-1 bg-transparent px-4 py-2 text-sm text-black placeholder:text-muted-foreground focus:outline-none"
              />
            </div>
            {errors.phone ? (
              <p className="text-xs font-medium text-destructive">{errors.phone}</p>
            ) : (
              <p className="text-[11px] text-muted-foreground">
                Enter your 10-digit mobile number
              </p>
            )}
          </div>

          {errors.submit && (
            <p className="rounded-xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive">
              {errors.submit}
            </p>
          )}

          {/* Proceed Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className={`h-14 w-full bg-primary text-base font-bold text-white hover:bg-primary/90 rounded-xl transition-all shadow-md ${buttonclassName}`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Saving Details...
              </>
            ) : (
              <span className="flex items-center justify-center gap-2">
                CONTINUE TO STEP 2
                <ArrowRight className="h-5 w-5" />
              </span>
            )}
          </Button>

          <div className="pt-1 text-center">{bottomText}</div>
        </form>
      )}

      {/* ================= STEP 2 FORM ================= */}
      {step === 2 && (
        <form onSubmit={handleStep2Submit} className="space-y-4" noValidate>
          {/* Company Name */}
          <div className="space-y-1.5">
            <label htmlFor="company_name" className="text-sm font-semibold text-slate-800">
              Company Name *
            </label>
            <input
              id="company_name"
              name="company_name"
              value={values.company_name}
              onChange={handleChange}
              placeholder="e.g. Jindal Rolling Mill / Tata Metaliks"
              className="flex h-12 w-full rounded-xl border border-input bg-white px-4 py-2 text-sm text-black placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary transition-all"
            />
            {errors.company_name && (
              <p className="text-xs font-medium text-destructive">
                {errors.company_name}
              </p>
            )}
          </div>

          {/* Estimated Budget Dropdown */}
          <div className="space-y-1.5">
            <label htmlFor="budget" className="text-sm font-semibold text-slate-800">
              Estimated Budget *
            </label>
            <div className="relative">
              <select
                id="budget"
                name="budget"
                value={values.budget}
                onChange={handleChange}
                className="flex h-12 w-full appearance-none rounded-xl border border-input bg-white px-4 py-2 pr-10 text-sm text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary transition-all cursor-pointer"
              >
                <option value="" disabled>
                  Select your estimated budget
                </option>
                {BUDGET_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-500">
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
            {errors.budget && (
              <p className="text-xs font-medium text-destructive">{errors.budget}</p>
            )}
          </div>

          {/* Custom Requirement (Optional) */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label
                htmlFor="custom_requirement"
                className="text-sm font-semibold text-slate-800"
              >
                Custom Requirement
              </label>
              <span className="text-[11px] text-muted-foreground font-normal">
                (Optional)
              </span>
            </div>
            <textarea
              id="custom_requirement"
              name="custom_requirement"
              rows={3}
              value={values.custom_requirement}
              onChange={handleChange}
              placeholder="e.g. 25 TPH billet reheating furnace, gas fired, 130x130mm billet size, located in Raipur..."
              className="flex w-full rounded-xl border border-input bg-white px-4 py-2.5 text-sm text-black placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary transition-all resize-none"
            />
          </div>

          {errors.submit && (
            <p className="rounded-xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive">
              {errors.submit}
            </p>
          )}

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5 pt-1">
            <Button
              type="button"
              variant="secondary"
              onClick={() => setStep(1)}
              disabled={isSubmitting}
              className="h-14 px-5 rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold transition-all shadow-sm"
              title="Back to Step 1"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>

            <Button
              type="submit"
              disabled={isSubmitting}
              className={`h-14 flex-1 bg-primary text-base font-bold text-white hover:bg-primary/90 rounded-xl transition-all shadow-md ${buttonclassName}`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                buttonText
              )}
            </Button>
          </div>

          <div className="pt-1 text-center">{bottomText}</div>
        </form>
      )}
    </div>
  )
}
