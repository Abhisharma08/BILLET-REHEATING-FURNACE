"use client"

import React, { useState } from "react"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { submitToHubSpot } from "@/app/actions/hubspot"

type FormValues = {
  company_name: string
  name: string
  email: string
  phone: string
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
  email: "",
  phone: "",
  lead_source: "Aluminium Furnace LP",
}

function validateForm(values: FormValues) {
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

  if (values.company_name.trim().length < 2) {
    errors.company_name = "Please enter your company name."
  }

  return errors
}

export default function LeadForm({
  className,
  title = "Get a Free Consultation",
  subtitle = "Discuss your furnace requirement with our engineers.",
  buttonText = "GET A FREE QUOTE →",
  buttonclassName = "",
  bottomText = <></>,
}: LeadFormProps) {
  const [values, setValues] = useState<FormValues>(defaultValues)

  const [errors, setErrors] = useState<FormErrors>({})

  const [isSubmitting, setIsSubmitting] = useState(false)

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

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault()

    const validationErrors = validateForm(values)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})

    setIsSubmitting(true)

    try {
      const result = await submitToHubSpot({
        ...values,
        designation: "",
        furnace_requirement: "",
        production_capacity: "",
      })

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
      <h3 className="mb-2 text-left text-xl md:text-2xl font-bold text-primary leading-tight">
        {title}
      </h3>

      <p className="mb-6 text-left text-sm text-muted-foreground leading-relaxed">
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

        <p className="text-center text-xs leading-relaxed text-muted-foreground">
          {bottomText}
        </p>
      </form>
    </div>
  )
}