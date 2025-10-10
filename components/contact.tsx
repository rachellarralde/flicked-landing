export default function Contact() {
  return (
    <footer className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 via-black/60 to-black/80 px-8 py-16 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.9)]">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,78,80,0.35),transparent_65%)] blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(113,89,255,0.3),transparent_60%)] blur-3xl" />
      <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_1fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-white/40">Stay in the loop</p>
          <h3 className="text-3xl font-semibold text-white sm:text-4xl">Let&apos;s create your next binge-worthy night.</h3>
          <p className="max-w-lg text-base text-white/60">
            Have a feature idea, press inquiry, or partnership request? Drop us a line at
            <a
              className="ml-2 border-b border-dashed border-white/30 text-white/80 transition-colors hover:text-white"
              href="mailto:witchaudiostudios@gmail.com"
            >
              witchaudiostudios@gmail.com
            </a>
            and we&apos;ll get back within 24 hours.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-white/50">
            <span className="rounded-full border border-white/15 px-4 py-2">Made for iPhone &amp; iPad</span>
            <span className="rounded-full border border-white/15 px-4 py-2">Built by film fanatics</span>
            <span className="rounded-full border border-white/15 px-4 py-2">Privacy-first</span>
          </div>
        </div>
        <div className="space-y-6 rounded-3xl border border-white/10 bg-black/60 p-8">
          <h4 className="text-xl font-semibold text-white">Download &amp; Privacy</h4>
          <p className="text-sm text-white/60">
            Ready to queue up your next obsession? Grab Flicked on the App Store and review our privacy policy to see how we keep your data safe.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://apps.apple.com/us/app/its-flicked/id6744044275"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/20"
            >
              Download Flicked
            </a>
            <a
              href="/privacy-policy"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/70 transition-colors hover:border-white/40 hover:text-white"
            >
              Privacy Policy
            </a>
          </div>
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Witch Audio Studios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
