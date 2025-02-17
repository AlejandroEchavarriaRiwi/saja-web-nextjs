"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Code, Laptop, Rocket, Send, ShoppingCart, Globe } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"

const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })

      if (response.ok) {
        toast({
          title: "Mensaje enviado",
          description: "Gracias por contactarnos. Te responderemos pronto.",
        })
        setName("")
        setEmail("")
        setMessage("")
      } else {
        throw new Error("Error al enviar el mensaje")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <Input
        placeholder="Tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="bg-gray-100 dark:bg-gray-700"
      />
      <Input
        type="email"
        placeholder="Tu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-gray-100 dark:bg-gray-700"
      />
      <Textarea
        placeholder="Tu mensaje"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className="bg-gray-100 dark:bg-gray-700"
      />
      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          "Enviando..."
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" /> Enviar Mensaje
          </>
        )}
      </Button>
    </form>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white dark:bg-gray-800 shadow-md">
        <Link className="flex items-center justify-center" href="#">
          <Laptop className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          <span className="ml-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-500">
            Saja
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            href="#servicios"
          >
            Servicios
          </Link>
          <Link
            className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            href="#planes"
          >
            Planes
          </Link>
          <Link
            className="text-sm  font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            href="#contacto"
          >
            Contacto
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-500 via-blue-600 to-green-500 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Transformamos Ideas en Realidad Digital
                </h1>
                <p className="mx-auto max-w-[700px] text-xl md:text-2xl text-blue-100">
                  Desarrollo web, ecommerce y aplicaciones a medida para impulsar tu negocio al siguiente nivel.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <Link href="#contacto">Contáctanos</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-gray-800 border-white hover:bg-white/10">
                  <Link href="#planes">Ver Planes</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="servicios" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-500">
              Nuestros Servicios
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-transform hover:scale-105">
                <Code className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-2" />
                <h3 className="text-xl font-bold">Desarrollo Web</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Creamos sitios web personalizados y optimizados para tu negocio.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-transform hover:scale-105">
                <ShoppingCart className="h-12 w-12 text-green-500 dark:text-green-400 mb-2" />
                <h3 className="text-xl font-bold">Ecommerce</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Desarrollamos tiendas online potentes y fáciles de gestionar.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-transform hover:scale-105">
                <Globe className="h-12 w-12 text-orange-500 dark:text-orange-400 mb-2" />
                <h3 className="text-xl font-bold">Aplicaciones Web</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Creamos aplicaciones web a medida para optimizar tus procesos de negocio.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-transform hover:scale-105">
                <Rocket className="h-12 w-12 text-purple-600 dark:text-purple-400 mb-2" />
                <h3 className="text-xl font-bold">SEO</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Optimizamos tu presencia online para aumentar tu visibilidad en buscadores.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-transform hover:scale-105">
                <Laptop className="h-12 w-12 text-pink-500 dark:text-pink-400 mb-2" />
                <h3 className="text-xl font-bold">Diseño Responsivo</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Aseguramos que tu sitio se vea genial en todos los dispositivos.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-transform hover:scale-105">
                <Code className="h-12 w-12 text-yellow-500 dark:text-yellow-400 mb-2" />
                <h3 className="text-xl font-bold">Mantenimiento</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Ofrecemos soporte continuo y actualizaciones para tu proyecto.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="planes"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-100 to-green-100 dark:from-gray-800 dark:to-gray-700"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-500">
              Nuestros Planes
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-transform hover:scale-105">
                <h3 className="text-2xl font-bold text-center mb-4 text-blue-600 dark:text-blue-400">Básico</h3>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg
                      className=" w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Sitio web de 5 páginas
                  </li>
                  <li className="flex items-center">
                    <svg
                      className=" w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Diseño responsivo
                  </li>
                  <li className="flex items-center">
                    <svg
                      className=" w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    SEO básico
                  </li>
                </ul>
                <Button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white">Elegir Plan</Button>
              </div>
              <div className="flex flex-col p-6 bg-gradient-to-br from-blue-600 to-green-500 text-white rounded-xl shadow-lg transition-transform hover:scale-105">
                <h3 className="text-2xl font-bold text-center mb-4">Profesional</h3>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg
                      className=" w-4 h-4 mr-2 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Sitio web de 10 páginas o Ecommerce básico
                  </li>
                  <li className="flex items-center">
                    <svg
                      className=" w-4 h-4 mr-2 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Diseño responsivo avanzado
                  </li>
                  <li className="flex items-center">
                    <svg
                      className=" w-4 h-4 mr-2 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    SEO avanzado
                  </li>
                  <li className="flex items-center">
                    <svg
                      className=" w-4 h-4 mr-2 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Integración de redes sociales
                  </li>
                </ul>
                <Button className="mt-auto bg-white text-blue-600 hover:bg-blue-50">Elegir Plan</Button>
              </div>
              <div className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-transform hover:scale-105">
                <h3 className="text-2xl font-bold text-center mb-4 text-green-500 dark:text-green-400">Empresarial</h3>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg
                      className=" w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Aplicación web o Ecommerce avanzado a medida
                  </li>
                  <li className="flex items-center">
                    <svg
                      className=" w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Diseño personalizado y optimización UX
                  </li>
                  <li className="flex items-center">
                    <svg
                      className=" w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    SEO premium y estrategia de marketing digital
                  </li>
                  <li className="flex items-center">
                    <svg
                      className=" w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Soporte prioritario y mantenimiento continuo
                  </li>
                </ul>
                <Button className="mt-auto bg-green-500 hover:bg-green-600 text-white">Elegir Plan</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-500">
              Contacta con Nuestro CEO
            </h2>
            <ContactForm />
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-100 dark:bg-gray-800">
        <p className="text-xs text-gray-700 dark:text-gray-400">© 2024 Saja. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-700 dark:text-gray-400" href="#">
            Términos de Servicio
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-700 dark:text-gray-400" href="#">
            Privacidad
          </Link>
        </nav>
      </footer>
      <Toaster />
    </div>
  )
}

