"use client";
import React from "react";
import Navbar from "@/components/ui/navbar/navbar";
import MainHero from "@/components/ui/hero/mainHero";
import MainBanner from "@/components/ui/banner/mainBanner";
import LocationCard from "@/components/ui/cards/location";
import { Toaster } from "@/components/ui/toaster";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <header className="w-full flex justify-center">
        <Navbar />
      </header>
      <MainHero />
      <main className="container flex flex-col justify-center items-center flex-1 px-4 md:px-6">
        <section className="w-full pt-12 md:py-t4 lg:pt-32 flex">
          <MainBanner />
        </section>

        <section className="w-full pt-12 md:pt-24 lg:pt-32 flex flex-col items-center">
          <h1 className="md:text-5xl w-full text-xl flex justify-center align-middle text-center font-bold text-gray-800 mb-6">
            Ubicación
          </h1>
          <LocationCard title="Aquí estamos!" lat={6.20659} lng={-75.58634} />
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-100 dark:bg-gray-800">
        <p className="text-xs text-gray-700 dark:text-gray-400">
          © 2024 Saja. Todos los derechos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-700 dark:text-gray-400"
            href="#"
          >
            Términos de Servicio
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-700 dark:text-gray-400"
            href="#"
          >
            Privacidad
          </Link>
        </nav>
      </footer>
      <Toaster />
    </div>
  );
}
