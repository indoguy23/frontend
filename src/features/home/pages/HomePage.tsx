import CategorySection from "../components/CategorySection";
import DealsSection from "../components/DealsSection";
import FeaturedProductsSection from "../components/FeaturedProductsSection";
import HeroSection from "../components/HeroSection";
import SpotlightSection from "../components/SpotlightSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <FeaturedProductsSection />
      <SpotlightSection />
      <DealsSection />
    </>
  );
};

export default HomePage;
