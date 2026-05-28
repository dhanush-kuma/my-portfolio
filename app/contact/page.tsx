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
          
          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <span className="font-label-caps text-label-caps text-outline uppercase">
              Connect with me
            </span>
            <div className="flex gap-6">
              {socials.map((social, index) => (
                <a
                  key={index}
                  className="group flex items-center gap-2 text-on-surface-variant hover:text-secondary transition-colors"
                  href={social.url}
                >
                  <span
                    className="material-symbols-outlined text-[20px]"
                    data-icon={social.icon}
                  >
                    {social.icon}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-tighter">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="lg:col-span-7">
          <div className="bg-surface-container-high border border-outline-variant p-8 md:p-12 rounded-xl relative overflow-hidden">
            <div className="absolute -right-24 -top-24 w-64 h-64 bg-primary-fixed/5 blur-3xl rounded-full"></div>
            <div className="relative z-10">
              <div className="mb-10">
                <h2 className="font-h2 text-h2 text-primary mb-2">
                  Initiate Transmission
                </h2>
                <p className="font-body text-body text-on-surface-variant">
                  Have a project in mind or just want to say hi? My inbox is
                  always open.
                </p>
              </div>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group flex flex-col gap-2">
                    <label className="font-label-caps text-[10px] text-outline uppercase tracking-[0.2em] group-focus-within:text-cyan-400 transition-colors">
                      Name
                    </label>
                    <input
                      className="bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-cyan-400 font-mono text-sm py-2 placeholder:text-surface-variant transition-all"
                      placeholder="ALAN TURING"
                      type="text"
                    />
                  </div>
                  <div className="group flex flex-col gap-2">
                    <label className="font-label-caps text-[10px] text-outline uppercase tracking-[0.2em] group-focus-within:text-cyan-400 transition-colors">
                      Email Address
                    </label>
                    <input
                      className="bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-cyan-400 font-mono text-sm py-2 placeholder:text-surface-variant transition-all"
                      placeholder="ALAN@ENIGMA.TECH"
                      type="email"
                    />
                  </div>
                </div>
                <div className="group flex flex-col gap-2">
                  <label className="font-label-caps text-[10px] text-outline uppercase tracking-[0.2em] group-focus-within:text-cyan-400 transition-colors">
                    Message
                  </label>
                  <textarea
                    className="bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-cyan-400 font-mono text-sm py-2 placeholder:text-surface-variant transition-all resize-none"
                    placeholder="DESCRIBE YOUR VISION OR PROJECT REQUIREMENTS..."
                    rows={4}
                  ></textarea>
                </div>
                <div className="pt-4">
                  <button
                    className="w-full md:w-auto bg-primary-fixed text-on-primary-fixed px-10 py-4 font-mono font-bold uppercase tracking-widest text-xs hover:glow-cyan-400 transition-all duration-300 active:scale-95 flex items-center justify-center gap-3"
                    type="submit"
                  >
                    <span>Send Message</span>
                    <span className="material-symbols-outlined text-sm" data-icon="send">
                      send
                    </span>
                  </button>
                </div>
              </form>
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