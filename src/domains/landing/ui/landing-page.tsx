import { BrandStorySection } from './brand-story-section';
import { FranchiseBenefitSection } from './franchise-benefit-section';
import { FranchiseGrowthSection } from './franchise-growth-section';
import { HeroSection } from './hero-section';
import { MapoSalesDashboardSection } from './mapo-sales-dashboard-section';
import { ProfitStructureSection } from './profit-structure-section';
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
        <FranchiseGrowthSection />
        <ProfitStructureSection />
        <MapoSalesDashboardSection />
        <FranchiseBenefitSection />
      </main>
    </>
  );
}
