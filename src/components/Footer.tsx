export function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#0e0e0e]">
      <div className="section-x mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 py-10 md:flex-row md:gap-8 md:py-12">
        <div className="font-headline text-lg font-black text-white">ETHER_AI</div>
        <div className="flex flex-wrap justify-center gap-6 font-body text-xs uppercase tracking-widest text-gray-500 md:gap-8">
          <a className="transition-colors duration-200 hover:text-cyan-300" href="#">
            Privacy Policy
          </a>
          <a className="transition-colors duration-200 hover:text-cyan-300" href="#">
            Terms of Service
          </a>
          <a className="transition-colors duration-200 hover:text-cyan-300" href="#">
            Twitter
          </a>
          <a className="transition-colors duration-200 hover:text-cyan-300" href="#">
            LinkedIn
          </a>
        </div>
        <div className="font-body text-center text-xs uppercase tracking-widest text-gray-500 md:text-left">
          © {new Date().getFullYear()} KINETIC ETHER. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  )
}
