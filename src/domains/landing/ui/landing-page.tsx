import { BrandStorySection } from './brand-story-section';
import { HeroSection } from './hero-section';
import { SalesSection } from './sales-section';
import { SiteHeader } from './site-header';

export function LandingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <BrandStorySection />
        <SalesSection />
      </main>
    </>
  );
}
