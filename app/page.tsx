'use client'

import React, { useRef } from 'react';
import NavBar from '../components/nav-bar';
import Hero from '../components/hero';
import FeatureCards from '../components/feature-cards';
import Contact from '../components/contact';

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <div className="min-h-screen flex flex-col">
        <NavBar onContactClick={scrollToContact} />
        <Hero />
        <FeatureCards />
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
    </main>
  );
}
