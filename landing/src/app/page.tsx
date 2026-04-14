"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Values } from "@/components/Values";
import { WhoItsFor } from "@/components/WhoItsFor";
import { Trust } from "@/components/Trust";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { AuthModal } from "@/components/AuthModal";

export default function Home() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authDefaultSignUp, setAuthDefaultSignUp] = useState(true);

  const handleGetStarted = () => {
    setAuthDefaultSignUp(true);
    setIsAuthOpen(true);
  };

  const handleSignIn = () => {
    setAuthDefaultSignUp(false);
    setIsAuthOpen(true);
  };

  const handleCloseAuth = () => {
    setIsAuthOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Header onGetStarted={handleGetStarted} onSignIn={handleSignIn} />
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
      <AuthModal isOpen={isAuthOpen} onClose={handleCloseAuth} defaultSignUp={authDefaultSignUp} />
    </div>
  );
}
