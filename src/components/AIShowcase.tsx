import { motion } from 'framer-motion'
import { sectionReveal } from '../lib/motion'

export function AIShowcase() {
  return (
    <section id="platform" className="section-x section-y relative overflow-hidden bg-surface">
      <div className="absolute left-1/2 top-0 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-primary-container/30 to-transparent" />

      <motion.div
        className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:items-center lg:gap-20"
        {...sectionReveal}
      >
        <div>
          <div className="inline-flex items-center gap-3 rounded-full border border-primary-container/20 bg-primary-container/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-primary-container/90 shadow-[0_0_12px_rgba(0,241,254,0.45)]" />
            <span className="font-headline text-[10px] uppercase tracking-widest text-primary-container">
              Next-Gen Interface
            </span>
          </div>
          <h2 className="mt-6 font-headline text-4xl font-bold leading-tight tracking-tighter text-white md:text-5xl">
            Intuitive Command, <br />
            Autonomous Action.
          </h2>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-on-surface-variant">
            Experience the ETHER_AI dashboard—a seamless bridge between human intent and machine
            execution. Real-time optimization at your fingertips.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3 transition-colors duration-200 hover:text-white">
              <span className="material-symbols-outlined text-secondary">bolt</span>
              <span className="font-headline text-xs font-semibold uppercase tracking-widest">
                Low Latency
              </span>
            </div>
            <div className="flex items-center gap-3 transition-colors duration-200 hover:text-white">
              <span className="material-symbols-outlined text-secondary">security</span>
              <span className="font-headline text-xs font-semibold uppercase tracking-widest">
                Neural Encryption
              </span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -inset-10 rounded-full bg-primary-container/5 blur-[100px]" />
          <div className="glass-panel intelligence-glow card-lift relative z-10 rounded-xl border border-white/5 p-6 md:p-7">
            <div className="mb-7 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-red-500/50 transition-transform duration-200 hover:scale-110" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/50 transition-transform duration-200 hover:scale-110" />
                <div className="h-3 w-3 rounded-full bg-green-500/50 transition-transform duration-200 hover:scale-110" />
              </div>
              <div className="rounded bg-surface-container-highest px-3 py-1 font-headline text-[10px] uppercase tracking-widest text-primary">
                AI Engine Active
              </div>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-container/20">
                  <span className="material-symbols-outlined text-lg text-primary-container">
                    smart_toy
                  </span>
                </div>
                <div className="rounded-lg rounded-tl-none bg-surface-container p-4 text-sm leading-relaxed text-on-surface-variant transition-colors duration-200 hover:bg-surface-bright/30">
                  Analyzing current supply chain throughput... Found 14% optimization opportunity in
                  regional node B. Shall I implement the automated rerouting?
                </div>
              </div>
              <div className="flex items-start justify-end gap-4">
                <div className="rounded-lg rounded-tr-none bg-primary-container p-4 text-sm font-medium text-on-primary-container transition-[filter] duration-200 hover:brightness-105">
                  Yes, apply changes and generate the ROI report.
                </div>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <span className="material-symbols-outlined text-lg text-white">person</span>
                </div>
              </div>
              <div className="border-t border-white/5 pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-surface-container-low p-4 transition-colors duration-200 hover:bg-surface-container">
                    <div className="mb-1 text-[10px] uppercase tracking-wider text-on-surface-variant">
                      Processing Speed
                    </div>
                    <div className="font-headline text-xl font-bold text-white">0.42ms</div>
                  </div>
                  <div className="rounded-lg bg-surface-container-low p-4 transition-colors duration-200 hover:bg-surface-container">
                    <div className="mb-1 text-[10px] uppercase tracking-wider text-on-surface-variant">
                      Accuracy Rate
                    </div>
                    <div className="font-headline text-xl font-bold text-secondary">99.98%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel card-lift absolute -bottom-8 left-1/2 z-20 -translate-x-1/2 rounded-lg border border-white/10 p-4 shadow-2xl lg:-left-8 lg:translate-x-0">
            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <span className="material-symbols-outlined text-primary-container">verified</span>
              <div className="font-headline text-[10px] uppercase tracking-widest text-white">
                Neural Sync Complete
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
