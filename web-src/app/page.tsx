import { HeroSection } from "@/components/hero-section"
import { StorySection } from "@/components/story-section"
import { GuideSection } from "@/components/guide-section"
import { AttentionSection } from "@/components/attention-section"
import { FestivalLinkSection } from "@/components/festival-link-section"
import { LocationSection } from "@/components/location-section"
import { PosterSection } from "@/components/poster-section"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StorySection />
      <GuideSection />
      <AttentionSection />
      <LocationSection />
      <PosterSection />
      <FestivalLinkSection />
    </main>
  )
}
