import AnnouncementBar from '@/components/AnnouncementBar'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WhyMirar from '@/components/WhyMirar'
import BetaLearnings from '@/components/BetaLearnings'
import WhatComesNext from '@/components/WhatComesNext'
import MidCTA from '@/components/MidCTA'
import ProductPreview from '@/components/ProductPreview'
import FounderNote from '@/components/FounderNote'
import Waitlist from '@/components/Waitlist'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      {/* Header is fixed — lives outside <main> so no parent overflow clips it */}
      <Header />

      {/* pt-[60px] = fixed header height so content starts below the nav */}
      <main className="pt-[60px]">
        <AnnouncementBar />
        <Hero />
        <WhyMirar />
        <BetaLearnings />
        <WhatComesNext />
        <MidCTA />
        <ProductPreview />
        <FounderNote />
        <Waitlist />
        <Footer />
      </main>
    </>
  )
}
