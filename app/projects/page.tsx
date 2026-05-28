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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {projects.map((project, index) => {
          if (project.isFeatured) {
            return (
              <div
                key={index}
                className="lg:col-span-2 group relative bg-surface-container border border-slate-800 hover:border-primary-fixed-dim/50 transition-all duration-500 overflow-hidden"
              >
                <div className="flex flex-col h-full">
                  {project.image && (
                    <div className="relative aspect-video overflow-hidden border-b border-slate-800">
                      <img
                        className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                        data-alt={project.imageAlt}
                        src={project.image}
                      />
                      <div className="absolute top-4 left-4 bg-slate-950/90 px-3 py-1 border border-primary-fixed-dim/30">
                        <span className="font-code-sm text-primary text-[11px] tracking-widest uppercase">
                          {project.featuredLabel || "Featured"}
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="font-code-sm text-primary text-code-sm mb-2 opacity-60">
                      {project.tag}
                    </div>
                    <h3 className="font-h2 text-h2 text-on-background mb-4">
                      {project.title}
                    </h3>
                    <p className="font-body text-body text-on-surface-variant mb-6 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="font-code-sm text-code-sm bg-surface-container-highest px-2 py-1 text-on-surface-variant border border-outline-variant"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-6 mt-auto">
                      {project.links.map((link, lIdx) => (
                        <a
                          key={lIdx}
                          className="flex items-center gap-2 text-primary font-code-sm text-code-sm hover:underline"
                          href={link.url}
                        >
                          {link.icon && (
                            <span className="material-symbols-outlined text-[18px]">
                              {link.icon}
                            </span>
                          )}
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={index}
                className="group bg-surface-container border border-slate-800 hover:border-primary-fixed-dim/50 transition-all duration-500 flex flex-col"
              >
                <div className="p-6 border-b border-slate-800">
                  <div className="font-code-sm text-primary text-code-sm mb-1 opacity-60">
                    {project.tag}
                  </div>
                  <h3 className="font-h3 text-h3 text-on-background">
                    {project.title}
                  </h3>
                </div>

                {project.image ? (
                  <div className="aspect-square bg-slate-900 relative overflow-hidden flex items-center justify-center border-b border-slate-800">
                    <img
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      data-alt={project.imageAlt}
                      src={project.image}
                    />
                  </div>
                ) : null}

                <div className="p-6 flex flex-col flex-grow">
                  <p className="font-body text-body text-on-surface-variant mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-code-sm text-code-sm bg-surface-container-highest px-2 py-1 text-on-surface-variant border border-outline-variant"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between mt-4">
                    {project.links.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        className="text-primary font-code-sm text-[12px] uppercase tracking-wider hover:glow-cyan-400"
                        href={link.url}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </main>
  );
}