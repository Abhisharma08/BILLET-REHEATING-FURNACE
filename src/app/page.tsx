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
  {/* URGENCY BAR */}
  {/* <div className="fixed top-0 z-[60] w-full bg-primary py-2 text-center text-sm font-semibold text-white">
    🔥 Limited Slots Open — Get Your Custom Furnace Quote Within 4 Working Hours
    <span className="mx-3 hidden md:inline">|</span>
    <span className="block md:inline">
      Call Now: +91 98113 04306
    </span>
  </div> */}

{/* NAVBAR */}
<nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-slate-700/95 backdrop-blur-md overflow-x-hidden">
  <div className="container mx-auto flex h-16 md:h-24 max-w-7xl items-center justify-between px-4">
    
    {/* LEFT */}
    <div className="flex items-center gap-3 md:gap-5">

      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src={LOGO_URL}
          alt="Continental Furnaces"
          width={180}
          height={55}
          className="h-10 md:h-14 w-auto object-contain"
          priority
        />
      </Link>
    </div>

    {/* RIGHT */}
    <div className="hidden lg:flex items-center gap-5">
      <div className="text-right">

        <p className="text-xs text-white/60">
          ISO 9001:2015 &
          <br />ISO 14001:2015 Certified
        </p>
      </div>

      <Button
        className="bg-primary hover:bg-primary/90 text-white font-bold px-7 h-12 rounded-xl"
        onClick={() => {
          scrollToLeadForm()
        }}
      >
        GET FREE QUOTE →
      </Button>
    </div>
  </div>
