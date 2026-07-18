import AnnouncementBar from '@/components/AnnouncementBar'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TheGap from '@/components/TheGap'
import ProductPreview from '@/components/ProductPreview'
import SixDimensions from '@/components/SixDimensions'
import FounderNote from '@/components/FounderNote'
import BeginCTA from '@/components/BeginCTA'
import Footer from '@/components/Footer'
import PageMotion from '@/components/PageMotion'

export default function Home() {
  return (
    <>
      <PageMotion />
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
