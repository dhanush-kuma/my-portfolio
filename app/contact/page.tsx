import { profile, socials } from "@/lib/data";

export default function Contact() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-2">
          <span className="font-code-sm text-code-sm text-secondary uppercase tracking-[0.2em]">
            System_Logs / Contact
          </span>
          <div className="h-[1px] flex-grow bg-outline-variant"></div>
        </div>
        <h1 className="font-h1 text-h1 text-primary">Contact Me</h1>
      </section>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Left Column - Intro and Terminal Bio */}
        <section className="lg:col-span-5 flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <h1 className="font-h2 text-h2 text-primary">
              System Architect &amp; Creative Engineer.
            </h1>
            <p className="font-body text-body text-on-surface-variant">
              I specialize in building robust distributed systems and highly
              responsive user interfaces. My philosophy is rooted in the "Code
              as Art" principle—where technical precision meets human-centric
              design. Currently focused on cloud infrastructure and
              high-performance frontend frameworks.
            </p>
          </div>
          
          {/* Terminal Mockup Bio Card */}
          <div className="bg-surface-container border border-outline-variant p-6 rounded-lg font-code-sm">
            <div className="flex items-center gap-2 mb-4 border-b border-outline-variant pb-2">
              <div className="w-3 h-3 rounded-full bg-error"></div>
              <div className="w-3 h-3 rounded-full bg-secondary-container"></div>
              <div className="w-3 h-3 rounded-full bg-primary-fixed"></div>
              <span className="ml-2 text-outline text-[11px] font-mono">bio.tsx</span>
            </div>
            <div className="space-y-1">
              <p>
                <span className="syntax-keyword">const</span>{" "}
                <span className="text-on-surface">profile</span> = {"{"}
              </p>
              <p className="pl-4">
                <span className="text-on-surface">location:</span>{" "}
                <span className="syntax-string">'{profile.location}'</span>,
              </p>
              <p className="pl-4">
                <span className="text-on-surface">focus:</span> [
                {profile.focusAreas.map((area, idx) => (
                  <span key={idx}>
                    <span className="syntax-string">'{area}'</span>
                    {idx < profile.focusAreas.length - 1 ? ", " : ""}
                  </span>
                ))}
                ],
              </p>
              <p className="pl-4">
                <span className="text-on-surface">status:</span>{" "}
                <span className="syntax-string">'{profile.statusMessage}'</span>
              </p>
              <p>{"};"}</p>
              <p className="syntax-comment mt-4">// Looking for a technical lead role</p>
            </div>
          </div>
        </section>
        
        {/* Right Column - Transmission & Social Card */}
        <section className="lg:col-span-7">
          <div className="bg-surface-container-high border border-outline-variant p-8 md:p-12 rounded-xl relative overflow-hidden">
            <div className="absolute -right-24 -top-24 w-64 h-64 bg-primary-fixed/5 blur-3xl rounded-full"></div>
            
            <div className="relative z-10">
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-primary text-[24px]">terminal</span>
                  <h2 className="font-h2 text-h2 text-primary">Initiate Transmission</h2>
                </div>
                <p className="font-body text-body text-on-surface-variant">
                  Select a communication protocol to direct messages to the system. Direct email is preferred, or you can send an encrypted transmission on LinkedIn.
                </p>
              </div>

              {/* Communication Protocols List */}
              <div className="space-y-6">
                
                {/* Email Protocol */}
                <div className="bg-surface-container border border-outline-variant p-6 rounded-lg group hover:border-primary transition-all duration-300">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 bg-primary/10 flex items-center justify-center rounded-lg text-primary">
                        <span className="material-symbols-outlined">mail</span>
                      </div>
                      <div>
                        <span className="font-code-sm text-[10px] text-secondary uppercase tracking-widest block mb-0.5">PROTOCOL: SMTP_DIRECT</span>
                        <a href={`mailto:${profile.email}`} className="font-mono text-sm text-on-surface hover:text-primary transition-colors hover:underline break-all">
                          {profile.email}
                        </a>
                      </div>
                    </div>
                    <a href={`mailto:${profile.email}`} className="bg-primary-fixed text-on-primary-fixed px-6 py-2.5 font-mono font-bold uppercase tracking-widest text-[10px] hover:glow-cyan-400 active:scale-95 transition-all flex items-center gap-2 cursor-pointer">
                      <span>OPEN_MAIL</span>
                      <span className="material-symbols-outlined text-xs">arrow_forward</span>
                    </a>
                  </div>
                </div>

                {/* LinkedIn Protocol */}
                <div className="bg-surface-container border border-outline-variant p-6 rounded-lg group hover:border-secondary transition-all duration-300">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 bg-secondary/10 flex items-center justify-center rounded-lg text-secondary">
                        <span className="material-symbols-outlined">chat</span>
                      </div>
                      <div>
                        <span className="font-code-sm text-[10px] text-secondary uppercase tracking-widest block mb-0.5">PROTOCOL: LINKEDIN_SECURE</span>
                        <span className="font-mono text-sm text-on-surface">
                          Message me on LinkedIn
                        </span>
                      </div>
                    </div>
                    <a href={profile.linkedinMessageUrl} target="_blank" rel="noopener noreferrer" className="border border-secondary text-secondary px-6 py-2.5 font-mono font-bold uppercase tracking-widest text-[10px] hover:bg-secondary/10 active:scale-95 transition-all flex items-center gap-2 cursor-pointer">
                      <span>SEND_MSG</span>
                      <span className="material-symbols-outlined text-xs">open_in_new</span>
                    </a>
                  </div>
                </div>

                {/* Social Grid (Connect with me) */}
                <div className="pt-8 border-t border-outline-variant/30">
                  <span className="font-label-caps text-[10px] text-outline uppercase tracking-[0.2em] block mb-4">Connect with me</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {socials.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 p-4 bg-surface-container border border-outline-variant rounded-lg hover:border-primary-fixed-dim hover:bg-surface-container-high transition-all"
                      >
                        <span className="material-symbols-outlined text-primary text-[20px] transition-transform group-hover:scale-110">
                          {social.icon}
                        </span>
                        <div className="font-mono text-xs uppercase tracking-tighter text-on-surface-variant group-hover:text-primary transition-colors">
                          {social.name}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
          
          {/* Aesthetic Keyboard Image Block */}
          <div className="mt-8 h-48 w-full rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <img
              className="w-full h-full object-cover"
              data-alt="A highly detailed close-up of a high-end mechanical keyboard with glowing cyan backlighting in a dimly lit studio. The shot uses a shallow depth of field, focusing on the intricate textures of the keycaps and the subtle brushed aluminum frame. The mood is professional, technical, and serene, perfectly aligning with a dark-mode developer aesthetic using a palette of deep navy and electric blue highlights."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU3SWHND4euJFWvcDEhx9HGbO-SboqZQ5Zet0GaB7rQzrvsLz5Y4-iLbpQv783WQVdJlSO8s6_TZVD6FZANXkMpa5lIBS1ymW4sEIJxh4OLJRU2Ph8IeH5RSvFhQexqlF-DDKkpj8Gs-UaV5AUou9WU-La_ni0tx9Rx6YJfyQhqSsuFUSAt6G8G8zwYPie_w99M8o7w0UTxCk_URiDzV6XmbqLwWywosOJpfkag8COdGK8iyPemjis1xZQ3wQrzx4al4B0R3p85g"
            />
          </div>
        </section>
      </div>
    </main>
  );
}