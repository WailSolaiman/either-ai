import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import { FaAmazon, FaGoogle, FaMicrosoft } from 'react-icons/fa6'
import {
  SiDocker,
  SiOpenai,
  SiSalesforce,
  SiSlack,
  SiStripe,
} from 'react-icons/si'
import { sectionReveal } from '../lib/motion'

const BRANDS: { Icon: IconType; name: string }[] = [
  { Icon: FaGoogle, name: 'Google' },
  { Icon: FaMicrosoft, name: 'Microsoft' },
  { Icon: FaAmazon, name: 'Amazon' },
  { Icon: SiSlack, name: 'Slack' },
  { Icon: SiSalesforce, name: 'Salesforce' },
  { Icon: SiStripe, name: 'Stripe' },
  { Icon: SiDocker, name: 'Docker' },
  { Icon: SiOpenai, name: 'OpenAI' },
]

function LogoStrip({ suffix }: { suffix: string }) {
  return (
    <>
      {BRANDS.map(({ Icon, name }) => (
        <div
          key={`${name}-${suffix}`}
          className="flex shrink-0 items-center justify-center px-4 sm:px-5 md:px-6"
        >
          <Icon
            className="h-7 w-7 text-primary opacity-90 md:h-9 md:w-9"
            aria-hidden
            title={name}
          />
        </div>
      ))}
    </>
  )
}

export function SocialProofStrip() {
  return (
    <section
      id="trust"
      className="section-x section-y-tight bg-surface-container-low"
      aria-labelledby="social-proof-heading"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="flex flex-col items-center gap-10 text-center md:gap-12"
          {...sectionReveal}
        >
          <div>
            <p
              id="social-proof-heading"
              className="font-headline text-[10px] font-bold uppercase tracking-[0.35em] text-secondary"
            >
              Trusted by 100+ teams
            </p>
            <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-on-surface-variant md:text-xl">
              Operators in <span className="text-on-surface">logistics</span>,{' '}
              <span className="text-on-surface">support</span>, and{' '}
              <span className="text-on-surface">revenue</span> rely on ETHER_AI to ship automation
              without sacrificing oversight.
            </p>
          </div>

          <p className="sr-only">
            Logos shown for illustration include Google, Microsoft, Amazon, Slack, Salesforce,
            Stripe, Docker, and OpenAI.
          </p>

          <div
            className="trust-marquee relative mx-auto w-full max-w-sm overflow-hidden py-2 sm:max-w-md md:max-w-lg lg:max-w-xl"
            aria-hidden="true"
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-surface-container-low to-transparent sm:w-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-surface-container-low to-transparent sm:w-10" />
            <div className="trust-marquee-track flex w-max">
              <LogoStrip suffix="a" />
              <LogoStrip suffix="b" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
