import BrandSection from "@/components/HomePage/BrandSection";
import CategorySection from "@/components/HomePage/CategorySection";
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
    </div>
  );
};

export default memo(HomePage);
