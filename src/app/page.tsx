"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ShieldCheck,
  Flame,
  Factory,
  Settings,
  CheckCircle2,
  Phone,
  ArrowRight,
  Building2,
  Wrench,
  Cpu,
  BarChart3,
} from "lucide-react"
import LeadForm from "@/components/LeadForm"
import SectionHeader from "@/components/SectionHeader"

const LOGO_URL = "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1779361354/cropped-Continental-Furnaces-Logo_q8ict4.jpg"
const HERO_BG_URL = "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
const DEFAULT_PLACEHOLDER = "https://picsum.photos/seed/furnace/1200/900"

export default function LandingPage() {
  const scrollToLeadForm = () => {
    const candidates = [
      document.getElementById("top-form-desktop"),
      document.getElementById("top-form-mobile"),
    ].filter(Boolean) as HTMLElement[]

    const target =
      candidates.find((el) => el.getClientRects().length > 0) ?? candidates[0]

    if (!target) return

    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    })
  }

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-700 backdrop-blur-md border-b border-white/10 overflow-x-hidden">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between max-w-7xl">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src={LOGO_URL}
              alt="Continental Furnaces"
              width={180}
              height={60}
              className="h-12 w-auto object-contain"
              priority
            />

          </Link>

          <div className="flex items-center gap-4">
            <Badge className="bg-primary text-white border-none px-6 py-3 text-sm">
              Since 1987
            </Badge>
            {/* <Button
              variant="ghost"
              className="hidden md:block text-white hover:bg-white/10"
              onClick={() => {
                scrollToLeadForm()
              }}
            >
              Technical Consultation
            </Button> */}

            {/* <Button
              className="bg-primary hover:bg-primary/90 text-white font-bold px-6"
              onClick={() => {
                scrollToLeadForm()
              }}
            >
              Request Quote
            </Button> */}
          </div>
        </div>
      </nav>

      <main className="pt-20 pb-24 lg:pb-0 w-full">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-background py-20 lg:py-24 w-full">
          <div className="absolute inset-0 opacity-100">
            <Image
              src={HERO_BG_URL}
              alt="Industrial Aluminium Furnace"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-[#07111F]/95 via-[#07111F]/90 to-[#07111F]/75" />

          <div className="container mx-auto px-4 relative z-10 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10 lg:gap-16 items-start w-full">
              <div className="text-white space-y-7 w-full">
                <h1 className="text-4xl md:text-4xl font-bold leading-tight text-white max-w-4xl">
                  India&apos;s Most Trusted Aluminium Furnace Manufacturer — Custom-Built for Your Production Line
                </h1>

                <h2 className="text-primary text-xl md:text-1xl font-semibold leading-relaxed max-w-3xl">
                         Bogie Hearth Ovens | 250°C – 600°C | 
                  <br /> Ageing & Precipitation Hardening Furnaces | 
                  <br /> PLC/HMI Controlled
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-5xl">
                  {[
                    {
                      icon: <Factory className="h-5 w-5 text-primary" />,
                      text: "35+ Years of Engineering Excellence",
                    },
                    {
                      icon: <ShieldCheck className="h-5 w-5 text-primary" />,
                      text: "ISO 9001:2015 & 14001:2015 Certified",
                    },
                    {
                      icon: <Settings className="h-5 w-5 text-primary" />,
                      text: "Custom-Built for Every Production Scale",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm"
                    >
                      <div className="flex items-start gap-3">
                        {item.icon}
                        <p className="text-sm font-medium leading-relaxed text-white/90">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* <div className="hidden lg:block sticky top-28" id="top-form-desktop">
                <div className="rounded-2xl border border-white/10 bg-card p-6 shadow-2xl">
                  <div className="mb-6 space-y-2">
                    <h3 className="text-2xl font-bold text-white">
                      Get a Free Technical Consultation
                    </h3>
                    <p className="text-sm text-white/70">
                      Discuss your furnace requirement with our engineers.
                    </p>
                  </div> */}

                  <LeadForm
                    title="Get a Free Technical Consultation"
                    subtitle=""
                    buttonText="REQUEST FREE QUOTE NOW →"
                  />

                  {/* <div className="mt-5 border-t border-white/10 pt-5 text-sm text-white/80">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>
                        Call Directly: +91 98113 04306 | Response within 4 working hours
                      </span>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* MOBILE FORM */}
        {/* <section className="lg:hidden p-4 bg-background" id="top-form-mobile">
          <div className="rounded-2xl border border-white/10 bg-card p-6 shadow-2xl">
            <div className="mb-6 space-y-2">
              <h3 className="text-2xl font-bold text-white">
                Get a Free Technical Consultation
              </h3>
              <p className="text-sm text-white/70">
                Discuss your furnace requirement with our engineers.
              </p>
            </div>

            <LeadForm />

            <div className="mt-5 border-t border-white/10 pt-5 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>
                  Call Directly: +91 98113 04306 | Response within 4 working hours
                </span>
              </div>
            </div>
          </div>
        </section> */}

          {/* PROBLEM SECTION */}
          <section className="relative py-20 w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={DEFAULT_PLACEHOLDER}
                alt="Old furnace problems"
                fill
                className="object-cover"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-slate" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 max-w-7xl">
              <SectionHeader
                title={"Is Your Current Aluminium Processing Furnace Costing You More Than It Should?"}
                subtitle=""
                light
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {[
                  {
                    title: "Uneven Heat Distribution",
                    desc: "Inconsistent temperature across load causes metallurgical defects, rework, and material rejection",
                    icon: <Flame className="h-8 w-8 text-primary" />,
                  },
                  {
                    title: "High Energy Consumption",
                    desc: "Poor insulation and outdated heating systems inflate operating costs every month",
                    icon: <BarChart3 className="h-8 w-8 text-primary" />,
                  },
                  {
                    title: "No Process Control or Data Logging",
                    desc: "Manual operations with no PLC = no repeatability, no compliance, no quality records",
                    icon: <Cpu className="h-8 w-8 text-primary" />,
                  },
                ].map((item, i) => (
                  <Card
                    key={i}
                    className="bg-slate-700 border border-white/10 text-black rounded-2xl"
                  >
                    <CardContent className="p-8 space-y-5 ">
                      {item.icon}

                      <h3 className="text-2xl font-bold leading-snug text-white-bold">
                        {item.title}
                      </h3>

                      <p className="text-white leading-relaxed italic">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

        {/* PRODUCTS SECTION */}
        <section className="py-20 bg-white w-full">
          <div className="container mx-auto px-4 max-w-7xl">
            <SectionHeader light
              title="Continental Aluminium Furnaces — Engineered for Zero Compromise"
              subtitle=""
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-14">
              {/* PRODUCT 1 */}
              <Card className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
                <div className="relative h-72">
                  <Image
                    src={DEFAULT_PLACEHOLDER}
                    alt="Bogie Hearth Oven"
                    fill
                    className="object-cover"
                  />
                </div>

                <CardContent className="p-8 space-y-6 bg-slate-900">
                  <div>
                    <h3 className="text-3xl font-bold text-primary leading-tight">
                      Bogie Hearth Oven — Uniform Heating. Zero Contamination.
                    </h3>
                  </div>
                  <div className="mt-8 overflow-hidden rounded-2xl">
                  <p className="text-slate-600 leading-relaxed text-base text-white/90 mb-7 italic">
                    Optimised for aluminium annealing, ageing, and stress relieving. Electric heating ensures clean, uniform heat distribution with no gas contamination — critical for high-purity aluminium processing.
                  </p>
                  </div>

                  <div className="overflow-hidden rounded-2xl border border-slate-200 ">
                    <table className="w-full text-left text-sm bg-slate-600">
                      <tbody>
                        {[
                          ["Temperature Range", "250°C – 600°C"],
                          ["Heating Mode", "Electric (Gas/Oil optional)"],
                          ["Circulation", "Forced Air — uniform heat"],
                          ["Controls", "PLC/HMI + Data Logging"],
                          ["Capacity", "Hundreds of kg to several tonnes"],
                        ].map((row, i) => (
                          <tr key={i} className="border-b border-slate-200 last:border-none">
                            <td className="p-4 font-semibold text-white bg-slate-700 w-1/2">
                              {row[0]}
                            </td>
                            <td className="p-4 text-slate-700 text-white">{row[1]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="space-y-2">
                    <p className="font-semibold text-primary">Industries it serves:</p>
                    <p className="text-slate-600 text-white italic">
                      Non-ferrous wire, cable manufacturing, automotive electrical components, aluminium recycling
                    </p>
                  </div>

                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12"
                    onClick={() => {
                      scrollToLeadForm()
                    }}
                  >
                    Get Specifications + Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* PRODUCT 2 */}
              <Card className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
                <div className="relative h-72">
                  <Image
                    src={DEFAULT_PLACEHOLDER}
                    alt="Ageing Furnace"
                    fill
                    className="object-cover"
                  />
                </div>

                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-primary leading-tight">
                      Precipitation Hardening Furnace — Precision Ageing for Maximum Alloy Strength
                    </h3>
                  </div>

                  <p className="text-slate-600 leading-relaxed text-base text-white/90 italic">
                    Thermal treatment that enhances strength, hardness, and fatigue performance of aluminium alloys through controlled precipitation. Critical for automotive, aerospace, and electrical grade aluminium components.
                  </p>

                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-600">
                    <table className="w-full text-left text-sm bg-slate-600">
                      <tbody>
                        {[
                          ["Temperature Range", "95°C – 205°C"],
                          ["Cycle Duration", "4 – 24 Hours"],
                          ["Heating Mode", "Gas / Oil / Electrical"],
                          ["Controls", "PLC with Data Logging"],
                          ["Cooling", "Forced Air or Water Quenching"],
                        ].map((row, i) => (
                          <tr key={i} className="border-b border-slate-200 last:border-none">
                            <td className="p-4 font-semibold text-white bg-slate-700 w-1/2">
                              {row[0]}
                            </td>
                            <td className="p-4 text-slate-700 text-white">{row[1]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="space-y-2">
                    <p className="font-semibold text-primary">Industries it serves:</p>
                    <p className="text-slate-600 text-white italic">
                      Automotive die casting, electrical conductor manufacturing, heat treatment units
                    </p>
                  </div>

                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12"
                    onClick={() => {
                      scrollToLeadForm()
                    }}
                  >
                    Get Specifications + Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* WHY CONTINENTAL */}
        <section className="py-20 bg-slate-100 w-full">
          <div className="container mx-auto px-4 max-w-7xl">
            <SectionHeader
              title="Why 100+ Industries Across India Trust Continental Furnaces"
              subtitle=""
              light
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
              {[
                {
                  icon: <Cpu className="h-8 w-8 text-primary" />,
                  title: "State-of-the-Art PLC/HMI",
                  desc: "Advanced automation, real-time monitoring, full data logging for quality compliance",
                },
                {
                  icon: <Flame className="h-8 w-8 text-primary" />,
                  title: "Superior Thermal Uniformity",
                  desc: "±5°C temperature consistency across entire chamber — zero hotspots",
                },
                {
                  icon: <BarChart3 className="h-8 w-8 text-primary" />,
                  title: "Energy-Efficient Design",
                  desc: "Advanced ceramic fibre insulation reduces fuel consumption by up to 25% vs conventional furnaces",
                },
                {
                  icon: <Wrench className="h-8 w-8 text-primary" />,
                  title: "Custom-Built Every Time",
                  desc: "Every furnace engineered to your exact material, production volume, and floor layout",
                },
                {
                  icon: <ShieldCheck className="h-8 w-8 text-primary" />,
                  title: "ISO 9001 & 14001 Certified",
                  desc: "International quality and environmental management standards — export-ready",
                },
                {
                  icon: <Building2 className="h-8 w-8 text-primary" />,
                  title: "End-to-End Support",
                  desc: "Design → Manufacturing → Installation → Commissioning → AMC — all under one roof",
                },
              ].map((item, i) => (
                <Card
                  key={i}
                  className="bg-slate-700 border border-white/10 rounded-2xl text-white"
                >
                  <CardContent className="p-8 space-y-5">
                    {item.icon}
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    <p className="text-white/90 leading-relaxed italic">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES SECTION */}
        <section className="py-20 bg-white w-full">
          <div className="container mx-auto px-4 max-w-7xl">
            <SectionHeader light
              title="Built for Your Industry"
              subtitle=""
            />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {[
                "Non-Ferrous Wire Industry",
                "Automotive & Electrical",
                "Cable Manufacturing",
                "Heat Treatment Units",
                "Aluminium Recycling",
                "Metal Processing & Surface Treatment",
              ].map((item, i) => (
                <Card
                  key={i}
                  className="border-l-4 border-l-secondary rounded-2xl shadow-md bg-slate-700"
                >
                  <CardContent className="p-6 space-y-3 bg-slate-700 rounded-xl">
                    <h3 className="text-xl font-bold text-primary">
                      {item}
                    </h3>
                    <p className="text-white leading-relaxed text-sm italic">
                      Custom furnace systems engineered for industrial-scale aluminium processing requirements.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF */}
        <section className="relative py-20 w-full overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={DEFAULT_PLACEHOLDER}
              alt="Continental Furnaces Factory"
              fill
              className="object-cover"
            />
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-slate-100" />

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: <Factory className="h-10 w-10 text-secondary" />,
                  text: "35+ Years in Industrial Furnace Manufacturing",
                },
                {
                  icon: <Building2 className="h-10 w-10 text-secondary" />,
                  text: "1987 — Established in Faridabad, Haryana",
                },
                {
                  icon: <ShieldCheck className="h-10 w-10 text-secondary" />,
                  text: "ISO 9001:2015 & ISO 14001:2015 Certified",
                },
                {
                  icon: <Wrench className="h-10 w-10 text-secondary" />,
                  text: "Pan-India Installation & Service Support",
                },
              ].map((item, i) => (
                <Card
                  key={i}
                  className="rounded-2xl border border-white/20 bg-slate-700 backdrop-blur-sm shadow-xl"
                >
                  <CardContent className="p-8 text-center flex flex-col items-center justify-center gap-5">
                    {item.icon}

                    <p className="font-bold text-whiteleading-relaxed">
                      {item.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 bg-slate-700 relative overflow-hidden w-full">
          <div className="container mx-auto px-4 max-w-5xl text-center relative z-10 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Ready to Upgrade Your Aluminium Processing Line?
            </h2>

            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Get a free technical consultation from our furnace engineers — respond within 4 working hours
            </p>

            <div className="max-w-2xl mx-auto pt-6">
              <LeadForm/>
            </div>

            <div className="pt-4 text-white/90 text-sm">
              <p>
                Or call us directly: +91 98113 04306 | info@confur.net | www.confur.net
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-background text-white pt-8 pb-28 lg:py-8 w-full border-t border-white/10">
        <div className="container mx-auto px-4 max-w-7xl text-center text-sm text-white/60">
          <p>
            © {new Date().getFullYear()} Continental Furnaces. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden p-4 bg-white border-t shadow-[0_-4px_10px_rgba(0,0,0,0.1)] flex gap-2 w-screen">
        <div className="w-full flex gap-2 max-w-7xl mx-auto px-4">
          <Button
            className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold h-12"
            onClick={() => {
              scrollToLeadForm()
            }}
          >
            REQUEST FREE QUOTE NOW
          </Button>
        </div>
      </div>
    </div>
  )
}