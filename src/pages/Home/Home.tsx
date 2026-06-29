import HeroSection from '@/components/sections/HeroSection'
import VisionSection from '@/components/sections/VisionSection'
import RedSection from '@/components/sections/RedSection'
import SolutionsSection from '@/components/sections/SolutionsSection'
import FixedImageSection from '@/components/sections/FixedImageSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ValueSection from '@/components/sections/ValueSection'
import ReplicateSection from '@/components/sections/ReplicateSection'
import IndustrialBackingSection from '@/components/sections/IndustrialBackingSection'
import ContactCtaSection from '@/components/sections/ContactCtaSection'
import FooterSection from '@/components/sections/FooterSection'

export default function Home() {
  return (
    <div>
          <HeroSection />
          <VisionSection />
          <RedSection />
          <SolutionsSection />
          <FixedImageSection />
          <ProjectsSection />
          <ValueSection />
          <ReplicateSection />
          <IndustrialBackingSection />
          <ContactCtaSection />
          <FooterSection />
    </div>
  )
}
