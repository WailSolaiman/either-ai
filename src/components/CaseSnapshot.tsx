import { motion } from 'framer-motion'
import { sectionReveal } from '../lib/motion'

export function CaseSnapshot() {
  return (
    <section id="case-studies" className="section-x section-y relative overflow-hidden bg-surface">
      <div className="absolute left-1/2 top-0 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-primary-container/30 to-transparent" />

      <motion.div
        className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:items-center lg:gap-20"
        {...sectionReveal}
      >
        <div>
          <div className="inline-flex items-center gap-3 rounded-full border border-primary-container/20 bg-primary-container/5 px-4 py-2">
            <span className="font-headline text-[10px] uppercase tracking-widest text-primary-container">
              Featured outcome
            </span>
          </div>
          <h2 className="mt-6 font-headline text-4xl font-bold leading-tight tracking-tighter text-white md:text-5xl">
            Regional logistics network, <span className="text-primary">re-routed by AI</span>.
          </h2>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-on-surface-variant">
            A mid-market 3PL needed fewer manual dispatch decisions and clearer exception handling.
            We deployed an agentic workflow on top of their TMS data—human approvers at critical
            gates only.
          </p>
          <ul className="mt-6 max-w-lg space-y-3 font-body text-on-surface-variant">
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-container" />
              <span>
                <span className="text-on-surface">Throughput:</span> sustained higher daily volume
                without added headcount.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-container" />
              <span>
                <span className="text-on-surface">Visibility:</span> every autonomous action logged
                with rollback paths.
              </span>
            </li>
          </ul>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -inset-8 rounded-full bg-primary-container/5 blur-[80px]" />
          <div className="glass-panel intelligence-glow card-lift relative z-10 rounded-xl border border-white/5 p-8 md:p-10">
            <p className="font-headline text-[10px] uppercase tracking-[0.25em] text-secondary">
              Primary metric
            </p>
            <p className="mt-5 font-headline text-6xl font-bold tracking-tighter text-white md:text-7xl">
              14%
            </p>
            <p className="mt-3 max-w-xs font-body text-lg text-on-surface-variant">
              net efficiency gain in regional routing after automated reroute proposals.
            </p>
            <div className="mt-8 border-t border-white/5 pt-6">
              <p className="font-headline text-[10px] uppercase tracking-widest text-on-surface-variant">
                Methodology
              </p>
              <p className="mt-2 font-body text-sm leading-relaxed text-on-surface-variant/80">
                Measured over 90 days against the same lanes and SLA targets. Baseline frozen before
                model-assisted dispatch.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
