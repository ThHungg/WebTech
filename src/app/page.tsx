import BrandSection from "@/components/HomePage/BrandSection";
import CategorySection from "@/components/HomePage/CategorySection";
import CTASection from "@/components/HomePage/CTASection";
import DealSection from "@/components/HomePage/DealSection";
import FeaturedSection from "@/components/HomePage/FeaturedSection";
import FeedbackSection from "@/components/HomePage/FeedbackSection";
import { memo } from "react";

const HomePage = () => {
  return (
    <div>
      <CategorySection />
      <FeaturedSection />
      <DealSection />
      <BrandSection />
      <FeedbackSection />
      <CTASection />
    </div>
  );
};

export default memo(HomePage);
