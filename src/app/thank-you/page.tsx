import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { CheckCircle2, ArrowLeft } from "lucide-react"

const LOGO_URL = "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1779361354/cropped-Continental-Furnaces-Logo_q8ict4.jpg";

export default function ThankYouPage() {
  return (
<div
  className="min-h-screen flex flex-col overflow-x-hidden bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      "url('https://res.cloudinary.com/dw9v7jjrq/image/upload/v1779692266/WhatsApp_Image_2026-05-21_at_11.22.00_1_xr59xu.jpg')",
  }}
>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-KWNWGTH9"
          height="0" 
          width="0" 
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
      {/* End Google Tag Manager (noscript) */}

      {/* Event snippet for Submit lead form conversion page */}
      <Script
        id="conversion-event"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
gtag('event', 'conversion', {
    'send_to': 'AW-18188170368/7IXoCK35wbQcEIDp5eBD',
    'value': 1.0,
    'currency': 'INR'
});
          `,
        }}
      />
      
      {/* Simple Header */}
      <nav className="bg-white border-b h-20 flex items-center w-full">
        <div className="container mx-auto px-4 max-w-7xl w-full">
          <Link href="/">
            <Image 
              src={LOGO_URL} 
              alt="Continental Furnaces Logo" 
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
            <h1 className="text-3xl md:text-4xl font-headline text-primary">Query Received!</h1>
            <p className="text-lg text-muted-foreground">
              Thank you for your interest in Continental Furnaces. Your details have been successfully submitted to our sales team.
            </p>
          </div>

          <div className="bg-primary/5 p-6 rounded-xl border border-primary/10 space-y-4">
            <p className="font-medium text-primary">What happens next?</p>
            <p className="text-sm text-muted-foreground">
              Our technical team will call you within the next 24 hours to discuss your furnace requirements and guide you through the next steps.
            </p>
          </div>

          <div className="pt-6 border-t space-y-6">
            <div className="flex justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-primary px-4 py-2 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-primary/10"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-8 text-center text-xs text-muted-foreground w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <p>© {new Date().getFullYear()} Continental Furnaces. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}
