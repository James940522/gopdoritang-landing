import { BrandStorySection } from './brand-story-section';
import { HeroSection } from './hero-section';
import { SalesSection } from './sales-section';

export function LandingPage() {
  return (
    <main>
      <HeroSection />
      <BrandStorySection />
      <SalesSection />
    </main>
  );
}
