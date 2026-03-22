import Link from "next/link";

export default function Contact() {
  return (
    <footer className="relative overflow-hidden bg-[#0D0B09]">
      {/* Separator */}
      <div className="mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-[#F2E8D5]/[0.07] to-transparent" />

      {/* Big CTA block */}
      <div className="relative overflow-hidden bg-[#E8003D] px-6 py-20 sm:px-10 sm:py-28">
        {/* Decorative bg text */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-8 top-1/2 -translate-y-[48%] select-none font-display text-[20vw] leading-none text-[#FF1A52]/40"
        >
          FLICKED
        </span>
        {/* Subtle grain on red block */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
            backgroundSize: "160px 160px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:items-end">
            {/* Headline */}
            <div>
              <h2 className="font-display leading-[0.88] tracking-wide text-white">
                <span className="block text-[clamp(4.5rem,12vw,11rem)]">READY</span>
                <span className="block text-[clamp(4.5rem,12vw,11rem)]">TO WATCH?</span>
              </h2>
            </div>

            {/* Right col: copy + buttons */}
            <div className="space-y-6 lg:pb-3">
              <p className="text-base font-light leading-relaxed text-white/65">
                GetFlicked is crafted by an indie developer who reads every note.
                Download the app or send feedback &mdash; you&apos;ll hear back.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="https://apps.apple.com/us/app/its-flicked/id6744044275"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#E8003D] transition-all duration-250 hover:bg-white/92 hover:shadow-[0_0_36px_rgba(255,255,255,0.25)]"
                >
                  Download GetFlicked
                </Link>
                <a
                  href="mailto:rachelldev@yahoo.com"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white transition-all duration-250 hover:border-white/55 hover:bg-white/10"
                >
                  Contact the dev
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6 sm:px-10">
        <p className="text-xs text-[#786E62]">
          © {new Date().getFullYear()} RachellDev. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="mailto:rachelldev@yahoo.com"
            className="text-xs text-[#786E62] transition-colors hover:text-[#F2E8D5]"
          >
            rachelldev@yahoo.com
          </a>
          <Link
            href="/privacy-policy"
            className="text-xs text-[#786E62] transition-colors hover:text-[#F2E8D5]"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
