import Link from "next/link";
import Image from "next/image";

// Assuming these are your icon components.
function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m3 9 9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function ContactIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 18a2 2 0 00-2-2H9a2 2 0 00-2 2" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <circle cx="12" cy="10" r="2" />
      <line x1="8" x2="8" y1="2" y2="4" />
      <line x1="16" x2="16" y1="2" y2="4" />
    </svg>
  );
}

export default function NavBar({ onContactClick }: { onContactClick: () => void }) {
  return (
    <header className="w-full m-0 p-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-8">
        <div className="flex items-center gap-4">
          <Link className="flex items-center gap-2 text-lg font-semibold" href="/">
            <Image src="/appicon.png" alt="App Icon" width={40} height={40} />
            <span className="sr-only">Home</span>
          </Link>
        </div>
        <nav className="flex items-center gap-4">
          <Link className="flex items-center gap-2 text-sm font-medium hover:underline" href="/">
            <HomeIcon className="h-4 w-4" />
            Home
          </Link>
          <button onClick={onContactClick} className="flex items-center gap-2 text-sm font-medium hover:underline">
            <ContactIcon className="h-4 w-4" />
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}
