import type React from "react"
import type { Metadata } from "next"
import { Big_Shoulders_Display, Work_Sans } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const bigShouldersDisplay = Big_Shoulders_Display({
  subsets: ["latin"],
  variable: "--font-big-shoulders",
  display: "swap",
})

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-work-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Photography Portfolio - Swiss Minimalist Design",
  description: "Architecture, Commercial & Industrial Photography",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${bigShouldersDisplay.variable} ${workSans.variable} antialiased overflow-x-hidden`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
