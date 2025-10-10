"use client";

import React, { useRef } from "react";
import NavBar from "../components/nav-bar";
import Hero from "../components/hero";
import FeatureCards from "../components/feature-cards";
import Contact from "../components/contact";

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05040f] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(113,89,255,0.3),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_-10%,rgba(255,78,80,0.28),transparent_40%)]" />
        <div className="absolute inset-y-0 left-1/2 h-full w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-[120rem] flex-col px-6 pb-24 pt-8 sm:px-10 lg:px-16">
        <NavBar onContactClick={scrollToContact} />
        <Hero />
        <FeatureCards />
        <div ref={contactRef} className="mt-32">
          <Contact />
        </div>
      </div>
    </main>
  );
}
