"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Values } from "@/components/Values";
import { WhoItsFor } from "@/components/WhoItsFor";
import { Trust } from "@/components/Trust";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  const handleGetStarted = () => {
    console.log("Get started clicked");
  };

  return (
    <div className="min-h-screen">
      <Header onGetStarted={handleGetStarted} />
      <main className="pt-16">
        <Hero onGetStarted={handleGetStarted} />
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <Values />
        <div id="who-its-for">
          <WhoItsFor />
        </div>
        <div id="trust">
          <Trust />
        </div>
        <FinalCTA onGetStarted={handleGetStarted} />
      </main>
      <Footer />
    </div>
  );
}
