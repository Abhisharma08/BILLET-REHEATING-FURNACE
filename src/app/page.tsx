"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ShieldCheck,
  Factory,
  Settings,
  Phone,
  ArrowRight,
  Flame,
  Wrench,
  BarChart3,
  CheckCircle2,
  Building2,
  Cpu,
  Hammer,
  Cog,
  Truck,
  ClipboardList,
  MessageCircle,
  Dumbbell as DumbbellIcon,
  RotateCcw as RotateCcwIcon,
  FlaskConical as FlaskIcon,
} from "lucide-react"

import LeadForm from "@/components/LeadForm"
import SectionHeader from "@/components/SectionHeader"

const LOGO_URL =
  "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1779361354/cropped-Continental-Furnaces-Logo_q8ict4.jpg"

const HERO_IMAGE =
  "https://res.cloudinary.com/ddqqlfsjp/image/upload/v1774679097/P1510960_1_1_1_wrknkg.jpg"

const FURNACE_IMAGE =
  "https://res.cloudinary.com/ddqqlfsjp/image/upload/v1774679097/P1510960_1_1_1_wrknkg.jpg"

export default function LandingPage() {
  const scrollToLeadForm = () => {
    const candidates = [
      document.getElementById("top-form-desktop"),
      document.getElementById("top-form-mobile"),
      document.getElementById("bottom-form"),
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
      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-700 backdrop-blur-md">
        <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
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

          <div className="flex items-center gap-3">
            <Badge className="hidden border-none bg-primary px-5 py-2 text-sm text-white md:flex">
              35 Years of Trust
            </Badge>

            <a
              href="tel:+919811304306"
              className="flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-primary/90"
            >
              <Phone className="h-4 w-4" />
              +91 98113 04306
            </a>
          </div>
        </div>
      </nav>

      <main className="w-full pt-20 pb-24 lg:pb-0">
        {/* HERO */}
        <section className="relative overflow-hidden bg-slate-700 py-20 lg:py-24">
          <div className="absolute inset-0">
            <Image
              src={HERO_IMAGE}
              alt="Bogie Hearth Furnace"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-[#07111F]/95 via-[#07111F]/90 to-[#07111F]/70" />

          <div className="container relative z-10 mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[60%_40%] lg:gap-16">
              {/* LEFT */}
              <div className="space-y-8 text-white">
                <div className="space-y-5">
                  <h1 className="max-w-4xl text-xl font-bold leading-tight md:text-5xl">
                    Bogie Hearth Furnace — India&apos;s Most Reliable Car-Bottom
                    Furnace for Heavy Heat Treatment
                  </h1>

                  <h2 className="max-w-3xl text-lg font-semibold leading-relaxed text-primary md:text-2xl">
                    2 to 20 Tons Capacity | Up to 1,200°C 
                    <br /> | ±5°C Uniformity | Gas / Oil / Electric | Custom-Built
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {[
                    {
                      icon: <Factory className="h-5 w-5 text-primary" />,
                      text: "35 Years of Engineering Trust",
                    },
                    {
                      icon: (
                        <ShieldCheck className="h-5 w-5 text-primary" />
                      ),
                      text: "ISO 9001:2015 & 14001:2015 Certified",
                    },
                    {
                      icon: <Settings className="h-5 w-5 text-primary" />,
                      text: "Custom-Built for Your Load Size & Industry",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm"
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

              {/* STICKY FORM */}
              <div
                className="hidden lg:block sticky top-28"
                id="top-form-desktop"
              >


                  <LeadForm
                  />

                  {/* <div className="mt-6 border-t border-white/10 pt-5">
                    <div className="flex items-start gap-3 text-sm text-white/80">
                      <Phone className="mt-0.5 h-4 w-4 text-primary" />

                      <p>
                        Our furnace engineers respond within 4 working hours
                        <br />
                        +91 98113 04306 | +91 98119 54834
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
        </section>

        {/* MOBILE FORM */}
        <section
          className="bg-slate-700 px-4 pb-10 lg:hidden"
          id="top-form-mobile"
        >
            <LeadForm
            />
         
        </section>

        {/* PRODUCT INTRO */}
        <section className="bg-white py-20">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[40%_60%]">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={FURNACE_IMAGE}
                  alt="Bogie Hearth Furnace"
                  width={800}
                  height={700}
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <SectionHeader
                  title="What Is a Bogie Hearth Furnace — And Why Do Heavy Industries Rely on It?"
                  subtitle=""
                  centered={false}
                />

                <div className="space-y-5 text-lg leading-relaxed text-black/80">
                  <p>
                    The Bogie Hearth Furnace — also known as a Car Bottom
                    Furnace — is engineered specifically for the heat treatment
                    of large, heavy, and bulky components that cannot be
                    processed in conventional batch furnaces.
                  </p>

                  <p>
                    Its movable bogie (carriage) hearth enables smooth loading
                    and unloading of heavy jobs using an overhead crane or
                    trolley — making it the preferred choice for foundries,
                    forging plants, steel fabrication units, and heat treatment
                    shops across India.
                  </p>

                  <p>
                    Designed with advanced refractory insulation, high-grade
                    steel fabrication, and precision PLC temperature controls —
                    Continental&apos;s Bogie Hearth Furnace delivers excellent
                    temperature uniformity, superior energy efficiency, and high
                    productivity across every cycle.
                  </p>
                </div>

                <div className="mt-8 rounded-2xl border-l-4 border-primary bg-slate-100 p-6">
                  <p className="text-lg font-semibold italic leading-relaxed text-black">
                    “When the component is too heavy, too large, or too critical
                    for a standard furnace — the Bogie Hearth is the answer.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEMS */}
        <section className="bg-slate-700 py-20">
          <div className="container mx-auto max-w-7xl px-4">
            <SectionHeader
              title="Is Your Current Heat Treatment Process Causing These Problems?"
              subtitle=""
              light
            />

            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                {
                  title: "Loading & Handling Nightmare",
                  desc: "Large castings, heavy fabrications, and forged components cannot be loaded into fixed-chamber furnaces without damaging the charge or risking operator safety.",
                  icon: <Truck className="h-8 w-8 text-primary" />,
                },
                {
                  title: "Temperature Non-Uniformity = Rejected Parts",
                  desc: "Hotspots and cold zones in standard furnaces cause inconsistent stress relieving and annealing results — leading to part rejections and quality failures.",
                  icon: <Flame className="h-8 w-8 text-primary" />,
                },
                {
                  title: "High Operating Costs, No Process Records",
                  desc: "Older furnaces waste fuel every cycle. Without PLC control and thermocouple logging, there is no traceability or process monitoring.",
                  icon: <BarChart3 className="h-8 w-8 text-primary" />,
                },
              ].map((item, i) => (
                <Card
                  key={i}
                  className="rounded-3xl border border-white/10 bg-black/20"
                >
                  <CardContent className="space-y-5 p-8">
                    {item.icon}

                    <h3 className="text-2xl font-bold leading-snug text-white">
                      {item.title}
                    </h3>

                    <p className="leading-relaxed text-white/80 italic">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="bg-white py-20">
          <div className="container mx-auto max-w-7xl px-4">
            <SectionHeader
              title="Continental Bogie Hearth Furnace — 6 Engineering Advantages Built Into Every Unit"
              subtitle=""
            />

            <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
              {[
                {
                  title: "Movable Bogie Hearth",
                  desc: "Car-bottom type bogie runs on heavy-duty wheels for smooth movement and effortless loading/unloading using overhead crane or trolley.",
                  icon: <Wrench className="h-8 w-8 text-primary" />,
                },
                {
                  title: "Flexible Heating Modes",
                  desc: "Available in Gas, Oil, or Electrical heating systems — engineered for maximum efficiency and consistent long-cycle performance.",
                  icon: <Flame className="h-8 w-8 text-primary" />,
                },
                {
                  title: "Rugged Construction",
                  desc: "Heavy-duty MS structure with reinforced frames, refractory lining, and ceramic fibre insulation for long operational life.",
                  icon: <Hammer className="h-8 w-8 text-primary" />,
                },
                {
                  title: "Temperature Control & Uniformity",
                  desc: "PLC-based temperature control with thermocouple feedback ensures ±5°C chamber uniformity every cycle.",
                  icon: <Cpu className="h-8 w-8 text-primary" />,
                },
                {
                  title: "Safety & Reliability",
                  desc: "Robust sealing systems minimise heat leakage while ensuring long service life and reduced downtime.",
                  icon: <ShieldCheck className="h-8 w-8 text-primary" />,
                },
                {
                  title: "Fully Customisable",
                  desc: "Every furnace is designed according to your load size, process, atmosphere requirement, and production capacity.",
                  icon: <ClipboardList className="h-8 w-8 text-primary" />,
                },
              ].map((item, i) => (
                <Card
                  key={i}
                  className="rounded-3xl border border-slate-200 bg-slate-500 shadow-lg"
                >
                  <CardContent className="flex gap-5 p-8">
                    <div>{item.icon}</div>

                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="leading-relaxed text-white/90 italic">
                        {item.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* TECH SPECS */}
        <section className="bg-slate-700 py-20">
          <div className="container mx-auto max-w-7xl px-4">
            <SectionHeader
              title="Technical Specifications"
              subtitle=""
              light
            />

            <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[65%_35%]">
              <div className="overflow-hidden rounded-3xl border border-white/10">
                <table className="w-full text-left">
                  <tbody>
                    {[
                      [
                        "Capacity Range",
                        "2 to 20 Tons (custom-built higher capacities available)",
                      ],
                      ["Operating Temperature", "Up to 1,200°C"],
                      ["Mode of Heating", "Gas / Oil / Electrical Fired"],
                      [
                        "Construction Material",
                        "Heavy-duty MS frame with refractory/ceramic fibre lining",
                      ],
                      [
                        "Bogie Drive",
                        "Manual or Motorised depending on capacity",
                      ],
                      [
                        "Controls",
                        "Digital PID/PLC-based temperature control",
                      ],
                      [
                        "Temperature Uniformity",
                        "±5°C across the chamber",
                      ],
                      [
                        "Atmosphere",
                        "Air atmosphere standard; inert gas purging available",
                      ],
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className="border-b border-white/10 last:border-none"
                      >
                        <td className="w-1/3 bg-black/20 p-5 font-semibold text-white">
                          {row[0]}
                        </td>

                        <td className="p-5 text-white/90">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="space-y-6">
                <div className="overflow-hidden rounded-3xl shadow-2xl">
                  <Image
                    src={FURNACE_IMAGE}
                    alt="Installed Bogie Hearth Furnace"
                    width={700}
                    height={700}
                    className="h-full w-full object-cover"
                  />
                </div>

                <Button className="h-14 w-full bg-primary text-base font-bold text-white hover:bg-primary/90">
                  Download Full Technical Datasheet
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* APPLICATIONS */}
        <section className="bg-white py-20">
          <div className="container mx-auto max-w-7xl px-4">
            <SectionHeader
              title="What Can You Process in a Continental Bogie Hearth Furnace?"
              subtitle=""
            />

            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 text-primary">
              {[
                {
                  title: "Castings & Forgings",
                  icon: <DumbbellIcon className="h-8 w-8 text-primary" />,
                },
                {
                  title: "Welded Fabrications",
                  icon: <Factory className="h-8 w-8 text-primary" />,
                },
                {
                  title: "Large Steel Parts",
                  icon: <Hammer className="h-8 w-8 text-primary" />,
                },
                {
                  title: "Pre-Heating",
                  icon: <RotateCcwIcon className="h-8 w-8 text-primary" />,
                },
                {
                  title: "Solution Treatment",
                  icon: <FlaskIcon className="h-8 w-8 text-primary" />,
                },
                {
                  title: "Tool & Precision Parts",
                  icon: <Wrench className="h-8 w-8 text-primary" />,
                },
              ].map((item, i) => (
                <Card
                  key={i}
                  className="rounded-3xl border border-slate-200 shadow-md"
                >
                  <CardContent className="space-y-4 p-8 bg-white">
                    <div className="text-4xl">{item.icon}</div>

                    <h3 className="text-2xl font-bold text-black">
                      {item.title}
                    </h3>

                    <p className="leading-relaxed text-black/70 italic">
                      Heavy-duty heat treatment applications requiring precise
                      and uniform temperature control for large industrial
                      components.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ADVANTAGES */}
        <section className="bg-slate-100 py-20">
          <div className="container mx-auto max-w-7xl px-4">
            <SectionHeader
              title="7 Reasons Plant Owners and Purchase Heads Choose Continental's Bogie Hearth Furnace"
              subtitle=""
            />

            <div className="mt-14 space-y-5 ">
              {[
                "Proven performance across foundries, steel plants, forging units, and fabrication workshops",
                "Designed specifically for large and heavy components not possible in standard furnaces",
                "Movable bogie hearth ensures complete ease of material handling and loading",
                "Uniform heating ensures consistent metallurgical results batch after batch",
                "Low operating cost due to ceramic fibre insulation and optimised heating",
                "Flexible furnace design tailored for capacities and process requirements",
                "Strong, durable construction designed for continuous industrial use",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm"
                >
                  <CheckCircle2 className="mt-1 h-6 w-6 text-primary" />

                  <p className="text-lg leading-relaxed text-black/80">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="bg-slate-700 py-20">
          <div className="container mx-auto max-w-7xl px-4">
            <SectionHeader
              title="Industries We Serve"
              subtitle=""
              light
            />

            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Foundries & Casting Plants",
                "Forging & Press Shops",
                "Steel Fabrication & Heavy Engineering",
                "Metal Processing & Surface Treatment",
                "Automotive Component Manufacturers",
                "Heat Treatment Contractors",
              ].map((item, i) => (
                <Card
                  key={i}
                  className="rounded-3xl border border-white/10 bg-black/20"
                >
                  <CardContent className="space-y-4 p-8">
                    <Cog className="h-8 w-8 text-primary" />

                    <h3 className="text-2xl font-bold text-white">{item}</h3>

                    <p className="leading-relaxed text-white/80 italic">
                      Custom-built heavy heat treatment solutions engineered for
                      demanding industrial applications.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

{/* TRUST */}
<section className="bg-white py-20">
  <div className="container mx-auto max-w-7xl px-4">
    <SectionHeader
      title="35+ Years of Industrial Furnace Engineering"
      subtitle=""
    />

    {/* STATS */}
    <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {[
        {
          title: "Years in Operation",
          value: "35+ Since 1987",
        },
        {
          title: "Quality Certification",
          value: "ISO 9001:2015",
        },
        {
          title: "Environmental",
          value: "ISO 14001:2015",
        },
        {
          title: "Manufacturing Base",
          value: "Faridabad, Haryana",
        },
      ].map((item, i) => (
        <Card
          key={i}
          className="rounded-3xl border border-slate-200 bg-slate-700 shadow-sm"
        >
          <CardContent className="space-y-3 p-8 text-center">
            <h3 className="text-lg font-semibold text-white">
              {item.title}
            </h3>

            <p className="text-2xl font-bold text-primary">
              {item.value}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>

    {/* IMAGE BACKGROUND BLOCK */}
    <div className="relative mt-14 overflow-hidden rounded-3xl shadow-2xl">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={FURNACE_IMAGE}
          alt="Continental Furnace Manufacturing"
          fill
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[500px] flex-col justify-end p-8 md:p-12">
        <div className="max-w-3xl space-y-6">
          <p className="text-xl leading-relaxed text-white">
            Every Continental Bogie Hearth Furnace is engineered,
            fabricated, and tested at our Faridabad manufacturing
            facility before dispatch — with full installation and
            commissioning support at your plant.
          </p>

          <div className="flex flex-wrap gap-4">
            <Badge className="bg-primary px-5 py-3 text-white">
              ISO 9001:2015
            </Badge>

            <Badge className="bg-primary px-5 py-3 text-white">
              ISO 14001:2015
            </Badge>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        {/* FINAL CTA */}
        <section
          className="relative overflow-hidden bg-slate-700 py-24"
          id="bottom-form"
        >
          <div className="container relative z-10 mx-auto max-w-5xl px-4 text-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                Need a Bogie Hearth Furnace for Your Plant? Tell Us Your
                Requirement.
              </h2>

              <p className="mx-auto max-w-3xl text-xl leading-relaxed text-white/90">
                Our furnace engineers will prepare a custom technical proposal
                with capacity, specifications, and indicative pricing within 24
                hours — no obligation.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-2xl rounded-3xl bg-primary p-8 shadow-2xl">
              <LeadForm
                bottomText={(<>📞 +91 98113 04306 | +91 98119 54834 
                <br /> 📧 info@confur.net | confur.india@gmail.com 🌐 www.confur.net <br /> 
                📍 Plot No. 34, New DLF Indl. Area, Faridabad, Haryana</>)}
              />
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-slate-700 py-8 pb-28 text-white lg:pb-8">
        <div className="container mx-auto max-w-7xl px-4 text-center text-sm text-white/60">
          <p>
            © {new Date().getFullYear()} Continental Furnaces. All Rights
            Reserved.
          </p>
        </div>
      </footer>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/919811304306?text=Hi,%20I%20need%20a%20quote%20for%20a%20Bogie%20Hearth%20Furnace"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:scale-105"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      {/* MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-30 border-t bg-white p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] lg:hidden">
        <div className="mx-auto flex max-w-7xl gap-2 px-4">
          <a
            href="tel:+919811304306"
            className="flex h-12 flex-1 items-center justify-center rounded-xl bg-slate-700 px-4 text-sm font-bold text-white"
          >
            📞 Call Now
          </a>

          <Button
            className="h-12 flex-1 bg-primary font-bold text-white hover:bg-primary/90"
            onClick={() => {
              scrollToLeadForm()
            }}
          >
            GET QUOTE
          </Button>
        </div>
      </div>
    </div>
  )
}