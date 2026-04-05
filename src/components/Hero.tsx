import { motion } from 'framer-motion'
import { useCallback, useState } from 'react'
import { cn } from '../lib/cn'
import { heroEnter } from '../lib/motion'

const HERO_VIDEO = '/hero.mp4'
const HERO_POSTER = '/hero.png'

export function Hero() {
  const [videoReady, setVideoReady] = useState(false)

  const showVideo = useCallback(() => {
    setVideoReady(true)
  }, [])

  return (
    <main
      id="services"
      className="relative flex min-h-[800px] h-screen w-full items-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_POSTER}
          alt=""
          className={cn(
            'absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out',
            videoReady ? 'opacity-0' : 'opacity-100',
          )}
          fetchPriority="high"
          decoding="async"
        />
        <video
          className={cn(
            'absolute h-full w-full object-cover transition-opacity duration-700 ease-out',
            videoReady ? 'opacity-100' : 'opacity-0',
          )}
          autoPlay
          loop
          muted
          playsInline
          poster={HERO_POSTER}
          preload="auto"
          onLoadedData={showVideo}
          onCanPlay={showVideo}
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div className="video-overlay-gradient absolute inset-0" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      <div className="section-x relative z-10 mx-auto w-full max-w-7xl pt-20">
        <motion.div className="flex max-w-2xl flex-col items-start" {...heroEnter}>
          <span className="mb-7 font-headline text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            AI Automation Agency
          </span>
          <h1 className="mb-6 font-headline text-5xl font-bold leading-[1.1] tracking-tighter text-white md:text-7xl">
            We Build <span className="text-primary-container">Intelligent Systems</span> That Work
            For You
          </h1>
          <p className="mb-5 font-body text-xl font-light leading-relaxed text-on-surface-variant md:text-2xl">
            Automate operations, engage customers, and scale faster with custom AI solutions tailored
            to your business.
          </p>
          <p className="mb-9 max-w-lg font-body text-base leading-relaxed text-on-surface-variant/70">
            From chatbots to full AI workflows, we design, build, and deploy systems that save time and
            increase revenue.
          </p>
          <div className="flex w-full max-w-md flex-col gap-4 sm:max-w-none sm:flex-row sm:flex-wrap sm:gap-5">
            <a
              href="#cta"
              className="btn-interactive inline-flex items-center justify-center bg-primary-container px-10 py-4 text-center font-headline text-sm font-bold uppercase tracking-widest text-on-primary-container hover:shadow-[0_0_24px_rgba(0,241,254,0.35)]"
            >
              Get Started
            </a>
            <a
              href="#platform"
              className="btn-interactive inline-flex items-center justify-center border border-outline-variant/30 bg-transparent px-10 py-4 text-center font-headline text-sm font-bold uppercase tracking-widest text-white glass-panel hover:border-outline-variant/50 hover:bg-white/10"
            >
              See How It Works
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 opacity-40">
        <span className="font-headline text-[10px] uppercase tracking-[0.4em]">Discover</span>
        <div className="h-12 w-px bg-gradient-to-b from-primary-container/80 to-transparent" />
      </div>
    </main>
  )
}
