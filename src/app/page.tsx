import Hero from "@/components/Hero";
import BrandIntro from "@/components/BrandIntro";
import ProductHighlights from "@/components/ProductHighlights";
import ApplicationsSection from "@/components/ApplicationsSection";
import FeatureSection from "@/components/FeatureSection";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <ProductHighlights />
      <ApplicationsSection />
      <FeatureSection />
      <CTASection />
    </>
  );
}
