export default function Preview (){
    return (
        <main className="pt-32 pb-24">
<div className="max-w-4xl mx-auto px-6 md:px-12">
<div className="mb-10 font-code-sm text-code-sm text-outline flex items-center gap-2 overflow-x-auto whitespace-nowrap">
<span className="text-on-surface-variant">~/</span>
<span className="hover:text-primary-fixed transition-colors cursor-pointer">work</span>
<span>/</span>
<span className="hover:text-primary-fixed transition-colors cursor-pointer">blog</span>
<span>/</span>
<span className="text-primary-fixed-dim">implementing-event-driven-architectures</span>
</div>
<header className="mb-16">
<h1 className="font-h1 text-[36px] md:text-h1 text-on-surface mb-8 leading-tight">
        Implementing Event-Driven Architectures in High-Scale FinTech Systems
      </h1>
<div className="flex flex-wrap items-center gap-y-6 gap-x-10 pb-8 border-b border-outline-variant/50">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded bg-surface-container-high border border-primary-fixed-dim/30 flex items-center justify-center">
<span className="material-symbols-outlined text-primary-fixed-dim" data-icon="person">person</span>
</div>
<div>
<p className="font-label-caps text-xs text-primary-fixed tracking-widest uppercase">System_Architect</p>
<p className="text-[13px] text-outline font-code-sm">Lead Software Engineer</p>
</div>
</div>
<div className="flex items-center gap-8">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-outline text-[18px]" data-icon="calendar_today">calendar_today</span>
<span className="font-code-sm text-code-sm text-on-surface-variant">March 14, 2024</span>
</div>
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-outline text-[18px]" data-icon="schedule">schedule</span>
<span className="font-code-sm text-code-sm text-on-surface-variant">12 min read</span>
</div>
</div>
</div>
</header>
<article className="prose prose-invert max-w-none">
<section className="mb-12">
<p className="font-body text-body text-on-surface-variant mb-8 leading-relaxed text-lg">
          In the world of high-frequency financial transactions, the traditional request-response model eventually hits a ceiling. As we scale to handle millions of events per second, the synchronous coupling between services becomes a liability—a single bottleneck can cascade across the entire ecosystem.
        </p>
<h2 className="font-h2 text-h2 text-on-surface mt-16 mb-6">The Transition to Asynchronous Flow</h2>
<p className="font-body text-body text-on-surface-variant mb-8">
          Shifting to an event-driven architecture (EDA) allowed our engineering teams to decouple state changes from notification mechanisms. In our implementation, we utilized Apache Kafka as the central nervous system, ensuring that every trade, account update, and risk assessment was treated as a discrete, immutable event.
        </p>
<div className="my-12">
<div className="flex items-center justify-between bg-surface-container-highest px-4 py-2 border-x border-t border-outline-variant">
<span className="font-code-sm text-xs text-on-surface-variant uppercase tracking-wider">event_schema.json</span>
<span className="material-symbols-outlined text-outline text-sm" data-icon="content_copy">content_copy</span>
</div>
<pre className="font-code-sm text-code-sm text-on-surface bg-surface-container-low p-6 border border-outline-variant overflow-x-auto"><code>{`
{
  "event_id": "uuid-7a91-4b3c-912d",
  "type": "TRANSACTION_AUTHORIZED",
  "timestamp": "2024-03-14T10:45:00.123Z",
  "payload": {
    "account_id": "ACC_99182",
    "amount": 450.00,
    "currency": "USD",
    "status": "APPROVED"
  },
  "metadata": {
    "version": "1.0.4",
    "origin": "svc-payments-primary"
  }
}
`}</code></pre>
</div>
</section>
<section className="mb-16">
<h2 className="font-h2 text-h2 text-on-surface mt-16 mb-6">Addressing Eventual Consistency</h2>
<p className="font-body text-body text-on-surface-variant mb-10">
          One of the primary challenges in FinTech is maintaining data integrity while embracing eventual consistency. To solve this, we implemented the <strong>Outbox Pattern</strong>. Instead of updating the database and sending a message as two separate actions, we write the event to a dedicated {"outbox"} table within the same transaction as the business state change.
        </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
<div className="p-8 bg-surface-container-low border border-outline-variant/30 hover:border-primary-fixed-dim/50 transition-colors">
<span className="material-symbols-outlined text-primary-fixed-dim mb-4" data-icon="bolt">bolt</span>
<h4 className="font-h3 text-xl text-on-surface mb-3">High Throughput</h4>
<p className="font-body text-sm text-on-surface-variant leading-relaxed">Optimized for low-latency processing across geographically distributed clusters with partitioned topics.</p>
</div>
<div className="p-8 bg-surface-container-low border border-outline-variant/30 hover:border-secondary/50 transition-colors">
<span className="material-symbols-outlined text-secondary mb-4" data-icon="security">security</span>
<h4 className="font-h3 text-xl text-on-surface mb-3">Immutable Audit</h4>
<p className="font-body text-sm text-on-surface-variant leading-relaxed">Every event is a permanent record of truth, enabling effortless audit trails and system replayability.</p>
</div>
</div>
</section>
<footer className="mt-20 pt-10 border-t border-outline-variant/50 flex flex-col md:flex-row md:items-center justify-between gap-8">
<div className="flex items-center gap-6">
<span className="font-label-caps text-xs text-outline tracking-widest uppercase">Share</span>
<div className="flex gap-3">
<button className="w-10 h-10 flex items-center justify-center border border-outline-variant hover:border-primary-fixed-dim transition-colors group">
<span className="material-symbols-outlined text-outline group-hover:text-primary-fixed-dim text-lg" data-icon="share">share</span>
</button>
<button className="w-10 h-10 flex items-center justify-center border border-outline-variant hover:border-primary-fixed-dim transition-colors group">
<span className="material-symbols-outlined text-outline group-hover:text-primary-fixed-dim text-lg" data-icon="link">link</span>
</button>
</div>
</div>
<div className="flex flex-wrap items-center gap-3 font-code-sm text-xs text-outline">
<span className="uppercase tracking-widest mr-2">Tags:</span>
<a className="px-3 py-1 bg-surface-container rounded-full hover:text-primary-fixed-dim transition-colors border border-outline-variant/30" href="#">#SystemDesign</a>
<a className="px-3 py-1 bg-surface-container rounded-full hover:text-primary-fixed-dim transition-colors border border-outline-variant/30" href="#">#Kafka</a>
<a className="px-3 py-1 bg-surface-container rounded-full hover:text-primary-fixed-dim transition-colors border border-outline-variant/30" href="#">#Microservices</a>
</div>
</footer>
</article>
<section className="mt-32">
<div className="flex items-center justify-between mb-12">
<h2 className="font-h2 text-2xl text-on-surface tracking-tight">Related Intelligence</h2>
<div className="h-px flex-1 bg-outline-variant/30 mx-8"></div>
<button className="font-label-caps text-[11px] text-primary-fixed-dim hover:tracking-[0.2em] transition-all uppercase">View All Logs</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<a className="group p-6 border border-outline-variant/20 hover:border-primary-fixed-dim/40 transition-all bg-surface-container-low" href="#">
<p className="font-code-sm text-[11px] text-primary-fixed mb-3">Feb 24, 2024</p>
<h4 className="text-lg font-semibold group-hover:text-primary-fixed-dim transition-colors leading-snug">Rust vs Go for Microservices Performance</h4>
<p className="mt-4 text-sm text-on-surface-variant font-body line-clamp-2">A deep dive into memory management and concurrency patterns...</p>
</a>
<a className="group p-6 border border-outline-variant/20 hover:border-primary-fixed-dim/40 transition-all bg-surface-container-low" href="#">
<p className="font-code-sm text-[11px] text-primary-fixed mb-3">Jan 12, 2024</p>
<h4 className="text-lg font-semibold group-hover:text-primary-fixed-dim transition-colors leading-snug">Zero Trust Networking in Cloud-Native Apps</h4>
<p className="mt-4 text-sm text-on-surface-variant font-body line-clamp-2">Moving beyond perimeter security with identity-based access...</p>
</a>
<a className="group p-6 border border-outline-variant/20 hover:border-primary-fixed-dim/40 transition-all bg-surface-container-low" href="#">
<p className="font-code-sm text-[11px] text-primary-fixed mb-3">Dec 05, 2023</p>
<h4 className="text-lg font-semibold group-hover:text-primary-fixed-dim transition-colors leading-snug">Kubernetes Operator Patterns for Databases</h4>
<p className="mt-4 text-sm text-on-surface-variant font-body line-clamp-2">Managing stateful workloads with custom controllers and CRDs...</p>
</a>
</div>
</section>
</div>
</main>
    );
}