import DotGrid from "@/components/DotGrid";
import Link from "next/link";
import { profile, terminalMetrics, coreExpertise, otherExpertise } from "@/lib/data";

export default function Home() {
  return (
    <main className="pt-16">
      <section className="relative min-h-[921px] flex flex-col justify-center px-6 md:px-xl overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <DotGrid
            dotSize={3}
            gap={20}
            baseColor="#1e293b"
            activeColor="#00dbe9"
            proximity={140}
            shockRadius={300}
            shockStrength={4}
            resistance={900}
            returnDuration={1.8}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-outline-variant bg-surface-container-low mb-8">
              <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="font-code-sm text-on-surface-variant uppercase tracking-widest">
                {profile.availabilityStatus}
              </span>
            </div>
            <h1 className="font-h1 text-h1 text-on-surface mb-6 leading-none">
              <span className="text-primary-fixed-dim block font-mono tracking-tighter glow-cyan-400">
                {profile.role}
              </span>
              <span className="text-on-surface/80 block mt-2">
                {profile.roleSubtitle}
              </span>
            </h1>
            <p className="font-body text-body text-on-surface-variant mb-10 leading-relaxed">
              {profile.bio}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/projects">
                <button className="px-8 py-4 bg-primary text-on-primary font-code-md rounded-lg flex items-center gap-3 hover:shadow-[0_0_20px_rgba(0,219,233,0.3)] transition-all active:scale-95 cursor-pointer">
                  View Projects
                  <span
                    className="material-symbols-outlined"
                    data-icon="arrow_forward"
                  >
                    arrow_forward
                  </span>
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-4 border border-outline text-on-surface font-code-md rounded-lg hover:border-primary-fixed-dim hover:text-primary-fixed-dim transition-all active:scale-95 cursor-pointer">
                  Contact Me
                </button>
              </Link>
            </div>
            <div className="mt-16 flex items-center gap-8 grayscale opacity-50 overflow-hidden">
              <span className="font-code-sm text-on-surface-variant whitespace-nowrap uppercase tracking-widest">
                Trusted By Engineering Teams at
              </span>
              <div className="flex gap-12 items-center">
                {profile.trustedBy.map((company, index) => (
                  <span key={index} className="font-h3 text-on-surface-variant font-bold tracking-tighter">
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative rounded-xl border border-outline-variant bg-surface-container-highest p-1 overflow-hidden shadow-2xl">
              <div className="bg-surface-container-lowest rounded rounded-b-lg overflow-hidden">
                <div className="bg-surface-variant px-4 py-2 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
                  </div>
                  <span className="text-[10px] font-mono text-on-surface-variant opacity-60 ml-2">
                    {terminalMetrics.sshTarget}
                  </span>
                </div>
                <div className="p-6 font-mono text-sm space-y-3">
                  <div className="text-secondary opacity-80">
                    ➜ <span className="text-primary ml-2">~</span>{" "}
                    <span className="text-on-surface">
                      git checkout production
                    </span>
                  </div>
                  <div className="text-on-surface-variant">
                    Switched to branch &apos;main&apos;
                  </div>
                  <div className="text-secondary opacity-80">
                    ➜ <span className="text-primary ml-2">~</span>{" "}
                    <span className="text-on-surface">system-check --full</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-[11px] py-2 border-y border-outline-variant/20">
                    <div className="text-on-surface-variant">
                      Uptime: <span className="text-secondary">{terminalMetrics.uptime}</span>
                    </div>
                    <div className="text-on-surface-variant">
                      Latency: <span className="text-secondary">{terminalMetrics.latency}</span>
                    </div>
                    <div className="text-on-surface-variant">
                      Nodes: <span className="text-secondary">{terminalMetrics.nodes}</span>
                    </div>
                    <div className="text-on-surface-variant">
                      Errors: <span className={typeof terminalMetrics.errors === 'number' || terminalMetrics.errors === '0' ? "text-green-400" : "text-red-400"}>{terminalMetrics.errors}</span>
                    </div>
                  </div>
                  <div className="text-secondary opacity-80">
                    ➜ <span className="text-primary ml-2">~</span>{" "}
                    <span className="text-on-surface terminal-cursor">
                      {terminalMetrics.cursorCommand}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/10 rounded-full blur-[80px]"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]"></div>
          </div>
        </div>
      </section>

      <section className="py-xl px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2 bg-surface-container p-8 rounded-xl border border-outline-variant hover:border-primary-fixed-dim transition-all group">
            <span className="font-code-sm text-primary uppercase mb-4 block">
              Core Expertise
            </span>
            <h3 className="font-h3 text-h3 text-on-surface mb-4">
              {coreExpertise.title}
            </h3>
            <p className="text-on-surface-variant mb-6">
              {coreExpertise.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {coreExpertise.skills?.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-surface-container-highest text-primary-fixed-dim font-code-sm rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {otherExpertise.map((item, index) => (
            <div key={index} className="bg-surface-container p-8 rounded-xl border border-outline-variant hover:border-primary-fixed-dim transition-all group">
              <div className={`h-12 w-12 ${index % 2 === 0 ? 'bg-secondary/10' : 'bg-primary/10'} flex items-center justify-center rounded-lg mb-6`}>
                <span
                  className={`material-symbols-outlined ${index % 2 === 0 ? 'text-secondary' : 'text-primary'}`}
                  data-icon={item.icon}
                >
                  {item.icon}
                </span>
              </div>
              <h3 className="font-h3 text-lg text-on-surface mb-2">
                {item.title}
              </h3>
              <p className="text-on-surface-variant text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
