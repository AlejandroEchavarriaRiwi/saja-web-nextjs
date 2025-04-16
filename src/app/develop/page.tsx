"use client";
import React from "react";
import Navbar from "@/components/ui/navbar/navbar";
import { Toaster } from "@/components/ui/toaster";
import BottomFooter from "@/components/ui/footer/bottonFooter";
import DevelopHero from "@/components/ui/hero/developHero";
import DevelopBanner from "@/components/ui/banner/developBanner";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center w-full">
      <header className="w-full flex justify-center">
        <Navbar />
      </header>
      <main className="w-full flex flex-col justify-center items-center">
        <DevelopHero />
        <DevelopBanner />
      </main>
      <BottomFooter />
      <Toaster />
    </div>
  );
}
