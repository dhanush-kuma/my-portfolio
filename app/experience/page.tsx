import { experiences, skillCategories, profile } from "@/lib/data";

export default function Experience() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-2">
          <span className="font-code-sm text-code-sm text-secondary uppercase tracking-[0.2em]">
            System_Logs / career_path
          </span>
          <div className="h-[1px] flex-grow bg-outline-variant"></div>
        </div>
        <h1 className="font-h1 text-h1 text-primary">
          Technical Proficiency &amp; Career Timeline
        </h1>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Timeline Column */}
        <div className="lg:col-span-7">
          <div className="relative space-y-12">
            <div className="absolute left-[7px] top-2 bottom-0 w-[1px] bg-outline-variant"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-10 group">
                <div className={`absolute left-0 top-2 w-4 h-4 bg-background border-2 ${
                  index === 0 ? "border-primary" : "border-outline-variant"
                } rounded-full z-10 group-hover:bg-primary transition-colors`}></div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-h3 text-h3 text-on-surface">
                      {exp.role}
                    </h3>
                    <p className="font-code-md text-code-md text-secondary">
                      {exp.company}
                    </p>
                  </div>
                  <span className="font-code-sm text-code-sm text-on-surface-variant bg-surface-container px-3 py-1">
                    {exp.duration}
                  </span>
                </div>
                
                <div className="bg-surface-container-low p-6 border border-outline-variant rounded-lg hover:border-primary transition-colors group-hover:bg-surface-container">
                  <p className="font-body text-body text-on-surface-variant mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="font-code-sm text-code-sm text-primary bg-surface-variant/50 px-2 py-0.5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Column */}
        <div className="lg:col-span-5 space-y-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-surface-container-high p-8 border border-outline-variant rounded-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <span
                  className={`material-symbols-outlined ${
                    index === 0 ? "text-primary" : index === 1 ? "text-secondary" : "text-on-tertiary-fixed-variant"
                  }`}
                  data-icon={category.icon}
                >
                  {category.icon}
                </span>
                <h3
                  className={`font-label-caps text-label-caps uppercase ${
                    index === 0 ? "text-primary" : index === 1 ? "text-secondary" : "text-on-tertiary-fixed-variant"
                  }`}
                >
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="font-code-md text-code-md px-4 py-2 bg-background border border-outline-variant glow-cyan-400 transition-all cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Uptime Image Block */}
          <div className="h-48 rounded-xl overflow-hidden relative">
            <img
              className="w-full h-full object-cover grayscale opacity-40 hover:grayscale-0 transition-all duration-700"
              data-alt="A highly detailed close-up of computer circuitry and glowing hardware components inside a professional server rack. The lighting is low-key with intense electric blue highlights that reflect off the metallic surfaces. The aesthetic is industrial, precise, and high-tech, aligning with a sophisticated dark-mode engineering portfolio style. The focus is sharp on a microchip labeled with technical codes."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFNzurOORwfVXCAsGxMeeEkyKv__EeqUoT6PM6TZ02fNRT-OaqCIfj0Fx_dz8XR45Sx6T7SjKJ4OGQq5uQfWhGku92zzVZ7uJvWby9tIrjgCAAbNkUJh-aRptMzFehVu7ekh6M5ZcW-JH2u88nJyofc1-jx9jsgOgU9UaMIXFfCzjUDuDUwyPgt7UulsrixCxIc2WE8o6XvQv6Kv3lKLT7Nle-03SqhhVhwyzE9grBSsxIAiT-SElezAw3EllScKsMEhuE2ZiYOg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
            <div className="absolute bottom-4 left-6">
              <span className="font-code-sm text-code-sm text-primary">
                {profile.systemHealth}
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}