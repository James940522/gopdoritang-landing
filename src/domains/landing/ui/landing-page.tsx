import { HeroSection } from "./hero-section";
import { ProblemSection } from "./problem-section";
import { StampSection } from "./stamp-section";
import { StrengthsSection } from "./strengths-section";
import { ProfitSection } from "./profit-section";
import { MenuSection } from "./menu-section";
import { ReviewsSection } from "./reviews-section";
import { CostSection } from "./cost-section";
import { ProcessSection } from "./process-section";

export function LandingPage() {
  return (
    <main className="mx-auto w-[393px] overflow-x-hidden bg-[var(--color-bg)] text-[var(--color-cream)] shadow-[0_0_60px_rgba(0,0,0,0.5)]">
      <HeroSection />
      <ProblemSection />
      <StampSection />
      <StrengthsSection />
      <ProfitSection />
      <MenuSection />
      <ReviewsSection />
      <CostSection />
      <ProcessSection />
      <div>
        dd
      </div>
    </main>
  );
}
