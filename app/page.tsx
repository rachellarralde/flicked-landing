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
    <>
      <NavBar onContactClick={scrollToContact} />
      <main className="min-h-screen overflow-x-hidden bg-[var(--bg)] text-[var(--cream)]">
        <Hero />
        <FeatureCards />
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
    </>
  );
}
