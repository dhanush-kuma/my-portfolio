import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 shadow-none">
      <div className="flex justify-between items-center h-16 px-6 md:px-12 max-w-screen-2xl mx-auto">
        
        {/* Logo */}
        <div className="text-cyan-400 font-mono font-bold tracking-tighter text-xl">
          ENGINEER_PORTFOLIO
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-8 items-center">
          <Link
            href="/"
            className="text-cyan-400 border-b border-cyan-400 pb-1 font-mono uppercase tracking-widest text-xs hover:text-cyan-300 transition-all duration-300 active:scale-95"
          >
            Home
          </Link>

          <Link
            href="/projects"
            className="text-slate-400 font-mono uppercase tracking-widest text-xs hover:text-cyan-300 transition-all duration-300 active:scale-95"
          >
            Projects
          </Link>

          <Link
            href="/experience"
            className="text-slate-400 font-mono uppercase tracking-widest text-xs hover:text-cyan-300 transition-all duration-300 active:scale-95"
          >
            Experience
          </Link>

          <Link
            href="/contact"
            className="text-slate-400 font-mono uppercase tracking-widest text-xs hover:text-cyan-300 transition-all duration-300 active:scale-95"
          >
            Contact
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          
          {/* Icon */}
          <span className="material-symbols-outlined text-cyan-400 active:scale-95 transition-transform cursor-pointer">
            terminal
          </span>

          {/* Resume button */}
          <button className="bg-primary text-on-primary font-mono uppercase cursor-pointer tracking-widest text-xs px-4 py-2 hover:bg-primary-fixed-dim transition-all duration-300 active:scale-95">
                    Resume
                </button>

        </div>
      </div>
    </nav>
  );
}