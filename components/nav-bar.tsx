import Link from "next/link";
import Image from "next/image";

export default function NavBar({
  onContactClick,
}: {
  onContactClick: () => void;
}) {
  return (
    <header className="sticky top-6 z-50 w-full">
      <div className="mx-auto flex w-full items-center justify-between rounded-full border border-white/10 bg-black/40 px-4 py-3 shadow-[0_18px_45px_-25px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-colors duration-300">
        <Link className="flex items-center gap-3 text-lg font-semibold" href="/">
          <div className="relative h-10 w-10 overflow-hidden rounded-2xl border border-white/15 bg-white/10">
            <Image src="/app-icon.png" alt="Flicked icon" fill className="object-cover" />
          </div>
          <span className="hidden text-sm uppercase tracking-[0.35em] text-white/70 sm:inline-flex">
            Flicked
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm font-medium text-white/70">
          <Link
            className="rounded-full px-4 py-2 transition-colors duration-300 hover:text-white/100"
            href="/"
          >
            Home
          </Link>
          <button
            onClick={onContactClick}
            className="rounded-full px-4 py-2 transition-colors duration-300 hover:text-white"
          >
            Contact
          </button>
          <Link
            href="https://apps.apple.com/us/app/its-flicked/id6744044275"
            className="group ml-2 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black shadow-[0_10px_30px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/90"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Download</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
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
