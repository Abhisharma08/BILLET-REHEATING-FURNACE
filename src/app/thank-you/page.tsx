import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowLeft } from "lucide-react"

const LOGO_URL = "https://res.cloudinary.com/ddqqlfsjp/image/upload/v1778481466/INSD-Logo_Horizontal_fhm4u5.jpg";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col bg-muted/30 overflow-x-hidden">
      {/* Simple Header */}
      <nav className="bg-white border-b h-20 flex items-center w-full">
        <div className="container mx-auto px-4 max-w-7xl w-full">
          <Link href="/">
            <Image 
              src={LOGO_URL} 
              alt="INSD Logo" 
              width={180} 
              height={45} 
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl border p-8 md:p-12 text-center space-y-8">
          <div className="flex justify-center">
            <div className="bg-green-100 p-4 rounded-full">
              <CheckCircle2 className="h-16 w-16 text-green-600" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-headline text-primary">Application Received!</h1>
            <p className="text-lg text-muted-foreground">
              Thank you for your interest in INSD. Your details have been successfully submitted to our admissions team.
            </p>
          </div>

          <div className="bg-primary/5 p-6 rounded-xl border border-primary/10 space-y-4">
            <p className="font-medium text-primary">What happens next?</p>
            <p className="text-sm text-muted-foreground">
              Our expert career counsellor will call you within the next 24 hours to discuss your creative goals and guide you through the next steps.
            </p>
          </div>

          <div className="pt-6 border-t space-y-6">
            <div className="flex justify-center">
              <Link href="/">
                <Button variant="outline" className="gap-2 border-primary text-primary hover:bg-primary/5">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Homepage
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-8 text-center text-xs text-muted-foreground w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <p>© {new Date().getFullYear()} International School of Design (INSD) Delhi. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}
