import type { Metadata } from "next"
import Script from "next/script"
import {
  Roboto,
  Roboto_Slab,
} from "next/font/google"

import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-body",
})

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title:
    "Continental Furnaces | Leading Industrial Furnace Manufacturer in India",

  description:
    "Continental Furnaces manufactures energy-efficient industrial furnaces, heat treatment systems, melting systems, galvanizing plants, and thermal processing solutions for industries across India and global markets.",

  keywords: [
    "Industrial Furnace Manufacturer India",
    "Aluminium Furnace",
    "Heat Treatment Furnace",
    "Melting Furnace",
    "Galvanizing Plant",
    "Industrial Oven",
    "Thermal Processing Solutions",
    "Bogie Hearth Oven",
    "Ageing Furnace",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
(function(w,d,s,l,i){
w[l]=w[l]||[];
w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),
dl=l!='dataLayer'?'&l='+l:'';
j.async=true;
j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T9NSTZP4');
            `,
          }}
        />
{/* Google Ads */}
<Script
  src="https://www.googletagmanager.com/gtag/js?id=AW-18188170368"
  strategy="afterInteractive"
/>

<Script
  id="google-ads-gtag"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
window.dataLayer = window.dataLayer || [];

function gtag(){
  dataLayer.push(arguments);
}

gtag('js', new Date());

gtag('config', 'AW-18188170368');
    `,
  }}
/>

      </head>

      <body
        className={`
          ${roboto.variable}
          ${robotoSlab.variable}
          bg-background
          text-foreground
          antialiased
          font-body
        `}
      >
        {/* GTM NoScript */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
<iframe 
src="https://www.googletagmanager.com/ns.html?id=GTM-T9NSTZP4"
height="0"
width="0"
style="display:none;visibility:hidden">
</iframe>
            `,
          }}
        />

        {children}

        <Toaster />
      </body>
    </html>
  )
}