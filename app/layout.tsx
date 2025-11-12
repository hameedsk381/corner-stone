import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cornerstone Constructions - Premier Construction & Architectural Consultancy",
  description:
    "Award-winning construction and architectural consultancy services. Specializing in plan approvals, architectural design, structural engineering, cost estimation, surveying, and civil engineering for residential, commercial, and industrial projects.",
  keywords: [
    "construction consultancy",
    "architectural design",
    "structural engineering",
    "construction services",
    "building design",
    "project management",
  ],
  creator: "Cornerstone Constructions",
  publisher: "Cornerstone Constructions",
  metadataBase: new URL("https://cornerstone-constructions.com"),
  alternates: {
    canonical: "https://cornerstone-constructions.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cornerstone-constructions.com",
    title: "Cornerstone Constructions - Premier Construction & Architectural Consultancy",
    description:
      "Award-winning construction and architectural consultancy services. Specializing in plan approvals, architectural design, structural engineering, cost estimation, surveying, and civil engineering.",
    siteName: "Cornerstone Constructions",
    images: [
      {
        url: "https://cornerstone-constructions.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cornerstone Constructions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cornerstone Constructions",
    description: "Premier construction and architectural consultancy services",
    creator: "@cornerstoneconstructions",
    images: ["https://cornerstone-constructions.com/og-image.png"],
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    themeColor: "#935A3B",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "Construction",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
