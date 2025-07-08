import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dũng Data - Chia sẻ dữ liệu, kiến thức và nghiên cứu",
  description:
    "Website chia sẻ tài liệu, ebook, dữ liệu mẫu và bài viết chuyên sâu cho người học SPSS, nghiên cứu xã hội",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
