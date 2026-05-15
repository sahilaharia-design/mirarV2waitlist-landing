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
      {/* Announcement bar scrolls away naturally */}
      <AnnouncementBar />

      {/* Header is sticky — sticks once announcement bar scrolls off */}
      <Header />

      <main>
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
