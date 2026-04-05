import { motion } from 'framer-motion'
import { sectionReveal } from '../lib/motion'

const craft = [
  {
    label: 'Delivery',
    detail: 'Principal engineers and product leads who have shipped AI in regulated and high-volume environments.',
  },
  {
    label: 'Rigor',
    detail: 'Evaluation harnesses, regression suites, and staged rollouts—treat automation like critical infrastructure.',
  },
  {
    label: 'Partnership',
    detail: 'Embedded with your operators for the first 90 days; documentation and handoff that your team actually uses.',
  },
] as const

export function AuthorityBlock() {
  return (
    <section id="team" className="section-x section-y relative overflow-hidden bg-surface">
      <div className="absolute left-1/2 top-0 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-primary-container/30 to-transparent" />

      <motion.div className="mx-auto max-w-7xl" {...sectionReveal}>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-start lg:gap-20">
          <figure className="lg:col-span-7">
            <blockquote className="font-headline text-3xl font-bold leading-[1.15] tracking-tighter text-white md:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              We do not demo magic—we deploy systems your CFO and security team can defend in a room
              together.
            </blockquote>
            <figcaption className="mt-8 font-headline text-xs uppercase tracking-[0.25em] text-secondary">
              ETHER_AI — delivery principle
            </figcaption>
          </figure>

          <div className="lg:col-span-5 lg:pt-1">
            <p className="font-headline text-[10px] font-bold uppercase tracking-[0.3em] text-primary-container">
              Who builds this
            </p>
            <div className="mt-5 space-y-8">
              {craft.map((row) => (
                <div key={row.label} className="border-b border-white/5 pb-8 last:border-0 last:pb-0">
                  <p className="font-headline text-sm font-bold uppercase tracking-widest text-white">
                    {row.label}
                  </p>
                  <p className="mt-2.5 font-body text-sm leading-relaxed text-on-surface-variant">
                    {row.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
