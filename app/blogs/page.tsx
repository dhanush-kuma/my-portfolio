import { blogs } from "@/lib/data";

export default function Blogs() {
  const featuredBlog = blogs.find((blog) => blog.isFeatured);
  const regularBlogs = blogs.filter((blog) => !blog.isFeatured);

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-2">
          <span className="font-code-sm text-code-sm text-secondary uppercase tracking-[0.2em]">
            System_Logs / ARTICLES
          </span>
          <div className="h-[1px] flex-grow bg-outline-variant"></div>
        </div>
        <h1 className="font-h1 text-h1 text-primary">
          Technical insights for the modern stack.
        </h1>
      </section>

      {/* Featured Blog Section */}
      {featuredBlog && (
        <section className="mb-20">
          <div className="relative group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-px bg-slate-800 hover:bg-cyan-500/50 transition-colors duration-500 rounded-lg overflow-hidden">
            <div className="lg:col-span-7 aspect-video relative overflow-hidden bg-surface-container rounded-sm">
              <img
                alt={featuredBlog.imageAlt}
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                data-alt={featuredBlog.imageAlt}
                src={featuredBlog.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              <div className="absolute top-6 left-6">
                <span className="bg-primary-container text-on-primary-container px-3 py-1 font-code-sm text-code-sm uppercase tracking-wider">
                  FEATURED_POST
                </span>
              </div>
            </div>
            <div className="lg:col-span-5 p-8 lg:p-12 space-y-6">
              <div className="flex items-center gap-4 text-secondary font-code-sm text-code-sm">
                <span className="px-2 py-0.5 border border-secondary/30 bg-secondary/10 uppercase">
                  {featuredBlog.category}
                </span>
                {featuredBlog.date && (
                  <span className="text-on-surface-variant">
                    {featuredBlog.date}
                  </span>
                )}
              </div>
              <h2 className="font-h2 text-h2 text-on-surface leading-tight">
                {featuredBlog.title}
              </h2>
              <p className="font-body text-body text-on-surface-variant">
                {featuredBlog.description}
              </p>
              <div className="flex items-center justify-between pt-6">
                <span className="font-code-sm text-code-sm text-on-surface-variant uppercase">
                  {featuredBlog.readTime}
                </span>
                <a
                  className="flex items-center gap-2 text-cyan-400 font-mono text-sm group/link"
                  href={featuredBlog.link}
                >
                  EXECUTE_READ.SH
                  <span
                    className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform"
                    data-icon="arrow_forward"
                  >
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blogs Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {regularBlogs.map((blog, index) => (
          <article
            key={index}
            className="flex flex-col bg-surface-container-low border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 group rounded-lg"
          >
            <div className="h-48 w-full overflow-hidden bg-surface-container">
              <img
                alt={blog.imageAlt}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                data-alt={blog.imageAlt}
                src={blog.image}
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-code-sm text-[10px] px-2 py-0.5 bg-slate-900 border border-slate-700 text-secondary uppercase tracking-widest">
                  {blog.category}
                </span>
              </div>
              <h3 className="font-h3 text-h3 text-on-surface mb-3 group-hover:text-cyan-400 transition-colors">
                {blog.title}
              </h3>
              <p className="font-body text-sm text-on-surface-variant mb-6 line-clamp-3">
                {blog.description}
              </p>
              <div className="mt-auto pt-6 border-t border-slate-800 flex justify-between items-center">
                <span className="font-code-sm text-code-sm text-on-surface-variant uppercase">
                  {blog.readTime}
                </span>
                <a
                  className="text-cyan-400 hover:underline font-mono text-xs"
                  href={blog.link}
                >
                  READ_MORE
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Subscription Card */}
      <section className="mt-32 p-12 border border-cyan-400/20 bg-surface-container-high rounded-xl text-center max-w-4xl mx-auto">
        <span
          className="material-symbols-outlined text-4xl text-cyan-400 mb-4"
          data-icon="terminal"
        >
          terminal
        </span>
        <h2 className="font-h2 text-h2 text-on-surface mb-4">
          Subscribe to the Dev_Stream
        </h2>
        <p className="font-body text-on-surface-variant mb-8 mx-auto">
          Receive highly technical, no-fluff updates on system architecture,
          cloud-native patterns, and engineering leadership directly to your
          inbox.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 mx-auto">
          <input
            className="flex-grow bg-slate-950 border-b border-slate-700 focus:border-cyan-400 focus:ring-0 text-cyan-400 font-mono text-sm py-3 px-4 transition-all"
            placeholder="USER@DOMAIN.COM"
            type="email"
          />
          <button className="bg-primary-container text-on-primary-container font-mono px-8 py-3 uppercase tracking-widest text-xs font-bold hover:brightness-110 active:scale-95 transition-all">
            JOIN_LIST
          </button>
        </form>
      </section>
    </main>
  );
}