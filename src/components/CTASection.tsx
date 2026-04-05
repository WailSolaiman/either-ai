import { motion } from 'framer-motion'
import { sectionReveal } from '../lib/motion'

export function CTASection() {
  return (
    <section id="cta" className="section-x section-y relative overflow-hidden bg-surface">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[min(90vw,520px)] w-[min(90vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-container/[0.07] blur-[100px]" />
      <div className="absolute left-1/2 top-0 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-primary-container/30 to-transparent" />

      <motion.div
        className="relative z-10 mx-auto max-w-4xl text-center"
        {...sectionReveal}
      >
        <p className="font-headline text-[10px] font-bold uppercase tracking-[0.35em] text-secondary">
          Next step
        </p>
        <h2 className="mt-3 font-headline text-4xl font-bold leading-tight tracking-tighter text-white md:text-5xl lg:text-6xl">
          Ready to <span className="text-primary-container">automate</span> with confidence?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl font-body text-lg leading-relaxed text-on-surface-variant">
          Book a working session—we’ll map your highest-friction workflows and show what a first
          production cut could look like in thirty days.
        </p>
        <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:mt-12 sm:flex-row sm:items-center sm:gap-5">
          <button
            type="button"
            className="btn-interactive bg-primary-container px-10 py-4 font-headline text-sm font-bold uppercase tracking-widest text-on-primary-container hover:shadow-[0_0_28px_rgba(0,241,254,0.4)] sm:px-12"
          >
            Book a Demo
          </button>
          <a
            href="#platform"
            className="btn-interactive border border-outline-variant/35 px-10 py-4 text-center font-headline text-sm font-bold uppercase tracking-widest text-white hover:border-outline-variant/55 hover:bg-white/5 sm:px-12"
          >
            See the platform
          </a>
        </div>
      </motion.div>
    </section>
  )
}
