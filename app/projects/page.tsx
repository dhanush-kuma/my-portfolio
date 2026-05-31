import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-2">
          <span className="font-code-sm text-code-sm text-secondary uppercase tracking-[0.2em]">
            System_Logs / Portfolio
          </span>
          <div className="h-[1px] flex-grow bg-outline-variant"></div>
        </div>
        <h1 className="font-h1 text-h1 text-primary">Selected Projects</h1>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-slate-950/40 border border-slate-800 hover:border-cyan-400 hover:scale-[1.02] transition-all duration-300 flex flex-col rounded-lg overflow-hidden backdrop-blur-sm"
          >
            {/* Card Header */}
            <div className="p-6 border-b border-slate-900">
              <div className="font-code-sm text-code-sm text-cyan-400 tracking-wider uppercase mb-1.5 opacity-80 font-mono">
                {project.tag}
              </div>
              <h3 className="font-h3 text-h3 text-slate-100 group-hover:text-cyan-300 transition-colors duration-300">
                {project.title}
              </h3>
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-grow">
              <p className="font-body text-body text-slate-400 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-code-sm text-code-sm bg-slate-900/60 px-2 py-1 text-slate-400 border border-slate-800/80 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links with adaptive icons */}
              <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-slate-900/80">
                {project.links.map((link, lIdx) => (
                  <a
                    key={lIdx}
                    className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-code-sm text-[12px] uppercase tracking-wider transition-colors duration-300"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {link.icon || (link.label === "VIEW_CODE" || link.label.toLowerCase().includes("github") || link.label.toLowerCase().includes("code") ? "terminal" : "open_in_new")}
                    </span>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}