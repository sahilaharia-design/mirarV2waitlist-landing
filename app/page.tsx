import AnnouncementBar from '@/components/AnnouncementBar'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TheGap from '@/components/TheGap'
import WithoutPractice from '@/components/WithoutPractice'
import WhyNow from '@/components/WhyNow'
import FirstPractice from '@/components/FirstPractice'
import ProductPreview from '@/components/ProductPreview'
import AlignmentLoop from '@/components/AlignmentLoop'
import SixDimensions from '@/components/SixDimensions'
import Reflections from '@/components/Reflections'
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
        <WithoutPractice />
        <WhyNow />
        <FirstPractice />
        <ProductPreview />
        <AlignmentLoop />
        <SixDimensions />
        <Reflections />
        <FounderNote />
        <BeginCTA />
        <Footer />
      </main>
    </>
  )
}
