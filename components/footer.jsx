import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 w-full py-12">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-slate-500 font-mono text-[10px] tracking-tight uppercase">
          © 2024 SYSTEM_ARCHITECT. ALL_RIGHTS_RESERVED.
        </div>

        <div className="flex gap-8">
          <Link
            className="text-slate-500 font-mono text-[10px] tracking-tight uppercase hover:text-cyan-400 transition-all hover:-translate-y-[2px]"
            href="/"
          >
            Github
          </Link>

          <Link
            className="text-slate-500 font-mono text-[10px] tracking-tight uppercase hover:text-cyan-400 transition-all hover:-translate-y-[2px]"
            href="/"
          >
            LinkedIn
          </Link>

          <Link
            className="text-slate-500 font-mono text-[10px] tracking-tight uppercase hover:text-cyan-400 transition-all hover:-translate-y-[2px]"
            href="/"
          >
            Twitter
          </Link>
        </div>

        <div className="text-cyan-400 font-mono text-[10px] tracking-tight uppercase">
          EST. 2016 // ROOT_ACCESS
        </div>

      </div>
    </footer>
  );
}