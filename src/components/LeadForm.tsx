"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { submitToHubSpot } from "@/app/actions/hubspot"

type FormValues = {
  company_name: string
  name: string
  designation: string
  email: string
  phone: string
  furnace_requirement: string
  production_capacity: string
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
}

const defaultValues: FormValues = {
  company_name: "",
  name: "",
  designation: "",
  email: "",
  phone: "",
  furnace_requirement: "",
  production_capacity: "",
  lead_source: "Aluminium Furnace LP",
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

  if (!values.furnace_requirement) {
    errors.furnace_requirement =
      "Please select a furnace requirement."
  }

  return errors
}

function validateFinalStep(values: FormValues) {
  const errors: FormErrors = {}

  if (values.company_name.trim().length < 2) {
    errors.company_name = "Please enter your company name."
  }

  if (!values.production_capacity) {
    errors.production_capacity =
      "Please select production capacity."
  }

  return errors
}

export default function LeadForm({
  className,
  title = "Get a Free Technical Consultation",
  subtitle = "Discuss your furnace requirement with our engineers.",
  buttonText = "REQUEST FREE QUOTE NOW →",
  buttonclassName = "",
  bottomText = (
    <>
      Response within 4 working hours
      <br />
      Your details are kept confidential and used only for consultation purposes
    </>
  ),
}: LeadFormProps) {
  const [values, setValues] = useState<FormValues>(defaultValues)

  const [errors, setErrors] = useState<FormErrors>({})

  const [isSubmitting, setIsSubmitting] = useState(false)

  const [step, setStep] = useState(1)

  const router = useRouter()

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
        production_capacity: "",
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

      router.push("/thank-you")
    } catch (error) {
      console.error("Submission Exception:", error)

      setErrors({
        submit:
          "We encountered a problem. Please try again or contact us directly.",
      })

      setIsSubmitting(false)
    }
  }

  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white p-6 shadow-2xl md:p-8 ${className}`}
    >
      <h3 className="mb-2 text-3xl md:text-4xl font-bold text-primary leading-tight">
        {title}
      </h3>

      <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
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
            {/* Name */}
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

            {/* Email */}
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

            {/* Phone */}
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

            {/* Furnace Requirement */}
            <div className="space-y-1.5">
              <label
                htmlFor="furnace_requirement"
                className="text-sm font-semibold text-black"
              >
                Furnace Requirement *
              </label>

              <select
                id="furnace_requirement"
                name="furnace_requirement"
                value={values.furnace_requirement}
                onChange={handleChange}
                className="flex h-12 w-full rounded-xl border border-input bg-white px-4 py-2 text-sm text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              >
                <option value="">
                  Select Requirement
                </option>

                <option value="Bogie Hearth Oven">
                  Bogie Hearth Oven
                </option>

                <option value="Ageing Furnace">
                  Ageing Furnace
                </option>

                <option value="Custom Requirement">
                  Custom Requirement
                </option>
              </select>

              {errors.furnace_requirement ? (
                <p className="text-sm text-destructive">
                  {errors.furnace_requirement}
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
            {/* Company Name */}
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

            {/* Designation */}
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

                <option value="Owner">Owner</option>

                <option value="Purchase Head">
                  Purchase Head
                </option>

                <option value="Plant Manager">
                  Plant Manager
                </option>

                <option value="Operations Head">
                  Operations Head
                </option>

                <option value="Other">Other</option>
              </select>
            </div>

            {/* Production Capacity */}
            <div className="space-y-1.5">
              <label
                htmlFor="production_capacity"
                className="text-sm font-semibold text-black"
              >
                Production Capacity Needed *
              </label>

              <select
                id="production_capacity"
                name="production_capacity"
                value={values.production_capacity}
                onChange={handleChange}
                className="flex h-12 w-full rounded-xl border border-input bg-white px-4 py-2 text-sm text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              >
                <option value="">
                  Select Production Capacity
                </option>

                <option value="<500 kg">
                  Less than 500 kg
                </option>

                <option value="500 kg–5 Ton">
                  500 kg – 5 Ton
                </option>

                <option value="5–20 Ton">
                  5 – 20 Ton
                </option>

                <option value="20+ Ton">
                  20+ Ton
                </option>
              </select>

              {errors.production_capacity ? (
                <p className="text-sm text-destructive">
                  {errors.production_capacity}
                </p>
              ) : null}
            </div>

            {/* Submit Error */}
            {errors.submit ? (
              <p className="rounded-xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                {errors.submit}
              </p>
            ) : null}

            {/* Final Submit Button */}
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

        {/* Bottom Text */}
        <p className="text-center text-xs leading-relaxed text-muted-foreground">
          {bottomText}
        </p>
      </form>
    </div>
  )
}