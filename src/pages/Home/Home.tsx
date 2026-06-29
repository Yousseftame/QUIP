import HeroSection from '@/components/sections/HeroSection'
import VideoSection from '@/components/sections/VideoSection'
import VisionSection from '@/components/sections/VisionSection'
import RedSection from '@/components/sections/RedSection'
import SolutionsSection from '@/components/sections/SolutionsSection'
import FixedImageSection from '@/components/sections/FixedImageSection'

export default function Home() {
  return (
    <div>
          <HeroSection />
          <VideoSection />
          <VisionSection />
          <RedSection />
          <SolutionsSection />
          <FixedImageSection />
    </div>
  )
}
