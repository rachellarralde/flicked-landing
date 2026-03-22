"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function NavBar({
  onContactClick,
}: {
  onContactClick: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.05] bg-[#0D0B09]/88 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-white/10">
            <Image
              src="/app-icon.png"
              alt="GetFlicked"
              fill
              className="object-cover"
            />
          </div>
          <span className="font-display text-[1.15rem] tracking-[0.12em] text-[#F2E8D5] transition-colors group-hover:text-white">
            GetFlicked
          </span>
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-1">
          <button
            onClick={onContactClick}
            className="px-4 py-2 text-sm font-medium text-[#786E62] transition-colors duration-200 hover:text-[#F2E8D5]"
          >
            Contact
          </button>
          <Link
            href="https://apps.apple.com/us/app/its-flicked/id6744044275"
            target="_blank"
            rel="noopener noreferrer"
            className="group ml-2 inline-flex items-center gap-2 rounded-full bg-[#E8003D] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#FF1040] hover:shadow-[0_0_28px_rgba(232,0,61,0.5)]"
          >
            Download
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 6l6 6-6 6"
              />
            </svg>
          </Link>
        </nav>
      </div>
    </header>
  );
}
