export default function Blogs(){
    return(

<main className="pt-24 pb-20 px-6 md:px-12 max-w-screen-2xl mx-auto">
<header className="mb-12">
<div className="flex items-center gap-2 font-code-sm text-code-sm text-on-surface-variant mb-4">
<span className="text-secondary">SYSTEM_LOGS</span>
<span className="">/</span>
<span className="text-primary-fixed-dim">ARTICLES</span>
</div>
<h1 className="font-h1 text-h1 text-primary tracking-tighter max-w-3xl">Technical insights for the modern stack.</h1>
</header>
<section className="mb-20">
<div className="relative group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-px bg-slate-800 hover:bg-cyan-500/50 transition-colors duration-500 rounded-lg overflow-hidden">
<div className="lg:col-span-7 aspect-video relative overflow-hidden bg-surface-container rounded-sm">
<img alt="Featured Article Header" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" data-alt="A sophisticated architectural visualization of a decentralized cloud infrastructure network. Glowing blue and cyan light pulses flow through a grid-like structure of nodes and servers against a deep obsidian background. The visual style is highly technical and precise, mimicking a 3D isometric engineering schematic with soft atmospheric fog and sharp neon highlights. The overall mood is futuristic, orderly, and advanced." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1riyEoyj0kCvJXnXCYRYUvP4znF7UzpsKfjwnhW90N9ffHBVIgc6KS3jTEvFbKz70nxOfR-O0IlMFUPfmH-qG6QyFQONzCYcI50gVs5WRr7C8HNMuK2V4iMe7VdRvhx469LeCMEpaFGz8VYwhMh2rg_pg9N1P22IhWo5fSxco5aNc2-2Ps4Z8pjyrGhv7xKb1zhI4CwIHDv35o2PrgaRHDYZe2fME_JwQE9rAiH2_JXaz4LdWu8pGi-l08FsMcPF5fbxrG-BM7Q"/>
<div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
<div className="absolute top-6 left-6">
<span className="bg-primary-container text-on-primary-container px-3 py-1 font-code-sm text-code-sm uppercase tracking-wider">FEATURED_POST</span>
</div>
</div>
<div className="lg:col-span-5 p-8 lg:p-12 space-y-6">
<div className="flex items-center gap-4 text-secondary font-code-sm text-code-sm">
<span className="px-2 py-0.5 border border-secondary/30 bg-secondary/10 uppercase">SYSTEM_DESIGN</span>
<span className="text-on-surface-variant">MARCH 14, 2024</span>
</div>
<h2 className="font-h2 text-h2 text-on-surface leading-tight">Implementing Event-Driven Architectures in High-Scale FinTech Systems</h2>
<p className="font-body text-body text-on-surface-variant">A deep dive into the challenges of maintaining data consistency and low latency in distributed transaction systems using Apache Kafka and Event Sourcing patterns.</p>
<div className="flex items-center justify-between pt-6">
<span className="font-code-sm text-code-sm text-on-surface-variant uppercase">12 MIN_READ</span>
<a className="flex items-center gap-2 text-cyan-400 font-mono text-sm group/link" href="#">
                            EXECUTE_READ.SH 
                            <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</div>
</div>
</section>
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<article className="flex flex-col bg-surface-container-low border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 group rounded-lg">
<div className="h-48 w-full overflow-hidden bg-surface-container">
<img alt="Frontend Architecture" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="A clean, minimalist workspace featuring high-end tech equipment under cool blue studio lighting. A high-resolution monitor displays complex, perfectly indented React code in a dark mode editor. The aesthetic is focused and professional, with a shallow depth of field highlighting the syntax coloring on the screen. The atmosphere is quiet, productive, and engineering-centric." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKDiPvy3aIYjoCU_jTGFbK5jJei8cU5JejFAoPPStxB-AzuNTk8uSpu-NjUzHwrvSAYiIh7pijQCT-Mi0H0qVzhs7SNRIxSQ8MHtw-tHOi9zwQBC7QPJdptkqvWe2_2Btwg6zqASBho8JyQaaZcsqq3eROn8Tzoyv-P_Bm8YIG7lA-6fhDBc_afbGZ6lu_5H7tGUIPD4bmjpUgbhM5f-b1VFY-5XX2waycC8-563YGXdEiKocyZd9UA0RfwtI4sdvPN7n2nqyZTw"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex items-center gap-3 mb-4">
<span className="font-code-sm text-[10px] px-2 py-0.5 bg-slate-900 border border-slate-700 text-secondary uppercase tracking-widest">FRONTEND_ARCHITECTURE</span>
</div>
<h3 className="font-h3 text-h3 text-on-surface mb-3 group-hover:text-cyan-400 transition-colors">Micro-Frontends: Scaling Large React Applications</h3>
<p className="font-body text-sm text-on-surface-variant mb-6 line-clamp-3">Evaluating Module Federation as a solution for decoupling monolithic frontend architectures without sacrificing user experience or developer productivity.</p>
<div className="mt-auto pt-6 border-t border-slate-800 flex justify-between items-center">
<span className="font-code-sm text-code-sm text-on-surface-variant uppercase">8 MIN_READ</span>
<a className="text-cyan-400 hover:underline font-mono text-xs" href="#">READ_MORE</a>
</div>
</div>
</article>
<article className="flex flex-col bg-surface-container-low border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 group rounded-lg">
<div className="h-48 w-full overflow-hidden bg-surface-container">
<img alt="DevOps Automation" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="An abstract visualization of a high-speed data pipeline. Luminescent cyan fibers of light streak across a dark, tech-textured background representing rapid server communication. The imagery captures the essence of automation and cloud velocity with motion blur and sharp geometric particles. The color scheme is dominated by navy, charcoal, and vibrant electric blue accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcMCjBMcknk6cih72k2D_v9TknPLNGaGuxvPZKmc9EeILHo_mWmDsF96DyryftN0uMPY0zTp3ueOiGOGrCisZhve9gtvJs0UvWKwSPxG19wMKI8xDb4rpGO22MqM-ziEwfq7TUjR9ObLTMA5q51hIcd7mw2wultuW5foc2LrIThQ_O5Yp_-lA19CacFo7l3CLhoNYacja15hFgN5GKmW3e9kguKJwr0d7Jo-SKxf5-lb1EEvHIl3PENRJMD8rxTyYq3dKS9c8u7g"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex items-center gap-3 mb-4">
<span className="font-code-sm text-[10px] px-2 py-0.5 bg-slate-900 border border-slate-700 text-secondary uppercase tracking-widest">DEVOPS</span>
</div>
<h3 className="font-h3 text-h3 text-on-surface mb-3 group-hover:text-cyan-400 transition-colors">Zero-Downtime Deployments with Kubernetes Operators</h3>
<p className="font-body text-sm text-on-surface-variant mb-6 line-clamp-3">How to leverage custom controllers to automate complex stateful application updates while maintaining 99.99% availability.</p>
<div className="mt-auto pt-6 border-t border-slate-800 flex justify-between items-center">
<span className="font-code-sm text-code-sm text-on-surface-variant uppercase">10 MIN_READ</span>
<a className="text-cyan-400 hover:underline font-mono text-xs" href="#">READ_MORE</a>
</div>
</div>
</article>
<article className="flex flex-col bg-surface-container-low border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 group rounded-lg">
<div className="h-48 w-full overflow-hidden bg-surface-container">
<img alt="Rust Web Development" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="A macro photograph of a silicon microchip with detailed circuitry and golden contact points, illuminated by a futuristic cyan glow. The image represents low-level performance and precision engineering. Shadows are deep and high-contrast, creating a mysterious yet technical atmosphere. The focus is incredibly sharp on the central processing unit, symbolizing efficiency and speed." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtFEM1fcLISLD-I1Cb7ToTpzp2gMVrR9DymCsCVzdQC4TR8-TTszNJQmC4nlC6shzUw3A3lseMVwg-X30EcDeqjb4Y7jExVa3Hg7oZSmepohYApb-6FGc-I8nEbfLP-E6Ve1GPVD_Wl5u2nZ9CNjPON25DwLnmt4Yrqf6Y9DYmZQebFQPfy-g0TgJd0I19zQYUSqhLbZV08Nrv4y5-U8KypBRVGJPFtnqyMkWLrlgvqTzuiIPtAncpUEmKW9rmF8vfNnOyPK0sIQ"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex items-center gap-3 mb-4">
<span className="font-code-sm text-[10px] px-2 py-0.5 bg-slate-900 border border-slate-700 text-secondary uppercase tracking-widest">PERFORMANCE</span>
</div>
<h3 className="font-h3 text-h3 text-on-surface mb-3 group-hover:text-cyan-400 transition-colors">Rust vs. Node.js: Comparing CPU-Bound Performance</h3>
<p className="font-body text-sm text-on-surface-variant mb-6 line-clamp-3">Benchmarking data processing speeds across different runtimes and understanding when the overhead of Rust pays for itself.</p>
<div className="mt-auto pt-6 border-t border-slate-800 flex justify-between items-center">
<span className="font-code-sm text-code-sm text-on-surface-variant uppercase">15 MIN_READ</span>
<a className="text-cyan-400 hover:underline font-mono text-xs" href="#">READ_MORE</a>
</div>
</div>
</article>
</section>
<section className="mt-32 p-12 border border-cyan-400/20 bg-surface-container-high rounded-xl text-center max-w-4xl mx-auto">
<span className="material-symbols-outlined text-4xl text-cyan-400 mb-4" data-icon="terminal">terminal</span>
<h2 className="font-h2 text-h2 text-on-surface mb-4">Subscribe to the Dev_Stream</h2>
<p className="font-body text-on-surface-variant mb-8 mx-auto">Receive highly technical, no-fluff updates on system architecture, cloud-native patterns, and engineering leadership directly to your inbox.</p>
<form className="flex flex-col sm:flex-row gap-4 mx-auto">
<input className="flex-grow bg-slate-950 border-b border-slate-700 focus:border-cyan-400 focus:ring-0 text-cyan-400 font-mono text-sm py-3 px-4 transition-all" placeholder="USER@DOMAIN.COM" type="email"/>
<button className="bg-primary-container text-on-primary-container font-mono px-8 py-3 uppercase tracking-widest text-xs font-bold hover:brightness-110 active:scale-95 transition-all">
                    JOIN_LIST
                </button>
</form>
</section>
</main>
    );
}