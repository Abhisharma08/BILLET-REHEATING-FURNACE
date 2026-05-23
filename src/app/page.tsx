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
  Trophy,
  BadgeCheck,
  Cog,
  Fuel,
  Zap,
  PencilRuler,
  Package,
  ArrowUp,
  Hammer,
  Drill,
  Car,
  Recycle,
  BrickWall,
  Globe,
  
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
              Billet Reheating Furnace 10 to 120 Tons Per Hour · 700°C – 1,320°C
              </h1>

              <h2 className="max-w-4xl text-2xl font-semibold leading-relaxed text-secondary md:text-2xl">
              Designed to meet the critical demands of the metal industry — 
              <br />
              ensuring efficient and precise heating for billets before forging, rolling, or extrusion. 
              <br />
              Consistent temperature control, uniform heating, and improved material properties for superior production quality.
              </h2>
            </div>

{/* TRUST TILES */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
  {[
  {
    title: "35 Years of Engineering Trust",
    icon: Trophy,
  },
  {
    title: "ISO 9001:2015 & 14001:2015 Certified",
    icon: BadgeCheck,
  },
  {
    title: "Custom-Built for Your Load Size & Industry",
    icon: Cog,
  },
  {
    title: "Full Installation & Commissioning",
    icon: Wrench,
  },
  ].map((item, i) => (
    <div
      key={i}
      className="rounded-2xl border border-white/10 bg-card/70 p-5 backdrop-blur-sm text-center"
    >
      <div className="flex flex-col items-center gap-3">
        {/* ICON */}
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <item.icon className="h-8 w-8 text-primary" strokeWidth={2.2} />
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

{/* SECTION 1 — PRODUCT INTRODUCTION */}
<section className="py-24 bg-white w-full">
  <div className="container mx-auto max-w-7xl px-4">

    {/* MAIN GRID */}
    <div className="grid grid-cols-1 gap-14 lg:grid-cols-[58%_42%] items-center">

      {/* LEFT CONTENT */}
      <div className="space-y-8">

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-primary">
          Precise. Efficient. Built for High-Volume Production.
        </h2>

        {/* BODY COPY */}
        <div className="space-y-6 text-lg leading-relaxed text-slate-700 italic">
          <p>
            The Billet Reheating Furnace is designed to meet the critical demands of the metal industry — ensuring efficient and precise heating for billets before they undergo processes such as forging, rolling, or extrusion.
          </p>

          <p>
            These furnaces are essential in the preparation of billets for further shaping — offering consistent temperature control and uniform heating to improve material properties and overall production quality batch after batch.
          </p>

          <p>
            Continental Furnaces is a globally recognised leader in the design, development, and manufacturing of high-performance billet reheating furnaces. From 10 TPH compact configurations to 120 TPH large-scale installations — every furnace is custom-engineered to your exact production requirements.
          </p>
        </div>

        {/* HIGHLIGHT QUOTE */}
        <div className="rounded-3xl border-l-4 border-primary bg-primary/5 p-7">
          <p className="text-lg font-semibold leading-relaxed text-primary italic">
            "Uniform heating from 700°C to 1,320°C — delivering consistent metallurgical properties, reduced scale loss, and lower energy cost per tonne of production."
          </p>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative">
        <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-2xl">
          <Image
            src={DEFAULT_PLACEHOLDER}
            alt="Continental Billet Reheating Furnace"
            width={1200}
            height={1200}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</section>

{/* SECTION 2 — PAIN POINTS */}
<section className="relative overflow-hidden bg-slate-200 py-24 w-full">
  {/* Background Grid */}
  <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:60px_60px]" />

  <div className="container relative z-10 mx-auto max-w-7xl px-4">

    {/* HEADING */}
    <h2 className="max-w-5xl mx-auto text-center text-3xl md:text-4xl font-bold leading-tight text-primary">
      Is Your Billet Reheating Process a Bottleneck in Your Production Line?
    </h2>

    {/* PAIN CARDS */}
    <div className="mt-16 grid grid-cols-1 gap-7 lg:grid-cols-3">
      {[
        {
          title: "Inconsistent Billet Temperature",
          desc: "Non-uniform heating across billet length leads to poor rolling quality, increased roll wear, breakages during forming, and costly production stoppages — directly impacting your output per shift and product rejection rates.",
        },
        {
          title: "Excessive Fuel Consumption",
          desc: "Older furnaces without recuperators and zone control waste 25–35% of fuel every cycle. At ₹60–90/kg of furnace oil or ₹40–60/SCM of gas, this is a significant recurring cost that eats directly into your operating margin.",
        },
        {
          title: "No Monitoring. No Accountability.",
          desc: "Without PLC and real-time temperature logging there is no way to track energy consumption per tonne, identify inefficiencies, maintain process repeatability, or meet quality audit and certification requirements.",
        },
      ].map((item, i) => (
        <Card
          key={i}
          className="rounded-3xl border border-white/10 bg-slate-700 shadow-2xl"
        >
          <CardContent className="p-8 space-y-6">

            {/* TOP BAR */}
            <div className="h-1.5 w-20 rounded-full bg-primary" />

            {/* TITLE */}
            <h3 className="text-2xl font-bold leading-snug text-white">
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-lg leading-relaxed text-white/80 italic">
              {item.desc}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

{/* SECTION 3 — ADVANTAGES */}
<section className="py-24 bg-white w-full">
  <div className="container mx-auto max-w-7xl px-4">

    {/* HEADING */}
    <h2 className="max-w-5xl mx-auto text-center text-3xl md:text-4xl font-bold leading-tight text-primary">
      5 Advantages That Set Continental Billet Reheating Furnaces Apart
    </h2>

    {/* ADVANTAGE GRID */}
    <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
      {[
{
    icon: Fuel,
    title: "Versatile Fuel Options",
    desc: "Our furnaces can be equipped to operate on both oil and gas - offering flexibility to suit your operational needs and fuel availability. Dual-fuel and electric configurations also available. No infrastructure change required.",
  },
  {
    icon: Zap,
    title: "High Efficiency",
    desc: "Designed for optimal thermal efficiency - our furnaces minimise energy consumption while maximising heating performance. Advanced recuperator technology recovers waste heat, leading to measurably reduced operational costs per tonne.",
  },
  {
    icon: Building2,
    title: "Robust Construction",
    desc: "Built with durable materials and advanced refractory technology - our furnaces ensure longevity and reliability in even the most demanding high-throughput environments. Engineered for continuous operation at 700°C to 1,320°C.",
  },
  {
    icon: BarChart3,
    title: "Advanced Control Systems",
    desc: "Equipped with state-of-the-art PLC control technologies - our furnaces provide precise temperature regulation and real-time monitoring. Enhances product quality, process consistency, and provides full data logging for quality audits.",
  },
  {
    icon: PencilRuler,
    title: "Customisation Solutions",
    desc: "We offer tailored solutions to meet your specific production requirements - ensuring that every furnace aligns perfectly with your throughput goals, billet dimensions, fuel type, plant layout, and quality standards.",
  },
  {
    icon: Wrench,
    title: "End-to-End Support",
    desc: "Design → Manufacturing → Installation → Commissioning → Annual Maintenance Contract - all under one roof. Continental Furnaces provides full lifecycle support from concept to continuous operation, pan-India.",
  },
      ].map((item, i) => (
        <Card
          key={i}
          className="rounded-3xl border border-slate-200 bg-slate-50 shadow-xl"
        >
          <CardContent className="p-8">
            <div className="space-y-6">

              {/* ICON */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <item.icon className="h-7 w-7 text-primary" strokeWidth={2.2} />
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold leading-snug text-primary">
                {item.title}
              </h3>

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

{/* SECTION 5 — PROCESS FLOW */}
<section className="py-24 bg-slate-200 w-full">
  <div className="container mx-auto max-w-7xl px-4">

    {/* HEADING */}
    <h2 className="max-w-5xl mx-auto text-center text-3xl md:text-4xl font-bold leading-tight text-primary">
      Billet Reheating Process Flow — Step by Step
    </h2>

    {/* PROCESS FLOW */}
    <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-5">
      {[
  {
    step: "1",
    icon: Package,
    title: "Billet Loading",
    desc: "Cold billets placed on charging grid via crane or conveyor",
  },
  {
    step: "2",
    icon: ArrowUp,
    title: "Hydraulic Push",
    desc: "Hydraulic pusher feeds billets into the heating chamber uniformly",
  },
  {
    step: "3",
    icon: Flame,
    title: "Uniform Heating",
    desc: "Gas / oil / electric burners heat billets to 700–1,320°C uniformly",
  },
  {
    step: "4",
    icon: BarChart3,
    title: "PLC Monitoring",
    desc: "Real-time temperature monitoring, zone control, and data logging",
  },
  {
    step: "5",
    icon: Factory,
    title: "Ejection to Mill",
    desc: "Hot billets ejected via roller table directly to rolling or forging mill",
  },
      ].map((item, i) => (
        <div
          key={i}
          className="relative rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-lg"
        >
          <div className="space-y-6">

            {/* STEP NUMBER */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
              {item.step}
            </div>

            {/* ICON */}
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <item.icon className="h-8 w-8 text-primary" strokeWidth={2.2} />
            </div>

            {/* CONTENT */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold leading-snug text-primary">
                {item.title}
              </h3>

              <p className="text-base leading-relaxed text-slate-700">
                {item.desc}
              </p>
            </div>
          </div>

          {/* CONNECTOR LINE */}
          {i !== 4 && (
            <div className="absolute -right-3 top-1/2 hidden h-[2px] w-6 bg-primary lg:block" />
          )}
        </div>
      ))}
    </div>
  </div>
</section>

{/* SECTION 6 — APPLICATIONS */}
<section className="py-24 bg-white w-full">
  <div className="container mx-auto max-w-7xl px-4">

    {/* HEADING */}
    <h2 className="max-w-5xl mx-auto text-center text-3xl md:text-4xl font-bold leading-tight text-primary">
      What Gets Processed in a Continental Billet Reheating Furnace?
    </h2>

    {/* APPLICATION GRID */}
    <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
      {[
        {
          icon: Factory,
          title: "Rolling Mill Production",
          desc: "Reheating of steel billets, blooms, and slabs before rolling into bars, rods, angles, channels, and structural sections. 10–120 TPH throughput.",
        },
        {
          icon: Hammer,
          title: "Hot Forging Operations",
          desc: "Precise pre-heating of billets to forging temperature (1,100°C–1,250°C) before press or hammer forging — ensuring full plasticity and consistent die filling.",
        },
        {
          icon: Drill,
          title: "Extrusion Lines",
          desc: "Uniform heating of aluminium and steel billets before extrusion — temperature uniformity is critical to surface finish quality and extrusion pressure control.",
        },
        {
          icon: Car,
          title: "Automotive Forging",
          desc: "Reheating of billets for automotive component forging — crankshafts, connecting rods, axles, and gear blanks requiring consistent metallurgical quality.",
        },
        {
          icon: Cog,
          title: "Bar & Wire Rod Mills",
          desc: "Continuous feeding and reheating for bar and wire rod rolling lines — high TPH configurations with recuperator for maximum energy efficiency per tonne.",
        },
        {
          icon: Building2,
          title: "Heavy Section Rolling",
          desc: "Reheating of large billets and blooms for heavy sections — I-beams, H-beams, rails, and heavy structural profiles requiring 1,200°C+ temperatures.",
        },
      ].map((item, i) => (
        <Card
          key={i}
          className="rounded-3xl border border-slate-200 bg-slate-50 shadow-xl"
        >
          <CardContent className="p-8">
            <div className="space-y-6">

              {/* ICON */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <item.icon className="h-7 w-7 text-primary" strokeWidth={2.2} />
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold leading-snug text-primary">
                {item.title}
              </h3>

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

{/* SECTION 7 — WHY CONTINENTAL */}
<section className="py-24 bg-slate-200 w-full">
  <div className="container mx-auto max-w-7xl px-4">

    {/* HEADING */}
    <h2 className="max-w-5xl mx-auto text-center text-3xl md:text-4xl font-bold leading-tight text-primary">
      Why Rolling Mill & Forging Plant Owners Across India Choose Continental
    </h2>

    {/* USP GRID */}
    <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
      {[
      {
        icon: Fuel,
        title: "Versatile Fuel Flexibility",
        desc: "Oil, Gas, Dual-Fuel, or Electric — your choice. No expensive infrastructure overhaul. Switch fuel modes as per availability and pricing.",
      },
      {
        icon: Recycle,
        title: "Recuperator for Heat Recovery",
        desc: "Built-in recuperator recovers waste heat from flue gases — reduces net fuel consumption by up to 20% vs non-recuperated designs. Pays back in months.",
      },
      {
        icon: BrickWall,
        title: "Advanced Refractory Lining",
        desc: "High-grade ceramic fibre and refractory brick lining for extended operational life — significantly lower relining frequency vs standard construction.",
      },
      {
        icon: BarChart3,
        title: "PLC Zone Control",
        desc: "Multi-zone PLC with real-time temperature logging per zone — ensures billet uniformity end-to-end. Full data export for quality certification and process audit.",
      },
      {
        icon: BadgeCheck,
        title: "ISO Certified, Export-Ready",
        desc: "ISO 9001:2015 & 14001:2015 certified manufacturing. Every furnace meets global quality and environmental standards — trusted by Indian and international clients.",
      },
      {
        icon: Factory,
        title: "35 Years. Hundreds of Installations.",
        desc: "Since 1987 — Continental Furnaces has installed billet reheating furnaces across rolling mills, forging plants, and extrusion lines pan-India and internationally.",
      },
      ].map((item, i) => (
        <Card
          key={i}
          className="rounded-3xl border border-slate-200 bg-slate-50 shadow-xl"
        >
          <CardContent className="p-8">
            <div className="space-y-6">

              {/* ICON */}
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <item.icon className="h-7 w-7 text-primary" strokeWidth={2.2} />
            </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold leading-snug text-primary">
                {item.title}
              </h3>

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

{/* SECTION 8 — INDUSTRIES SERVED */}
<section className="py-24 bg-white w-full">
  <div className="container mx-auto max-w-7xl px-4">

    {/* HEADING */}
    <h2 className="max-w-5xl mx-auto text-center text-3xl md:text-4xl font-bold leading-tight text-primary">
      Built for Your Industry
    </h2>

    {/* INDUSTRY GRID */}
    <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
      {[
      {
          icon: Factory,
          title: "Rolling Mills & Steel Processing",
          desc: "Billet reheating for bar, rod, structural section, and sheet rolling",
        },
        {
          icon: Hammer,
          title: "Forging & Foundry Plants",
          desc: "Pre-heating for hot forging — crankshafts, axles, gears, flanges",
        },
        {
          icon: Drill,
          title: "Extrusion Lines",
          desc: "Aluminium & steel billet heating for extrusion presses",
        },
        {
          icon: Car,
          title: "Automotive Components",
          desc: "Precision billet reheating for automotive forging supply chains",
        },
        {
          icon: Building2,
          title: "Heavy Engineering",
          desc: "Structural steel, I-beams, rails, heavy section reheating",
        },
        {
          icon: Cog,
          title: "Wire Rod Mills",
          desc: "High-throughput billet reheating for wire and rod production",
        },
        {
          icon: Globe,
          title: "Export-Oriented Units",
          desc: "ISO-certified furnaces meeting international quality standards",
        },
      ].map((item, i) => (
        <Card
          key={i}
          className="rounded-3xl border border-slate-200 bg-slate-50 shadow-xl"
        >
          <CardContent className="p-8">
            <div className="space-y-6">

              {/* ICON */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <item.icon className="h-7 w-7 text-primary" strokeWidth={2.2} />
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold leading-snug text-primary">
                {item.title}
              </h3>

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


{/* SECTION 9 — TRUST & CREDENTIALS */}
<section className="py-24 bg-slate-200 w-full">
  <div className="container mx-auto max-w-7xl px-4">

    {/* HEADING */}
    <h2 className="max-w-5xl mx-auto text-center text-3xl md:text-4xl font-bold leading-tight text-primary">
      Trust & Credentials
    </h2>

    {/* STATS GRID */}
    <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-5">
      {[
        {
          title: "Years in Operation",
          value: "35+",
        },
        {
          title: "Established",
          value: "1987 — Faridabad",
        },
        {
          title: "Max TPH Capacity",
          value: "120",
        },
        {
          title: "Product Lines",
          value: "15+",
        },
        {
          title: "Certification",
          value: "ISO 9001 & 14001",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-lg"
        >
          <div className="space-y-4">

            {/* VALUE */}
            <h3 className="text-3xl font-bold leading-none text-primary">
              {item.value}
            </h3>

            {/* TITLE */}
            <p className="text-base leading-relaxed text-slate-700">
              {item.title}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* CERTIFICATION BADGES */}
    <div className="mt-16 flex flex-wrap items-center justify-center gap-5">
      {[
        "ISO 9001:2015 — Quality Management System",
        "ISO 14001:2015 — Environmental Management",
        "Since 1987 — 35+ Years Engineering Excellence",
      ].map((item, i) => (
        <div
          key={i}
          className="rounded-full border border-primary/20 bg-primary/10 px-7 py-4 text-sm font-semibold text-primary shadow-sm"
        >
          {item}
        </div>
      ))}
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
        {/* <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
          Get Your Quote
        </div> */}

        <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
          Tell Us Your Production Requirement.
        </h2>

        <p className="text-lg text-black max-w-2xl leading-relaxed">
          Our furnace engineers will prepare a custom technical proposal — capacity, fuel consumption estimate, system layout, and indicative price. Within 24 hours. No obligation.
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
         info@confur.net | confur.india@gmail.com
        <br />
         www.confur.net
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