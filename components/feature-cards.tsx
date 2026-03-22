import Image from "next/image";

export default function FeatureCards(): JSX.Element {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-28 pt-24 sm:px-10">
      {/* Section header */}
      <div className="mb-14 space-y-4">
        <p className="text-[0.68rem] font-medium uppercase tracking-[0.4em] text-[#786E62]">
          Built for film lovers
        </p>
        <h2 className="font-display leading-[0.88] tracking-wide text-[#F2E8D5]">
          <span className="block text-[clamp(3.5rem,8vw,8rem)]">EVERY FEATURE</span>
          <span className="block text-[clamp(3.5rem,8vw,8rem)] text-[#E8003D]">
            HANDCRAFTED
          </span>
          <span className="block text-[clamp(3.5rem,8vw,8rem)]">FOR MOVIE FANS.</span>
        </h2>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {/* Card 1: Cinematic Discovery — large left (2 cols) */}
        <div className="group relative h-[440px] overflow-hidden rounded-[1.75rem] bg-[#161210] md:col-span-2">
          {/* Image fills bottom portion */}
          <div className="absolute inset-x-0 bottom-0 h-[65%] overflow-hidden">
            <Image
              src="/screen-movies.png"
              alt="Movie list screen"
              fill
              className="object-cover object-top opacity-55 transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#161210] via-[#161210]/55 to-transparent" />
          </div>
          {/* Content */}
          <div className="relative z-10 flex h-full flex-col justify-between p-8">
            <span className="font-display text-[5rem] leading-none text-[#E8003D]/20 select-none">
              01
            </span>
            <div className="space-y-2.5">
              <h3 className="font-display text-[2.4rem] leading-none tracking-wide text-[#F2E8D5]">
                CINEMATIC DISCOVERY
              </h3>
              <p className="max-w-[36ch] text-sm font-light text-[#786E62]">
                Swipe mood-based collections with picks tuned by GetFlicked&apos;s
                discovery engine. Something fresh every session.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Streaming Radar — small right (1 col) */}
        <div className="relative h-[440px] overflow-hidden rounded-[1.75rem] bg-[#161210] p-8">
          {/* Radar rings decoration */}
          <div className="absolute -right-8 -top-8 h-56 w-56">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="absolute rounded-full border border-[#E8003D]/20"
                style={{ inset: `${i * 18}%` }}
              />
            ))}
            <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8003D]/60" />
            <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E8003D]/40" />
          </div>
          {/* Content */}
          <div className="relative z-10 flex h-full flex-col justify-between">
            <span className="font-display text-[5rem] leading-none text-[#E8003D]/20 select-none">
              02
            </span>
            <div className="space-y-2.5">
              <h3 className="font-display text-[2.4rem] leading-none tracking-wide text-[#F2E8D5]">
                STREAMING RADAR
              </h3>
              <p className="text-sm font-light text-[#786E62]">
                Know instantly where a title is streaming, renting, or buying —
                updated in real time.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Playlist Magic — small left (1 col) */}
        <div className="relative h-[360px] overflow-hidden rounded-[1.75rem] bg-[#1D1915] p-8">
          {/* Stacked label decoration */}
          <div className="absolute right-5 top-6 space-y-2 opacity-25">
            {["Thriller Night", "90s Classics", "Date Night", "Mindless Fun"].map(
              (item, i) => (
                <div
                  key={item}
                  className="rounded-lg bg-[#F2E8D5] px-3 py-1.5 text-[10px] font-semibold text-[#0D0B09]"
                  style={{ transform: `rotate(${i % 2 === 0 ? -2 : 1.5}deg)` }}
                >
                  {item}
                </div>
              )
            )}
          </div>
          {/* Content */}
          <div className="relative z-10 flex h-full flex-col justify-between">
            <span className="font-display text-[5rem] leading-none text-[#C9964A]/25 select-none">
              03
            </span>
            <div className="space-y-2.5">
              <h3 className="font-display text-[2.4rem] leading-none tracking-wide text-[#F2E8D5]">
                PLAYLIST MAGIC
              </h3>
              <p className="text-sm font-light text-[#786E62]">
                Curate watchlists for every vibe, with gorgeous cover art. Share
                them with friends.
              </p>
            </div>
          </div>
        </div>

        {/* Card 4: Roulette Mode — large right (2 cols) */}
        <div className="group relative h-[360px] overflow-hidden rounded-[1.75rem] bg-[#0F0D0B] md:col-span-2">
          {/* Roulette image — right side */}
          <div className="absolute bottom-0 right-0 h-full w-[55%] overflow-hidden">
            <Image
              src="/screen-roulette.png"
              alt="Roulette mode"
              fill
              className="object-contain object-right-bottom opacity-50 transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F0D0B] via-[#0F0D0B]/30 to-transparent" />
          </div>
          {/* Content */}
          <div className="relative z-10 flex h-full flex-col justify-between p-8">
            <span className="font-display text-[5rem] leading-none text-[#C9964A]/25 select-none">
              04
            </span>
            <div className="space-y-3">
              <h3 className="font-display text-[2.4rem] leading-none tracking-wide text-[#F2E8D5]">
                ROULETTE MODE
              </h3>
              <p className="max-w-[28ch] text-sm font-light text-[#786E62]">
                Can&apos;t decide? One tap surfaces a perfect pick tuned to your
                exact taste.
              </p>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#C9964A]/25 bg-[#C9964A]/10 px-4 py-2">
                <span className="text-xs font-medium text-[#C9964A]">
                  Break analysis paralysis
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature showcase — full bleed card */}
      <div className="mt-3 grid overflow-hidden rounded-[1.75rem] bg-[#161210] md:grid-cols-2">
        {/* Text */}
        <div className="flex flex-col justify-center p-10 lg:p-14">
          <h3 className="font-display leading-[0.88] tracking-wide text-[#F2E8D5]">
            <span className="block text-[clamp(2.5rem,5vw,4.5rem)]">
              WATCH LIKE
            </span>
            <span className="block text-[clamp(2.5rem,5vw,4.5rem)]">
              PREMIERE NIGHT,
            </span>
            <span className="block text-[clamp(2.5rem,5vw,4.5rem)] text-[#E8003D]">
              EVERY NIGHT.
            </span>
          </h3>
          <p className="mt-6 max-w-[36ch] text-sm font-light leading-relaxed text-[#786E62]">
            Lush detail pages surface trailers, casts, similar titles, and
            rating breakdowns all in one place. Choosing tonight&apos;s film should
            feel as good as pressing play.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Interactive previews", "Smart filters", "Always up to date"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#F2E8D5]/10 px-4 py-1.5 text-xs text-[#786E62]"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        {/* Image */}
        <div className="relative h-[320px] md:h-auto md:min-h-[420px]">
          <Image
            src="/screen-detail.png"
            alt="Movie detail screen"
            fill
            className="object-cover object-left-top"
          />
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#161210] to-transparent" />
        </div>
      </div>
    </section>
  );
}
