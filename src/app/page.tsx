"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Palette, 
  Smartphone, 
  Type, 
  Layout, 
  Briefcase, 
  GraduationCap, 
  Star, 
  Users, 
  Monitor, 
  Lightbulb, 
  ShieldCheck, 
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Youtube
} from "lucide-react"
import LeadForm from "@/components/LeadForm"
import SectionHeader from "@/components/SectionHeader"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const LOGO_URL = "https://res.cloudinary.com/ddqqlfsjp/image/upload/v1778481466/INSD-Logo_Horizontal_fhm4u5.jpg";
const HERO_BG_URL = "https://res.cloudinary.com/ddqqlfsjp/image/upload/v1774679097/P1510960_1_1_1_wrknkg.jpg";
const DEFAULT_PLACEHOLDER = "https://picsum.photos/seed/placeholder/800/600";

export default function LandingPage() {
  const studentImg = PlaceHolderImages.find(img => img.id === "student-work");
  const brandingImg = PlaceHolderImages.find(img => img.id === "branding-mockup");
  const uiImg = PlaceHolderImages.find(img => img.id === "ui-ux-design");

  const scrollToLeadForm = () => {
    // We render separate LeadForm blocks for desktop vs mobile layouts.
    // Use the visible one as the scroll target.
    const candidates = [
      document.getElementById("top-form-desktop"),
      document.getElementById("top-form-mobile"),
    ].filter(Boolean) as HTMLElement[];

    const target =
      candidates.find((el) => el.getClientRects().length > 0) ?? candidates[0];

    if (!target) return;

    // Ensure layout has settled (especially after click handlers / route changes)
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b shadow-sm overflow-x-hidden">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between max-w-7xl">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src={LOGO_URL} 
              alt="INSD Logo" 
              width={300} 
              height={89} 
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              className="hidden md:block text-primary font-semibold"
              onClick={() => {
                scrollToLeadForm();
              }}
            >
              Book Counselling
            </Button>
            <Button 
              className="bg-secondary hover:bg-secondary/90 text-white font-bold px-6"
              onClick={() => {
                scrollToLeadForm();
              }}
            >
              Apply Now
            </Button>
          </div>
        </div>
      </nav>

      <main className="pt-20 pb-24 lg:pb-0 w-full">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary py-20 lg:py-20 w-full">
          <div className="absolute inset-0 opacity-200">
            <Image 
              src={HERO_BG_URL}
              alt="Design Workspace" 
              fill 
              className="object-cover"
              priority
              data-ai-hint="graphic design workspace"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
          <div className="container mx-auto px-4 relative z-10 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
              <div className="text-white space-y-6 w-full">
                <Badge className="bg-secondary text-white border-none px-4 py-1 text-sm mb-4 animate-pulse shadow-[0_0_18px_rgba(219,52,54,0.55)]">
                  Admissions Open 2026-27
                </Badge>
                <h1 className="text-4xl md:text-6xl font-headline leading-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.45)]">
                  We Don’t Just Teach Design. We Build Careers
                </h1>
                <p className="text-xl text-white max-w-xl">
                  Join INSD - India’s Skill School and build job-ready graphic design skills for a billion-dollar industry.
                </p>
                <div className="flex flex-wrap gap-2 max-w-2xl">
                  {[
                    "15 Years of Creative Excellence",
                    "75+ Campuses",
                    "23 States",
                    "30,000 Students",
                    "300+ Industry Partners",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="inline-flex items-center gap-2 rounded-full bg-white/12 border border-white/35 px-3 py-1.5 text-sm font-semibold text-white shadow-[0_6px_14px_rgba(0,0,0,0.2)]"
                    >
                      <Star className="h-3.5 w-3.5 shrink-0 text-secondary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 max-w-2xl">
                  {[
                    "100% Lifetime Placement Support",
                    "2000+ Placements Last Year",
                    "Packages upto ₹18 LPA",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="inline-flex items-center gap-2 rounded-full bg-secondary text-white border border-secondary px-4 py-2 text-sm font-semibold shadow-[0_8px_20px_rgba(219,52,54,0.35)]"
                    >
                      <ShieldCheck className="h-4 w-4 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm italic text-white/70">
                  * Limited Seats Available. Next batch starts soon.
                </p>
              </div>
              <div className="hidden lg:block" id="top-form-desktop">
                <LeadForm />
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Lead Form Trigger (Visible on small screens) */}
        <section className="lg:hidden p-4 pb-24 bg-muted border-b" id="top-form-mobile">
          <LeadForm />
        </section>

        {/* Value Section */}
        <section className="py-20 bg-white w-full">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src={studentImg?.imageUrl || DEFAULT_PLACEHOLDER} 
                  alt="Student at Work" 
                  fill 
                  className="object-cover"
                  data-ai-hint="designer working"
                />
              </div>
              <div className="space-y-6">
                <SectionHeader 
                  title="Skills. Careers. Placements. Come First." 
                  subtitle="At INSD, we focus on what truly matters: skills, careers, and placements."
                  centered={false}
                />
             
                <ul className="space-y-4">
                  {[
                    "Skills over degrees",
                    "Careers over courses",
                    "Industry readiness over theory"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-primary font-medium">
                      <ShieldCheck className="text-secondary h-6 w-6" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-lg font-semibold text-primary mt-4">
                  We build professionals, not just designers.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-2">
                  From day one, your learning is focused on making you job-ready and helping you earn.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What You Will Learn */}
        <section className="py-20 bg-muted w-full">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <SectionHeader 
                  title="Graphic Design is Powering India’s Digital Growth" 
                  subtitle="India’s digital and e-commerce sector is rapidly expanding."
                  centered={false}
                />
                <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground">
                  <li>India’s digital and e-commerce sector is rapidly expanding</li>
                  <li>Businesses are increasing investment in branding and digital marketing</li>
                  <li>Designers are in demand across startups, agencies, content platforms, and global brands</li>
                </ul>
                <p className="text-xl font-semibold text-primary">Graphic Design = Career-Ready Skill</p>
                <p className="text-lg text-muted-foreground">With the right skills, you can work, grow, and earn.</p>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={brandingImg?.imageUrl || DEFAULT_PLACEHOLDER}
                  alt="Graphic design showcase"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose INSD */}
        <section className="py-20 bg-white w-full">
          <div className="container mx-auto px-4 max-w-7xl">
            <SectionHeader 
              title="Build Job-Ready Skills for Real Industry Roles" 
              subtitle="This program is designed to make you a professional graphic designer, not just someone who knows tools."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <GraduationCap />, title: "Branding & Visual Identity", desc: "Build strong brand thinking and visual language skills." },
                { icon: <Lightbulb />, title: "Social Media & Digital Design", desc: "Create engaging digital creatives for modern platforms." },
                { icon: <Users />, title: "Typography & Layout Systems", desc: "Master structure, hierarchy, readability, and composition." },
                { icon: <Star />, title: "Adobe Photoshop, Illustrator & InDesign", desc: "Gain practical command over industry-standard tools." },
                { icon: <Layout />, title: "UI/UX Fundamentals", desc: "Understand user-centric interface and experience basics." },
                { icon: <ShieldCheck />, title: "Portfolio & Live Projects", desc: "Job-ready learning starts from Day 1." },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-muted hover:border-secondary/30 hover:bg-muted/30 transition-all flex gap-4">
                  <div className="bg-primary/5 p-3 rounded-lg h-fit text-primary">
                    {item.icon}
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-headline text-lg text-primary">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Options */}
        <section className="py-20 bg-primary text-white w-full">
          <div className="container mx-auto px-4 max-w-7xl">
            <SectionHeader 
              title="Choose Your Path. Build Your Career." 
              subtitle="No matter where you start - the outcome is the same: Industry-ready skills. Career opportunities. Placement support."
              light
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {[
                { title: "Under Graduate Programs", duration: "3-4 Years", eligibility: "10+2", desc: "Comprehensive foundation for beginners." },
                { title: "Post Graduate Programs", duration: "2 Years", eligibility: "Any 3 year Design Graduation", desc: "Advanced specialization for graduates." },
                { title: "Advanced Diploma", duration: "1-2 Years", eligibility: "Any 10+2", desc: "Intensive industry-focused training." },
                { title: "Diploma", duration: "1 Year", eligibility: "Any 10+2", desc: "Quick start into the design industry." },
                { title: "Short Term Courses", duration: "3-6 Months", eligibility: "Any 10+2", desc: "Skill-specific certification courses." },
              ].map((item, i) => (
                <Card key={i} className="bg-white/10 border-white/20 hover:bg-white/20 transition-all group">
                  <CardContent className="p-6 text-center flex flex-col h-full">
                    <div className="space-y-3 flex-grow">
                      <h4 className="text-xl font-headline text-white">{item.title}</h4>
                      <Badge variant="secondary" className="bg-secondary text-white">{item.duration}</Badge>
                      <div className="text-xs text-white/60 bg-white/5 p-2 rounded border border-white/10">
                        <span className="font-bold text-secondary mr-1">Eligibility:</span>
                        {item.eligibility}
                      </div>
                      <p className="text-sm text-white/70">{item.desc}</p>
                    </div>
                    <div className="pt-4 mt-auto">
                      <Button 
                        variant="outline"
                        className="w-full border-white/60 text-white font-bold text-sm bg-transparent hover:bg-white/10 hover:text-white"
                        onClick={() => {
                          scrollToLeadForm();
                        }}
                      >
                        Enquire Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-white relative overflow-hidden w-full">
          <div className="container mx-auto px-4 max-w-7xl text-center space-y-8 relative z-10">
            <h2 className="text-4xl md:text-5xl font-headline text-primary">Your Future Won’t Wait</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The right skills can help you start earning.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-white font-bold h-14 px-10 text-lg w-full sm:w-auto"
                onClick={() => {
                  scrollToLeadForm();
                }}
              >
                Start Your Career in Design Today
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary/5 h-14 px-10 text-lg w-full sm:w-auto"
                onClick={() => {
                  scrollToLeadForm();
                }}
              >
                Learn More
              </Button>
              <Button 
                variant="ghost" 
                size="lg" 
                className="text-primary font-semibold h-14 px-10 text-lg w-full sm:w-auto"
                onClick={() => {
                  scrollToLeadForm();
                }}
              >
                Enquire Now
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">Don’t wait to transform your creativity into a career.</p>
          </div>
        </section>

        {/* Lead Form Section (Final Lead Capture) */}
        <section id="lead-form" className="py-10 bg-muted w-full">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-headline text-primary">Are you ready to start learning job-ready skills?</h2>
                  <p className="text-lg text-muted-foreground">
                    Get industry-focused training, career support, and placement assistance. Fill in your details and take the first step towards your future.
                  </p>
                  <p className="text-base font-semibold text-primary">
                    Launch Your Career. Not Just a Course.
                  </p>
                </div>
                <LeadForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white pt-8 pb-28 lg:py-8 w-full">
        <div className="container mx-auto px-4 max-w-7xl text-center text-xs text-white/60">
          <p>© {new Date().getFullYear()} International School of Design (INSD) Delhi. All Rights Reserved.</p>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden p-4 bg-white border-t shadow-[0_-4px_10px_rgba(0,0,0,0.1)] flex gap-2 w-screen">
        <div className="w-full flex gap-2 max-w-7xl mx-auto px-4">
          <Button 
            className="flex-1 bg-secondary text-white font-bold h-12"
            onClick={() => {
              scrollToLeadForm();
            }}
          >
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  )
}
