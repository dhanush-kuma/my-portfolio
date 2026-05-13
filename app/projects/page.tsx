export default function Projects (){
    return (
        <main className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
<section className="mb-16">
<div className="flex items-center gap-2 mb-4">
<span className="font-code-sm text-primary text-code-sm tracking-tighter">~/work/portfolio</span>
<div className="h-px flex-grow bg-slate-800"></div>
</div>
<h1 className="font-h1 text-h1 text-on-background mb-4">Selected_Projects</h1>
<p className="font-body text-body text-on-surface-variant max-w-2xl">
                A technical deep-dive into the architectural decisions and system design of my recent software engineering projects.
            </p>
</section>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
<div className="lg:col-span-2 group relative bg-surface-container border border-slate-800 hover:border-primary-fixed-dim/50 transition-all duration-500 overflow-hidden">
<div className="flex flex-col h-full">
<div className="relative aspect-video overflow-hidden border-b border-slate-800">
<img className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" data-alt="A high-resolution screenshot of a complex developer dashboard showing real-time network traffic analytics in deep blue and cyan neon tones. The interface features intricate data visualizations, lines of code, and architectural diagrams. The lighting is dark and professional, reflecting a high-fidelity software engineering environment with a minimalist tech aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLF66iLWCQtaCKXFBB3way-JDF55MElTzEEFxbCqL6xLHC281FjgeMUPi-hCS6dzH5Q76k3sXyUa2rcTxRdVeBKvSnAY1_40ePuGjUXKx44Aux7aIgO_oSyibpOl3vaEvkNnswLfRKaivsEG2OyxGOsH90txOr3cBsOjmwjrfT8RAA7YHHq_2WN9tgnR7QMbWk02dfXmGMFpujg5JZQB1k4QjScDjW_wH6Qv5x8Xqi5w4M1HQ8a7fZUbwkSJzSsX4l38g1DtiZ6Q"/>
<div className="absolute top-4 left-4 bg-slate-950/90 px-3 py-1 border border-primary-fixed-dim/30">
<span className="font-code-sm text-primary text-[11px] tracking-widest uppercase">Featured_System</span>
</div>
</div>
<div className="p-8 flex flex-col flex-grow">
<div className="font-code-sm text-primary text-code-sm mb-2 opacity-60">systems / cloud-orchestrator</div>
<h3 className="font-h2 text-h2 text-on-background mb-4">Distributed Mesh Engine</h3>
<p className="font-body text-body text-on-surface-variant mb-6 flex-grow">
                            A highly-available service mesh designed for Kubernetes environments, optimizing cross-region latency by 40% through intelligent traffic routing and mTLS encryption.
                        </p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="font-code-sm text-code-sm bg-surface-container-highest px-2 py-1 text-on-surface-variant border border-outline-variant">Go</span>
<span className="font-code-sm text-code-sm bg-surface-container-highest px-2 py-1 text-on-surface-variant border border-outline-variant">gRPC</span>
<span className="font-code-sm text-code-sm bg-surface-container-highest px-2 py-1 text-on-surface-variant border border-outline-variant">Docker</span>
<span className="font-code-sm text-code-sm bg-surface-container-highest px-2 py-1 text-on-surface-variant border border-outline-variant">Prometheus</span>
</div>
<div className="flex gap-6 mt-auto">
<a className="flex items-center gap-2 text-primary font-code-sm text-code-sm hover:underline" href="#">
<span className="material-symbols-outlined text-[18px]">terminal</span> VIEW_CODE
                            </a>
<a className="flex items-center gap-2 text-primary font-code-sm text-code-sm hover:underline" href="#">
<span className="material-symbols-outlined text-[18px]">open_in_new</span> LIVE_DEMO
                            </a>
</div>
</div>
</div>
</div>
<div className="group bg-surface-container border border-slate-800 hover:border-primary-fixed-dim/50 transition-all duration-500 flex flex-col">
<div className="p-6 border-b border-slate-800">
<div className="font-code-sm text-primary text-code-sm mb-1 opacity-60">web / ai-interface</div>
<h3 className="font-h3 text-h3 text-on-background">Neural Kernel UI</h3>
</div>
<div className="aspect-square bg-slate-900 relative overflow-hidden flex items-center justify-center border-b border-slate-800">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" data-alt="Close up of a sleek digital interface displaying neural network nodes and data streams in glowing cyan and white. The background is a deep charcoal texture. The visual style is strictly minimalist and focused on technical data accuracy, with soft blue lighting emanating from the interface elements." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLYG00S1ZeSYwwVLV2hplHNfmCi1SDYxash1gBpoWVIScR8SpTGvVOUgQ1B4gPAC-vTVlYJPkZMhkEYyTz7GBo8zf0nkh9OhdFeFjFm-j8N_MhFlRjNK-ccBZSyovlxZNVZ0BubuYJEyRJ1YZx5NKcyfnFMd5oZMa3fG3S5cxMRweUFySo-69f2h8ibbkSsod4eDx3IXqRI95-w48TFT9OWXnV0Bx1uPCBesivFsTDCTBJ3QnVMcfohKvUik5r6N7t52lj3JIVXA"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<p className="font-body text-body text-on-surface-variant mb-4 line-clamp-3">
                        A low-latency dashboard for monitoring large language model inference costs and token usage across multiple providers.
                    </p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="font-code-sm text-code-sm bg-surface-container-highest px-2 py-1 text-on-surface-variant border border-outline-variant">React</span>
<span className="font-code-sm text-code-sm bg-surface-container-highest px-2 py-1 text-on-surface-variant border border-outline-variant">Vercel</span>
</div>
<div className="mt-auto flex justify-between">
<a className="text-primary font-code-sm text-[12px] uppercase tracking-wider hover:glow-cyan-400" href="#">Github</a>
<a className="text-primary font-code-sm text-[12px] uppercase tracking-wider hover:glow-cyan-400" href="#">Preview</a>
</div>
</div>
</div>
<div className="group bg-surface-container border border-slate-800 hover:border-primary-fixed-dim/50 transition-all duration-500 flex flex-col">
<div className="p-6 border-b border-slate-800">
<div className="font-code-sm text-primary text-code-sm mb-1 opacity-60">mobile / rust-core</div>
<h3 className="font-h3 text-h3 text-on-background">CryptoVault Mobile</h3>
</div>
<div className="p-6 flex flex-col flex-grow">
<p className="font-body text-body text-on-surface-variant mb-6">
                        A cross-platform crypto-wallet built with a custom Rust-based core for performance and hardware-level security integration.
                    </p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="font-code-sm text-code-sm bg-surface-container-highest px-2 py-1 text-on-surface-variant border border-outline-variant">Rust</span>
<span className="font-code-sm text-code-sm bg-surface-container-highest px-2 py-1 text-on-surface-variant border border-outline-variant">Flutter</span>
</div>
<div className="mt-auto flex justify-between">
<a className="text-primary font-code-sm text-[12px] uppercase tracking-wider" href="#">Docs</a>
<a className="text-primary font-code-sm text-[12px] uppercase tracking-wider" href="#">Repo</a>
</div>
</div>
</div>
<div className="group bg-surface-container border border-slate-800 hover:border-primary-fixed-dim/50 transition-all duration-500 flex flex-col">
<div className="p-6 border-b border-slate-800">
<div className="font-code-sm text-primary text-code-sm mb-1 opacity-60">api / analytics</div>
<h3 className="font-h3 text-h3 text-on-background">StreamQuant API</h3>
</div>
<div className="p-6 flex flex-col flex-grow">
<p className="font-body text-body text-on-surface-variant mb-6">
                        Real-time stock sentiment analysis API processing 10k messages/second from social data streams with 98% accuracy.
                    </p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="font-code-sm text-code-sm bg-surface-container-highest px-2 py-1 text-on-surface-variant border border-outline-variant">Python</span>
<span className="font-code-sm text-code-sm bg-surface-container-highest px-2 py-1 text-on-surface-variant border border-outline-variant">Kafka</span>
</div>
<div className="mt-auto flex justify-between">
<a className="text-primary font-code-sm text-[12px] uppercase tracking-wider" href="#">Specs</a>
<a className="text-primary font-code-sm text-[12px] uppercase tracking-wider" href="#">Github</a>
</div>
</div>
</div>
<div className="group bg-surface-container border border-slate-800 hover:border-primary-fixed-dim/50 transition-all duration-500 flex flex-col">
<div className="p-6 border-b border-slate-800">
<div className="font-code-sm text-primary text-code-sm mb-1 opacity-60">infrastructure / ops</div>
<h3 className="font-h3 text-h3 text-on-background">Zero-Trust Auth</h3>
</div>
<div className="p-6 flex flex-col flex-grow">
<p className="font-body text-body text-on-surface-variant mb-6">
                        Internal identity provider implementing zero-trust principles for corporate microservices with OIDC support.
                    </p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="font-code-sm text-code-sm bg-surface-container-highest px-2 py-1 text-on-surface-variant border border-outline-variant">Terraform</span>
<span className="font-code-sm text-code-sm bg-surface-container-highest px-2 py-1 text-on-surface-variant border border-outline-variant">AWS</span>
</div>
<div className="mt-auto flex justify-between">
<a className="text-primary font-code-sm text-[12px] uppercase tracking-wider" href="#">Diagrams</a>
<a className="text-primary font-code-sm text-[12px] uppercase tracking-wider" href="#">Case_Study</a>
</div>
</div>
</div>
</div>
</main>
    );
}