import { AIShowcase } from './components/AIShowcase'
import { AuthorityBlock } from './components/AuthorityBlock'
import { CaseSnapshot } from './components/CaseSnapshot'
import { CTASection } from './components/CTASection'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { ScrollToTop } from './components/ScrollToTop'
import { Pricing } from './components/Pricing'
import { SocialProofStrip } from './components/SocialProofStrip'
import { Stats } from './components/Stats'
import { TrustGovernance } from './components/TrustGovernance'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <SocialProofStrip />
      <CaseSnapshot />
      <TrustGovernance />
      <AuthorityBlock />
      <AIShowcase />
      <Pricing />
      <CTASection />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
