import { useCallback, useEffect, useState } from 'react'
import { cn } from '../lib/cn'

const SHOW_AFTER_PX = 480

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = useCallback(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }, [])

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={cn(
        'btn-interactive glass-panel fixed z-40 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-white shadow-[0_20px_80px_rgba(0,242,255,0.06)] transition-[opacity,transform,visibility] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface',
        'bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] right-[calc(1.25rem+env(safe-area-inset-right,0px))] max-[380px]:bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] max-[380px]:right-[calc(1rem+env(safe-area-inset-right,0px))]',
        'md:bottom-[calc(2rem+env(safe-area-inset-bottom,0px))] md:right-[calc(2rem+env(safe-area-inset-right,0px))]',
        visible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-2 opacity-0',
      )}
    >
      <span className="material-symbols-outlined text-2xl text-primary-container" aria-hidden>
        arrow_upward
      </span>
    </button>
  )
}
