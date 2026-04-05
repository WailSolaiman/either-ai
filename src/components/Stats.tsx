import { motion } from 'framer-motion'
import { sectionReveal } from '../lib/motion'

const stats = [
  { value: '94%', label: 'Task Automation Success' },
  { value: '12.4k', label: 'Hours Saved Monthly' },
  { value: '2.8x', label: 'Average Revenue Growth' },
] as const

export function Stats() {
  return (
    <section
      id="metrics"
      className="section-x overflow-hidden bg-surface pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24"
    >
      <motion.div className="mx-auto max-w-7xl" {...sectionReveal}>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group space-y-3 transition-[transform,opacity] duration-300 ease-out hover:-translate-y-0.5"
            >
              <h3 className="font-headline text-5xl font-bold tracking-tighter text-white transition-colors duration-200 group-hover:text-primary-container/90">
                {stat.value}
              </h3>
              <p className="font-headline text-sm uppercase tracking-widest text-on-surface-variant transition-colors duration-200 group-hover:text-on-surface">
                {stat.label}
              </p>
              <div className="h-px w-full bg-outline-variant/20 transition-colors duration-200 group-hover:bg-primary-container/25" />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
