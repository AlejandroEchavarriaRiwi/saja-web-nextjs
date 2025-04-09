import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Saja - Soluciones tecnológicas",
  description:
    "Soluciones tecnológicas a tu medida. Reparación de móviles, consolas, computadores y desarrollo web en Medellín, Colombia.",
  keywords:
    "desarrollo web, diseño web, marketing digital, SEO, ecommerce, reparación de equipos, accesorios móviles, consolas videojuegos, Medellín, Colombia",
  authors: [{ name: "Saja", url: "https://www.saja.com.co" }],
  creator: "Saja",
  openGraph: {
    title: "Saja - Soluciones tecnológicas",
    description:
      "Expertos en desarrollo web, diseño, marketing y reparación tecnológica en Medellín.",
    url: "https://www.saja.com.co",
    siteName: "Saja",
    images: [
      {
        url: "https://www.saja.com.co/logo.svg", // Asegúrate de que la imagen esté optimizada
        width: 1200,
        height: 630,
        alt: "Saja soluciones tecnológicas",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saja - Soluciones tecnológicas",
    description:
      "Expertos en desarrollo, marketing y reparación de tecnología en Medellín.",
    creator: "@tucuenta", // Si tienes una cuenta
    images: ["https://www.saja.com.co/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  metadataBase: new URL("https://www.saja.com.co"),
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
       <link rel="icon" href="/isologo.svg" />
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}

