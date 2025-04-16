"use client";
import React from "react";
import Navbar from "@/components/ui/navbar/navbar";
import { Toaster } from "@/components/ui/toaster";
import BottomFooter from "@/components/ui/footer/bottonFooter";
import RepairHero from "@/components/ui/hero/repairHero";
import RepairBanner from "@/components/ui/banner/repairBanner";
import RepairBanner2 from "@/components/ui/banner/repairBanner2";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <header className="w-full flex justify-center">
        <Navbar />
      </header>
      <RepairHero />
      <RepairBanner />
      <RepairBanner2 />
      <BottomFooter />
      <Toaster />
    </div>
  );
}