</nav>

  <main className="pt-[64px] md:pt-[96px] pb-24 lg:pb-0 w-full">
    {/* HERO SECTION */}
    <section className="relative overflow-hidden bg-background py-20 lg:py-28 w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={HERO_BG_URL}
          alt="Industrial Aluminium Furnace"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/75" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[54%_38%] xl:gap-24">
          {/* LEFT CONTENT */}
          <div className="space-y-8 text-white pt-4">

            {/* Main Heading */}
            <div className="space-y-5">
              <h1 className="max-w-5xl text-3xl font-bold leading-[1.05] tracking-tight text-white md:text-4xl">
              Bogie Hearth Furnace — 
              <br /> India's Most Reliable Car-Bottom Furnace for Heavy Heat Treatment
              </h1>

              <h2 className="max-w-4xl text-2xl font-semibold leading-relaxed text-secondary md:text-2xl">
              2 to 20 Tons Capacity | Up to 1,200°C | 
              <br /> ±5°C Uniformity | Gas / Oil / Electric | 
              <br />Custom-Built|
              </h2>
            </div>

        {/* TRUST TILES */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 max-w-5xl">
          {[
            {
              title: "35 Years of Engineering Trust",
              icon: "🏆",
            },
            {
              title: "ISO 9001:2015 & 14001:2015 Certified",
              icon: "✅",
            },
            {
              title: "Custom-Built for Your Load Size & Industry",
              icon: "⚙️",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-card/70 p-6 backdrop-blur-sm text-center"
            >
              <div className="flex flex-col items-center gap-4">
                {/* ICON */}
                <div className="text-4xl leading-none">
                  {item.icon}
                </div>

                {/* TEXT */}
                <h3 className="text-base md:text-lg font-bold leading-snug text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        </div>

          {/* RIGHT FORM */}
          <div
            className="lg:sticky lg:top-32"
            id="top-form-desktop"
          >
            <LeadForm            />
          </div>
        </div>
      </div>
    </section>

    {/* SECTION 2 — PRODUCT INTRODUCTION */}
<section className="py-24 bg-white w-full">
  <div className="container mx-auto max-w-7xl px-4">
    <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] gap-14 items-center">
      
      {/* LEFT IMAGE */}
      <div className="relative">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-2xl">
          <Image
            src={DEFAULT_PLACEHOLDER}
            alt="Bogie Hearth Furnace"
            width={900}
            height={900}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="space-y-8">
        
        {/* EYEBROW */}
        <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
          Product Introduction
        </div>

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-primary">
          What Is a Bogie Hearth Furnace — And Why Do Heavy Industries Rely on It?
        </h2>

        {/* BODY */}
        <div className="space-y-6 text-lg leading-relaxed text-slate-700">
          <p>
            The Bogie Hearth Furnace — also known as a Car Bottom Furnace — is engineered specifically for the heat treatment of large, heavy, and bulky components that cannot be processed in conventional batch furnaces.
          </p>

          <p>
            Its movable bogie (carriage) hearth enables smooth loading and unloading of heavy jobs using an overhead crane or trolley — making it the preferred choice for foundries, forging plants, steel fabrication units, and heat treatment shops across India.
          </p>

          <p>
            Designed with advanced refractory insulation, high-grade steel fabrication, and precision PLC temperature controls — Continental's Bogie Hearth Furnace delivers excellent temperature uniformity, superior energy efficiency, and high productivity across every cycle.
          </p>
        </div>

        {/* HIGHLIGHT BOX */}
        <div className="border-l-4 border-secondary bg-secondary/10 rounded-r-2xl p-6">
          <p className="text-lg font-semibold leading-relaxed text-primary italic">
            “When the component is too heavy, too large, or too critical for a standard furnace — the Bogie Hearth is the answer.”
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* SECTION 3 — PROBLEM (Pain Points) */}
<section className="relative overflow-hidden bg-slate-200 py-24 w-full">
  {/* Background Grid */}
  <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:60px_60px]" />

  <div className="container relative z-10 mx-auto max-w-7xl px-4">
    
    {/* HEADING */}
    <h2 className="max-w-5xl mx-auto text-center text-3xl md:text-4xl font-bold leading-tight text-primary">
      Is Your Current Heat Treatment Process Causing These Problems?
    </h2>

    {/* CARDS */}
    <div className="mt-14 grid grid-cols-1 gap-7 lg:grid-cols-3">
      {[
        {
          title: "Loading & Handling Nightmare",
          desc: "Large castings, heavy fabrications, and forged components cannot be loaded into fixed-chamber furnaces without damaging the charge or risking operator safety. Every loading becomes a bottleneck.",
        },
        {
          title: "Temperature Non-Uniformity = Rejected Parts",
          desc: "Hotspots and cold zones in standard furnaces cause inconsistent stress relieving and annealing results — leading to part rejections, rework costs, and quality audit failures on critical components.",
        },
        {
          title: "High Operating Costs, No Process Records",
          desc: "Poorly insulated, older furnaces waste 25–35% of fuel every cycle. Without digital PLC control and thermocouple-based logging, there is no traceability, no energy monitoring, and no data for quality certification.",
        },
      ].map((item, i) => (
        <Card
          key={i}
          className="rounded-3xl border border-white/10 bg-slate-700 shadow-2xl"
        >
          <CardContent className="p-8 space-y-5">
            <div className="h-1.5 w-20 rounded-full bg-primary" />

            <h3 className="text-2xl font-bold leading-snug text-white">
              {item.title}
            </h3>

            <p className="text-lg leading-relaxed text-white/80 italic">
              {item.desc}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

{/* SECTION 4 — KEY FEATURES */}
<section className="py-24 bg-white w-full">
  <div className="container mx-auto max-w-7xl px-4">

    {/* HEADING */}
    <h2 className="max-w-5xl mx-auto text-center text-3xl md:text-4xl font-bold leading-tight text-primary">
      Continental Bogie Hearth Furnace — 6 Engineering Advantages Built Into Every Unit
    </h2>

    {/* FEATURES GRID */}
    <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
      {[
        {
          icon: "🔧",
          title: "Movable Bogie Hearth",
          subtitle: "The defining feature that makes heavy heat treatment possible",
          desc: "Car-bottom type bogie runs on heavy-duty wheels for smooth, effortless movement. Enables easy loading and unloading of bulky components using overhead crane or trolley — zero manual handling risk.",
        },
        {
          icon: "🔥",
          title: "Flexible Heating Modes",
          subtitle: "Run on the fuel your plant already uses",
          desc: "Available in Gas, Oil, or Electrical heating systems. Each configuration is designed for maximum fuel efficiency and consistent performance across long production cycles.",
        },
        {
          icon: "🏗️",
          title: "Rugged Construction",
          subtitle: "Built for continuous industrial use, not occasional batch runs",
          desc: "Fabricated from heavy-duty MS structure with reinforced frames. High-quality refractory lining and ceramic fibre insulation minimise heat loss and extend furnace operational life significantly.",
        },
        {
          icon: "📊",
          title: "Temperature Control & Uniformity",
          subtitle: "±5°C across the entire chamber — every cycle",
          desc: "Automatic digital/PLC-based temperature controllers with thermocouple feedback. Multiple burners/heating elements ensure ±5°C temperature uniformity — critical for stress relieving and annealing of precision components.",
        },
        {
          icon: "🛡️",
          title: "Safety & Reliability",
          subtitle: "Engineered for long service life with minimal downtime",
          desc: "Robust bogie sealing system prevents heat leakage around the chamber door. Designed for long service life with minimal maintenance requirements — reducing your total cost of ownership.",
        },
        {
          icon: "✏️",
          title: "Fully Customisable",
          subtitle: "No standard size. Every furnace is built to your specification.",
          desc: "Available in a wide range of sizes and capacities as per customer requirements. Furnace design tailored for your specific load size, capacity, process, and industrial application — including inert gas purging provision.",
        },
      ].map((item, i) => (
        <Card
          key={i}
          className="rounded-3xl border border-slate-200 bg-slate-50 shadow-xl"
        >
          <CardContent className="p-8">
          <div className="space-y-6">
            
            {/* ICON */}
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-3xl">
              {item.icon}
            </div>

            {/* TITLE */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold leading-snug text-primary">
                {item.title}
              </h3>

              {/* SUBTITLE */}
              <p className="text-base font-semibold leading-relaxed text-secondary">
                {item.subtitle}
              </p>
            </div>

            {/* DESCRIPTION */}
            <p className="text-lg leading-relaxed text-slate-700">
              {item.desc}
            </p>
          </div>              
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

{/* SECTION 5 — TECHNICAL SPECIFICATIONS */}
<section className="relative overflow-hidden bg-slate-200 py-24 w-full">
  {/* Background Grid */}
  <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:60px_60px]" />

  <div className="container relative z-10 mx-auto max-w-7xl px-4">

    {/* HEADING */}
    <h2 className="text-3xl md:text-4xl font-bold leading-tight text-secondary">
      Technical Specifications
    </h2>

    {/* MAIN GRID */}
    <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[65%_35%] items-start">

      {/* LEFT TABLE */}
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-700 shadow-2xl">
        <table className="w-full text-left">
          <tbody>
            {[
              [
                "Capacity Range",
                "2 to 20 Tons (custom-built higher capacities available)",
              ],
              [
                "Operating Temperature",
                "Up to 1,200°C",
              ],
              [
                "Mode of Heating",
                "Gas / Oil / Electrical Fired",
              ],
              [
                "Construction Material",
                "Heavy-duty MS frame with refractory/ceramic fibre lining",
              ],
              [
                "Bogie Drive",
                "Manual or Motorised, depending on capacity",
              ],
              [
                "Controls",
                "Digital PID/PLC-based temperature control + thermocouple feedback",
              ],
              [
                "Temperature Uniformity",
                "±5°C across the chamber",
              ],
              [
                "Atmosphere",
                "Air atmosphere standard; inert gas purging provision available",
              ],
              [
                "Customisation",
                "Furnace design tailored for load size, capacity, and industrial application",
              ],
            ].map((row, i) => (
              <tr
                key={i}
                className="border-b border-white/10 last:border-none"
              >
                <td className="w-[34%] bg-black/20 p-5 text-base font-bold text-secondary align-top">
                  {row[0]}
                </td>

                <td className="p-5 text-base leading-relaxed text-white/90">
                  {row[1]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* RIGHT IMAGE + CTA */}
      <div className="relative space-y-6">

        {/* MOBILE CTA */}
        <div className="lg:hidden">
          <Button className="h-14 w-full rounded-xl bg-primary px-8 text-base font-bold text-white hover:bg-primary/90">
            Download Full Technical Datasheet →
          </Button>
        </div>

        {/* IMAGE */}
        <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
          <Image
            src={DEFAULT_PLACEHOLDER}
            alt="Continental Bogie Hearth Furnace"
            width={900}
            height={1200}
            className="h-full w-full object-cover"
          />
        </div>

        {/* DESKTOP CTA */}
        <div className="hidden lg:block">
          <Button className="h-14 rounded-xl bg-primary px-8 text-base font-bold text-white hover:bg-primary/90">
            Download Full Technical Datasheet →
          </Button>
        </div>
      </div>
    </div>
  </div>
</section>


{/* SECTION 7 — ADVANTAGES */}
<section className="py-24 bg-white w-full">
  <div className="container mx-auto max-w-7xl px-4">

    {/* HEADING */}
    <h2 className="max-w-5xl mx-auto text-center text-3xl md:text-4xl font-bold leading-tight text-primary">
      7 Reasons Plant Owners and Purchase Heads Choose Continental's Bogie Hearth Furnace
    </h2>

{/* ADVANTAGES LIST */}
<div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-2">
  {[
    "Designed specifically for large and heavy components — not possible to process in any other standard furnace type",

    "Movable bogie hearth ensures complete ease of material handling, loading, and unloading — even for the heaviest charges",

    "Uniform heating across the entire chamber ensures consistent metallurgical results — batch after batch",

    "Low operating cost due to energy-efficient ceramic fibre insulation and optimised heating systems",

    "Strong, durable construction designed for continuous industrial use — not seasonal or light-duty applications",

    "Flexible — tailored for different capacities, heating modes, and atmospheric requirements per your process",

    "Proven performance across steel plants, foundries, forging units, and fabrication workshops across India",
  ].map((item, i) => (
    <div
      key={i}
      className="flex items-start gap-4 rounded-2xl border border-slate-300/80 bg-white/90 px-6 py-5"
    >
      {/* CHECK */}
      <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
        ✓
      </div>

      {/* TEXT */}
      <p className="text-base leading-relaxed text-slate-700">
        {item}
      </p>
    </div>
  ))}
</div>
</div>
</section>

{/* SECTION 8 — INDUSTRIES SERVED */}
<section className="relative overflow-hidden bg-slate-200 py-24 w-full">
  {/* Background Grid */}
  <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:60px_60px]" />

  <div className="container relative z-10 mx-auto max-w-7xl px-4">

    {/* HEADING */}
    <h2 className="max-w-5xl mx-auto text-center text-3xl md:text-4xl font-bold leading-tight text-primary">
      Industries We Serve
    </h2>

    {/* INDUSTRY CARDS */}
    <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {[
        {
          icon: "🏭",
          title: "Foundries & Casting Plants",
          desc: "Heat treatment of heavy castings post-pour",
        },
        {
          icon: "🔧",
          title: "Forging & Press Shops",
          desc: "Pre-heating + post-forging stress relieving",
        },
        {
          icon: "🏗️",
          title: "Steel Fabrication & Heavy Engineering",
          desc: "Stress relieving of welded structures and large weldments",
        },
        {
          icon: "⚙️",
          title: "Metal Processing & Surface Treatment",
          desc: "Annealing before surface treatment for better adhesion",
        },
        {
          icon: "🚗",
          title: "Automotive Component Manufacturers",
          desc: "Large die sets, fixtures, and structural components",
        },
        {
          icon: "🏠",
          title: "Heat Treatment Contractors",
          desc: "Batch jobs for multiple clients — flexible capacity configurations",
        },
        {
          icon: "🔩",
          title: "Tool Rooms & Precision Engineering",
          desc: "Large dies, jigs, moulds requiring controlled heat treatment",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="rounded-3xl border border-white/10 bg-slate-700 p-7 shadow-2xl"
        >
          <div className="space-y-5">

            {/* ICON */}
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-3xl">
              {item.icon}
            </div>

            {/* CONTENT */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold leading-snug text-white">
                {item.title}
              </h3>

              <p className="text-base leading-relaxed text-white/75">
                {item.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* SECTION 9 — TRUST & CREDENTIALS */}
<section className="py-24 bg-white w-full">
  <div className="container mx-auto max-w-7xl px-4">

    {/* HEADING */}
    <h2 className="max-w-5xl mx-auto text-center text-3xl md:text-4xl font-bold leading-tight text-primary">
      Trust & Credentials
    </h2>

    {/* MAIN GRID */}
    <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-[34%_66%] items-start">

      {/* LEFT STAT BADGES */}
      <div className="space-y-5">
        {[
          {
            icon: "🏆",
            title: "Years in Operation",
            value: "35+ Since 1987",
          },
          {
            icon: "✅",
            title: "Quality Certification",
            value: "ISO 9001:2015 Certified",
          },
          {
            icon: "🌿",
            title: "Environmental",
            value: "ISO 14001:2015 Certified",
          },
          {
            icon: "📍",
            title: "Manufacturing Base",
            value: "Faridabad, Haryana — Pan-India Installation",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-lg"
          >
            <div className="flex items-start gap-4">

              {/* ICON */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-3xl">
                {item.icon}
              </div>

              {/* CONTENT */}
              <div className="space-y-1">
                <h3 className="text-lg font-bold leading-snug text-primary">
                  {item.title}
                </h3>

                <p className="text-base leading-relaxed text-slate-700">
                  {item.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT IMAGE + CAPTION */}
      <div className="space-y-6 max-w-4xl">

        {/* IMAGE */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-2xl">
          <Image
            src={DEFAULT_PLACEHOLDER}
            alt="Continental Furnaces Manufacturing Facility"
            width={1600}
            height={900}
            className="h-[420px] w-full object-cover"
          />
        </div>

        {/* TEXT BELOW IMAGE */}
        <div className="space-y-4">
          <p className="text-base leading-relaxed text-slate-700 italic">
            "Every Continental Bogie Hearth Furnace is engineered, fabricated, and tested at our Faridabad manufacturing facility before dispatch — with full installation and commissioning support at your plant."
          </p>

          <p className="text-lg font-semibold text-primary">
            — Continental Furnaces, Since 1987
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


{/* FINAL CTA */}
<section className="py-24 bg-slate-200 relative overflow-hidden w-full">
  <div className="container mx-auto px-4 max-w-7xl relative z-10">
    
    {/* TOP GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-[48%_52%] gap-14 items-start">
      
      {/* LEFT CONTENT */}
      <div className="space-y-7 pt-6">
        <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
          Get Your Quote
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
          Need a Bogie Hearth Furnace for Your Plant? Tell Us Your Requirement.
        </h2>

        <p className="text-lg text-black max-w-2xl leading-relaxed">
          Our furnace engineers will prepare a custom technical proposal with capacity, specifications, and indicative pricing within 24 hours — no obligation.
          <br />
          <br />
          <br />
          <span className="font-bold text-xl md:text-2xl text-primary">
          Within 24 hours. Zero obligation.
          </span>
        </p>
      </div>

      {/* RIGHT FORM */}
      <div className="w-full">
        <LeadForm />
      </div>
    </div>

    {/* CONTACT BLOCK */}
    <div className="mt-20 rounded-3xl border border-slate-300 bg-white p-8 md:p-10 text-center shadow-xl">
      <h3 className="text-2xl font-bold text-primary">
        Continental Furnaces
      </h3>

      <p className="mt-5 text-base md:text-lg leading-relaxed text-slate-700 max-w-3xl mx-auto">
        Plot No. 34, New DLF Industrial Area,
        Faridabad, Haryana, India
        <br />
        <br />
        📧 info@confur.net | confur.india@gmail.com
        <br />
        🌐 www.confur.net
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