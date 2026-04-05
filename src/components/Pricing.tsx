import { motion } from 'framer-motion'
import { sectionReveal } from '../lib/motion'

const tiers = [
  {
    name: 'Pilot',
    blurb: 'Prove value on one workflow with a fixed scope and clear success metrics.',
    price: 'From $12k',
    period: 'one-time build',
    featured: false,
    features: [
      'Single use case & integration surface',
      'Human-in-the-loop defaults',
      '30-day hypercare & handoff docs',
    ],
  },
  {
    name: 'Scale',
    blurb: 'Production-grade agents across teams with monitoring, SLAs, and iteration.',
    price: 'Custom',
    period: 'annual engagement',
    featured: true,
    features: [
      'Multi-workflow orchestration',
      'Observability, evals & rollback',
      'Dedicated solution lead',
      'Quarterly roadmap reviews',
    ],
  },
  {
    name: 'Enterprise',
    blurb: 'Security review, VPC options, and co-build with your platform engineers.',
    price: "Let's talk",
    period: 'tailored contract',
    featured: false,
    features: [
      'Custom data & deployment posture',
      'Shared on-call with your SREs',
      'Executive QBRs & training',
    ],
  },
] as const

export function Pricing() {
  return (
    <section id="pricing" className="section-x section-y relative overflow-hidden bg-surface-container-low">
      <div className="absolute left-1/2 top-0 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-primary-container/30 to-transparent" />

      <motion.div className="mx-auto max-w-7xl" {...sectionReveal}>
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mx-0 lg:mb-14 lg:max-w-xl lg:text-left">
          <p className="font-headline text-[10px] font-bold uppercase tracking-[0.3em] text-secondary">
            Pricing
          </p>
          <h2 className="mt-5 font-headline text-4xl font-bold tracking-tighter text-white md:text-5xl">
            Engagements that match how you buy software.
          </h2>
          <p className="mt-5 font-body text-lg leading-relaxed text-on-surface-variant">
            No surprise change orders—every tier ships with documentation, evaluation hooks, and a
            path to expand.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={[
                'glass-panel card-lift flex flex-col rounded-xl border p-8 transition-colors duration-300',
                tier.featured
                  ? 'border-primary-container/35 bg-primary-container/[0.06] shadow-[0_0_60px_rgba(0,241,254,0.08)]'
                  : 'border-white/5 hover:bg-white/[0.04]',
              ].join(' ')}
            >
              {tier.featured ? (
                <span className="mb-4 inline-flex min-h-[2.5rem] items-end font-headline text-[10px] uppercase tracking-[0.2em] text-primary-container">
                  Most teams start here
                </span>
              ) : (
                <span className="mb-4 block min-h-[2.5rem]" aria-hidden />
              )}
              <h3 className="font-headline text-xl font-bold tracking-tight text-white">{tier.name}</h3>
              <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-on-surface-variant">
                {tier.blurb}
              </p>
              <div className="mt-8 border-t border-white/5 pt-8">
                <p className="font-headline text-3xl font-bold tracking-tighter text-white md:text-4xl">
                  {tier.price}
                </p>
                <p className="mt-1.5 font-headline text-[10px] uppercase tracking-widest text-on-surface-variant">
                  {tier.period}
                </p>
              </div>
              <ul className="mt-8 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-3 font-body text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined mt-0.5 shrink-0 text-lg text-primary-container">
                      check
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={[
                  'btn-interactive mt-9 w-full py-3 font-headline text-xs font-bold uppercase tracking-widest',
                  tier.featured
                    ? 'bg-primary-container text-on-primary-container hover:shadow-[0_0_24px_rgba(0,241,254,0.35)]'
                    : 'border border-outline-variant/40 text-white hover:border-outline-variant/60 hover:bg-white/5',
                ].join(' ')}
              >
                Talk to us
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
