import AnnouncementBar from '@/components/AnnouncementBar'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TheGap from '@/components/TheGap'
import ProductPreview from '@/components/ProductPreview'
import SixDimensions from '@/components/SixDimensions'
import FounderNote from '@/components/FounderNote'
import BeginCTA from '@/components/BeginCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <TheGap />
        <ProductPreview />
        <SixDimensions />
        <FounderNote />
        <BeginCTA />
      </main>
      <Footer />
    </>
  )
}
