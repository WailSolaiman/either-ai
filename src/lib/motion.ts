import type { HTMLMotionProps } from 'framer-motion'

/** One gentle fade-up per section — keep motion minimal. */
export const sectionReveal: Pick<
  HTMLMotionProps<'div'>,
  'initial' | 'whileInView' | 'transition' | 'viewport'
> = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  viewport: { once: true, amount: 0.15, margin: '0px 0px -48px 0px' },
}

/** Hero only: fade in on load, no scroll loop. */
export const heroEnter: Pick<HTMLMotionProps<'div'>, 'initial' | 'animate' | 'transition'> = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
}
