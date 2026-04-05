import { motion } from 'framer-motion'
import { sectionReveal } from '../lib/motion'

const pillars = [
  {
    icon: 'encrypted' as const,
    title: 'Data boundaries',
    body: 'Tenant-scoped retrieval, least-privilege API access, and clear retention policies—your data never trains a shared model without contract.',
  },
  {
    icon: 'person_raised_hand' as const,
    title: 'Human in the loop',
    body: 'High-impact actions route to reviewers; models propose, people approve. Escalation paths stay one click away.',
  },
  {
    icon: 'receipt_long' as const,
    title: 'Audit-ready logs',
    body: 'Immutable decision traces: prompts, tool calls, outputs, and overrides—exportable for security and compliance reviews.',
  },
  {
    icon: 'hub' as const,
    title: 'Your stack',
    body: 'We integrate with CRMs, helpdesks, warehouses, and internal APIs—no rip-and-replace, only orchestration.',
  },
] as const

export function TrustGovernance() {
  return (
    <section
      id="governance"
      className="section-x section-y bg-surface-container-low"
      aria-labelledby="governance-heading"
    >
      <motion.div className="mx-auto max-w-7xl" {...sectionReveal}>
        <div className="mx-auto mb-16 max-w-3xl text-center lg:mx-0 lg:mb-20 lg:max-w-2xl lg:text-left">
          <p className="font-headline text-[10px] font-bold uppercase tracking-[0.3em] text-secondary">
            {'Trust & governance'}
          </p>
          <h2
            id="governance-heading"
            className="mt-5 font-headline text-4xl font-bold tracking-tighter text-white md:text-5xl"
          >
            Built for teams who cannot afford black boxes.
          </h2>
          <p className="mt-5 font-body text-lg leading-relaxed text-on-surface-variant">
            Credibility is not a badge—it is controls, transparency, and operational discipline.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7">
          {pillars.map((item) => (
            <div
              key={item.title}
              className="glass-panel card-lift rounded-xl border border-white/5 p-8 transition-colors duration-300 hover:bg-white/[0.06]"
            >
              <span className="material-symbols-outlined text-2xl text-secondary">{item.icon}</span>
              <h3 className="mt-4 font-headline text-lg font-bold tracking-tight text-white">
                {item.title}
              </h3>
              <p className="mt-2.5 font-body text-sm leading-relaxed text-on-surface-variant">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
