import { BrandStorySection } from './brand-story-section';
import { ContactSection } from './contact-section';
import { FranchiseBenefitSection } from './franchise-benefit-section';
import { FranchiseGrowthSection } from './franchise-growth-section';
import { HeroSection } from './hero-section';
import { MapoSalesDashboardSection } from './mapo-sales-dashboard-section';
import { MenuSection } from './menu-section';
import { ProfitStructureSection } from './profit-structure-section';
import { SalesSection } from './sales-section';
import { SiteHeader } from './site-header';
import { TerritoryProtectionSection } from './territory-protection-section';

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
        <TerritoryProtectionSection />
        <MenuSection />
        <ContactSection />
      </main>
    </>
  );
}
