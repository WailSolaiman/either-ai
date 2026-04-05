import * as Dialog from '@radix-ui/react-dialog'
import { useCallback, useEffect, useState } from 'react'
import { cn } from '../lib/cn'

const NAV_OFFSET_PX = 112

const navItems = [
  { href: '#services', label: 'Services', sectionId: 'services' },
  { href: '#metrics', label: 'Impact', sectionId: 'metrics' },
  { href: '#case-studies', label: 'Outcomes', sectionId: 'case-studies' },
  { href: '#governance', label: 'Trust', sectionId: 'governance' },
  { href: '#platform', label: 'Platform', sectionId: 'platform' },
  { href: '#pricing', label: 'Pricing', sectionId: 'pricing' },
] as const

function getActiveSectionId(): (typeof navItems)[number]['sectionId'] {
  const scrollY = window.scrollY + NAV_OFFSET_PX
  let active: (typeof navItems)[number]['sectionId'] = navItems[0].sectionId

  for (const item of navItems) {
    const el = document.getElementById(item.sectionId)
    if (!el) continue
    const top = el.getBoundingClientRect().top + window.scrollY
    if (top <= scrollY) active = item.sectionId
  }

  return active
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeSectionId, setActiveSectionId] = useState<
    (typeof navItems)[number]['sectionId']
  >(() => (typeof document !== 'undefined' ? getActiveSectionId() : navItems[0].sectionId))

  const updateActive = useCallback(() => {
    setActiveSectionId(getActiveSectionId())
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive)
    return () => {
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
    }
  }, [updateActive])

  return (
    <nav className="fixed top-0 z-50 w-full bg-transparent shadow-[0_20px_80px_rgba(0,242,255,0.06)] backdrop-blur-xl">
      <div className="section-x mx-auto flex max-w-7xl items-center justify-between py-6">
        <a
          href="#services"
          className="font-headline text-2xl font-bold tracking-tighter text-white transition-opacity duration-200 hover:opacity-90"
        >
          ETHER_AI
        </a>

        <div className="hidden items-center gap-3 font-headline text-[10px] uppercase tracking-tight text-gray-400 lg:flex lg:gap-4 xl:gap-5 xl:text-xs 2xl:text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                'border-b-2 border-transparent pb-1 transition-colors duration-200',
                activeSectionId === item.sectionId
                  ? 'border-cyan-400 text-white'
                  : 'hover:text-white',
              )}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="btn-interactive hidden bg-primary-container px-4 py-2 font-headline text-xs font-bold uppercase text-on-primary-container hover:shadow-[0_0_20px_rgba(0,241,254,0.3)] lg:inline-flex sm:px-6 sm:text-sm"
          >
            Book a Demo
          </button>

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                className="btn-interactive inline-flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/10 lg:hidden"
                aria-label="Open menu"
              >
                <span className="material-symbols-outlined text-2xl">menu</span>
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm" />
              <Dialog.Content className="glass-panel fixed right-0 top-0 z-[101] flex h-full w-[min(100%,20rem)] flex-col border-l border-white/10 p-8 shadow-2xl outline-none">
                <Dialog.Description className="sr-only">
                  Site navigation and primary actions.
                </Dialog.Description>
                <div className="mb-8 flex items-center justify-between">
                  <Dialog.Title className="font-headline text-lg font-bold tracking-tight text-white">
                    Menu
                  </Dialog.Title>
                  <Dialog.Close
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-on-surface-variant transition-colors hover:bg-white/10 hover:text-white"
                    aria-label="Close menu"
                  >
                    <span className="material-symbols-outlined">close</span>
                  </Dialog.Close>
                </div>
                <nav className="flex flex-col gap-6 font-headline text-sm uppercase tracking-widest">
                  {navItems.map((item) => (
                    <Dialog.Close asChild key={item.href}>
                      <a
                        href={item.href}
                        className={cn(
                          'text-left transition-colors duration-200',
                          activeSectionId === item.sectionId
                            ? 'text-primary-container'
                            : 'text-on-surface-variant hover:text-white',
                        )}
                      >
                        {item.label}
                      </a>
                    </Dialog.Close>
                  ))}
                </nav>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </nav>
  )
}
