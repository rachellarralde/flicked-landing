import Image from "next/image";

const featureItems = [
  {
    title: "Cinematic Discovery",
    description:
      "Swipe through mood-based collections and see fresh recommendations dialed in by GetFlicked’s discovery engine.",
    accent: "🎬",
  },
  {
    title: "Playlist Magic",
    description:
      "Curate watchlists for every vibe and share them with friends. Gorgeous cover art keeps everything feeling premium.",
    accent: "✨",
  },
  {
    title: "Streaming Radar",
    description:
      "Know instantly where a title is playing, plus rental and purchase options updated in real time.",
    accent: "📡",
  },
  {
    title: "Roulette Mode",
    description:
      "Break analysis paralysis with one confident tap. Flick Roulette surfaces a perfect pick when you can’t decide.",
    accent: "🎲",
  },
];

export default function FeatureCards(): JSX.Element {
  return (
    <section className="relative mt-28 space-y-20">
      <div className="absolute inset-x-0 top-10 -z-10 mx-auto h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(103,89,255,0.18),transparent_70%)] blur-2xl" />
      <div className="space-y-6 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-white/40">
          Engineered for movie lovers
        </p>
        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          The streaming companion you actually want to open.
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {featureItems.map((feature) => (
          <div
            key={feature.title}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-8 shadow-[0_30px_80px_-45px_rgba(0,0,0,1)] transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_45px_100px_-55px_rgba(66,32,211,0.75)]"
          >
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="h-full w-full bg-[radial-gradient(circle_at_top,rgba(122,98,255,0.25),transparent_70%)]" />
            </div>
            <div className="relative space-y-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl">
                {feature.accent}
              </span>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="text-sm text-white/60">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_1.1fr]">
        <div className="space-y-6">
          <h3 className="text-3xl font-semibold text-white sm:text-4xl">
            Watch like it’s premiere night, every night.
          </h3>
          <p className="text-base text-white/60">
            Dive into lush detail pages that surface trailers, casts, similar titles, and rating breakdowns all in one place. GetFlicked makes choosing tonight’s entertainment feel as satisfying as pressing play.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-white/50">
            <span className="rounded-full border border-white/15 px-4 py-2">Interactive previews</span>
            <span className="rounded-full border border-white/15 px-4 py-2">Smart filters</span>
            <span className="rounded-full border border-white/15 px-4 py-2">Always up to date</span>
          </div>
        </div>
        <div className="relative grid gap-6 sm:grid-cols-2">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/60 p-5 shadow-[0_40px_80px_-50px_rgba(0,0,0,1)]">
            <Image
              src="/detail.png"
              alt="Movie detail screen"
              width={800}
              height={1000}
              className="h-full w-full rounded-[2rem] object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          </div>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/60 p-5 shadow-[0_40px_80px_-50px_rgba(0,0,0,1)]">
            <Image
              src="/movie-list.png"
              alt="Movie list screen"
              width={800}
              height={1000}
              className="h-full w-full rounded-[2rem] object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
