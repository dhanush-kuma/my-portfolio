import { socials, profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 w-full py-12">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 items-center gap-6">
        
        <div className="text-slate-500 font-mono text-[10px] tracking-tight uppercase text-center md:text-left">
          © {new Date().getFullYear()} {profile.role}. ALL_RIGHTS_RESERVED.
        </div>

        <div className="flex flex-wrap gap-8 justify-center">
          {socials.map((social, index) => (
            <a
              key={index}
              className="text-slate-500 font-mono text-[10px] tracking-tight uppercase hover:text-cyan-400 transition-all hover:-translate-y-[2px]"
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.name}
            </a>
          ))}

          <a
            className="text-slate-500 font-mono text-[10px] tracking-tight uppercase hover:text-cyan-400 transition-all hover:-translate-y-[2px]"
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>

        {/* Empty block to balance the grid and keep the middle social links perfectly centered */}
        <div className="hidden md:block"></div>

      </div>
    </footer>
  );
}