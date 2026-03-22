import Link from "next/link";
import Image from "next/image";

const genres = [
  "DRAMA",
  "THRILLER",
  "HORROR",
  "COMEDY",
  "SCI-FI",
  "ROMANCE",
  "ACTION",
  "NOIR",
  "DOCUMENTARY",
  "WESTERN",
  "ANIMATION",
  "CRIME",
];

// Phone mockup shell: wraps a screenshot in a phone-shaped container
function PhoneMockup({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2.6rem] border border-white/[0.1] bg-[#0D0B09] shadow-[0_60px_120px_-20px_rgba(0,0,0,0.9),inset_0_0_0_1px_rgba(255,255,255,0.04)] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={390}
        height={844}
        className="w-full object-cover"
        priority={priority}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-24 pb-0">
      {/* Background glows */}
      <div className="pointer-events-none absolute -top-20 right-0 h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle_at_top_right,rgba(232,0,61,0.09),transparent_55%)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-40 -left-20 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,150,74,0.06),transparent_65%)] blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Badge */}
        <div className="fade-up mb-10 flex items-center gap-3">
          <span className="flicker h-1.5 w-1.5 rounded-full bg-[#E8003D]" />
          <span className="text-[0.68rem] font-medium uppercase tracking-[0.4em] text-[#786E62]">
            Now on iOS
          </span>
        </div>

        {/* Main grid */}
        <div className="grid items-start gap-16 lg:grid-cols-[1fr_1fr] lg:gap-8">
          {/* Left: Editorial headline + copy */}
          <div>
            <div className="fade-up delay-100">
              <h1 className="font-display leading-[0.88] tracking-wide">
                <span className="block text-[clamp(4rem,11vw,11rem)] text-[#F2E8D5]">
                  YOUR
                </span>
                <span className="block text-[clamp(4rem,11vw,11rem)] text-[#F2E8D5]">
                  NEXT
                </span>
                <span className="block text-[clamp(4rem,11vw,11rem)] text-[#E8003D]">
                  OBSESSION
                </span>
                <span className="block text-[clamp(2rem,5vw,5.5rem)] text-[#F2E8D5]/55">
                  IS ONE TAP AWAY.
                </span>
              </h1>
            </div>

            <p className="fade-up delay-200 mt-8 max-w-[42ch] text-[0.95rem] font-light leading-relaxed text-[#786E62] sm:text-base">
              GetFlicked cuts through endless catalogs — swipe cinematic
              recommendations, build gorgeous watchlists, and dive in the moment
              you decide.
            </p>

            <div className="fade-up delay-300 mt-6 flex flex-wrap gap-2">
              {["AI-tuned picks", "Cross-device sync", "Streaming radar"].map(
                (pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-[#F2E8D5]/10 px-4 py-1.5 text-xs font-medium text-[#786E62]"
                  >
                    {pill}
                  </span>
                )
              )}
            </div>

            <div className="fade-up delay-400 mt-8 flex flex-wrap items-center gap-5">
              <Link
                href="https://apps.apple.com/us/app/its-flicked/id6744044275"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-[#F2E8D5] px-6 py-3.5 text-sm font-semibold text-[#0D0B09] transition-all duration-300 hover:bg-white hover:shadow-[0_0_45px_rgba(242,232,213,0.2)]"
              >
                <div className="relative h-7 w-7 overflow-hidden rounded-lg">
                  <Image
                    src="/app-icon.png"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                Download on the App Store
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M13 6l6 6-6 6"
                  />
                </svg>
              </Link>
              <span className="text-[0.68rem] font-medium uppercase tracking-[0.3em] text-[#786E62]/55">
                No ads. Ever.
              </span>
            </div>
          </div>

          {/* Right: 3-phone arrangement */}
          <div className="relative flex h-[520px] items-end justify-center lg:h-[680px]">
            {/* Red glow beneath center phone */}
            <div className="absolute bottom-0 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_bottom,rgba(232,0,61,0.28),transparent_70%)] blur-3xl" />

            {/* Left phone — tilted left, slightly behind */}
            <div
              className="absolute bottom-4 left-0 z-10 w-[32%] origin-bottom"
              style={{ transform: "rotate(-8deg) translateX(-8%)" }}
            >
              <PhoneMockup
                src="/screen-movies.png"
                alt="Discover Movies screen"
              />
            </div>

            {/* Center phone — upright, front and tallest */}
            <div className="phone-float relative z-20 w-[38%]">
              <PhoneMockup
                src="/screen-detail.png"
                alt="Movie detail screen"
                priority
              />
            </div>

            {/* Right phone — tilted right, slightly behind */}
            <div
              className="absolute bottom-4 right-0 z-10 w-[32%] origin-bottom"
              style={{ transform: "rotate(8deg) translateX(8%)" }}
            >
              <PhoneMockup
                src="/screen-roulette.png"
                alt="Content Roulette screen"
              />
            </div>

            {/* Floating stat badge */}
            <div className="absolute -bottom-2 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#1D1915] px-5 py-3 shadow-xl lg:-left-8 lg:bottom-16 lg:translate-x-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8003D]/15">
                <span className="text-sm leading-none text-[#E8003D]">★</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#F2E8D5]">
                  50K+ downloads
                </p>
                <p className="text-xs text-[#786E62]">App Store</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Genre ticker strip */}
      <div className="relative mt-24 overflow-hidden border-y border-[#F2E8D5]/[0.05] bg-[#161210] py-4">
        <div className="marquee-track flex w-max items-center">
          {[...genres, ...genres].map((genre, i) => (
            <span key={i} className="inline-flex items-center">
              <span className="whitespace-nowrap px-5 font-display text-xl tracking-[0.25em] text-[#786E62]">
                {genre}
              </span>
              <span className="text-[#E8003D]/50 text-sm">●</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
