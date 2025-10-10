import { Hero } from '@/components/sections/Hero';
import { AboutEAtek } from '@/components/sections/AboutEAtek';
import { Offerings } from '@/components/sections/Offerings';
import { WhyEAtek } from '@/components/sections/WhyEAtek';
import { ProgramsFellowships } from '@/components/sections/ProgramsFellowships';
import { ProductShowcase } from '@/components/sections/ProductShowcase';
import { CommunityImpact } from '@/components/sections/CommunityImpact';
import { TeamHighlight } from '@/components/sections/TeamHighlight';
import { BlogInsights } from '@/components/sections/BlogInsights';
import { CTABanner } from '@/components/sections/CTABanner';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutEAtek />
      <Offerings />
      <WhyEAtek />
      <ProgramsFellowships />
      <ProductShowcase />
      <CommunityImpact />
      <TeamHighlight />
      <BlogInsights />
      <CTABanner />
    </div>
  );
}