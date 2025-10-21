import type React from "react"
import type { Metadata } from "next"
import { New_Tegomin } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const newTegomin = New_Tegomin({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-tegomin",
})

export const metadata: Metadata = {
  title: "恐怖の館 - Haunted House",
  description: "恐怖の館へようこそ。あなたは生きて帰れるか...",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body
        className={`${newTegomin.variable} font-sans antialiased bg-gradient-to-b from-black via-zinc-950 to-black`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
