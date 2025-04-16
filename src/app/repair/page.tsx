"use client";
import React from "react";
import Navbar from "@/components/ui/navbar/navbar";
import { Toaster } from "@/components/ui/toaster";
import BottomFooter from "@/components/ui/footer/bottonFooter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <header className="w-full flex justify-center">
        <Navbar />
      </header>
      <BottomFooter />
      <Toaster />
    </div>
  );
}
