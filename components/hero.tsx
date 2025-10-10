import Link from "next/link";
import Image from "next/image";

const featureBullets = [
  "AI-tuned picks that feel handpicked for you",
  "Watchlists that sync across every device",
  "Instantly see where to stream, rent, or buy",
];

export default function Hero() {
  return (
    <section className="relative mt-16 rounded-[3rem] border border-white/10 bg-white/5 px-6 py-16 shadow-[0_25px_80px_-40px_rgba(15,0,60,0.9)] sm:px-10 lg:px-16">
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-[3rem]">
        <div className="absolute -top-1/3 right-0 h-[32rem] w-[32rem] -translate-y-10 translate-x-10 rounded-full bg-[radial-gradient(circle_at_top_right,rgba(107,76,255,0.5),transparent_60%)] blur-3xl" />
        <div className="absolute -bottom-1/4 left-10 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_bottom_left,rgba(255,78,80,0.45),transparent_55%)] blur-3xl" />
      </div>
      <div className="grid gap-16 lg:grid-cols-[1.1fr_minmax(0,1fr)]">
        <div className="space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
            New on iOS
          </span>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Your next obsession is a tap away.
          </h1>
          <p className="max-w-xl text-base text-white/70 sm:text-lg">
            Flicked cuts through endless catalogs with a sleek experience inspired by the streaming giants you love. Swipe through cinematic recommendations, build gorgeous playlists, and dive in instantly.
          </p>
          <ul className="grid gap-3 text-sm text-white/60 sm:text-base">
            {featureBullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-xs text-white">
                  •
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              className="group inline-flex h-14 items-center gap-4 rounded-full bg-white px-6 text-base font-semibold text-black shadow-[0_20px_50px_-30px_rgba(0,0,0,1)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/90"
              href="https://apps.apple.com/us/app/its-flicked/id6744044275"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-3">
                <div className="relative h-9 w-9 overflow-hidden rounded-2xl bg-black/80">
                  <Image src="/app-icon.png" alt="Flicked icon" fill className="object-cover" />
                </div>
                <span>Download on the App Store</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5 text-black/70 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <p className="text-xs uppercase tracking-[0.35em] text-white/50">
              No ads. Ever.
            </p>
          </div>
        </div>
        <div className="relative mx-auto flex max-w-[28rem] items-center justify-center">
          <div className="absolute inset-0 rounded-[3rem] border border-white/10 bg-white/5 blur-xl" />
          <div className="relative w-full overflow-hidden rounded-[2.5rem] border border-white/15 bg-black/70 p-5 shadow-[0_45px_80px_-40px_rgba(0,0,0,0.8)]">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/40">
              <Image
                src="/hero-image.png"
                alt="Flicked app preview"
                width={900}
                height={1200}
                className="h-full w-full object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            </div>
            <div className="absolute -right-12 top-1/2 hidden w-36 -translate-y-1/2 rotate-[8deg] animate-float overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-4 shadow-[0_30px_50px_-20px_rgba(255,255,255,0.12)] lg:block">
              <Image
                src="/roulette.png"
                alt="Roulette feature"
                width={400}
                height={400}
                className="rounded-2xl object-cover"
              />
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                Flick Roulette
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
