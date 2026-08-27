import CategorySection from "../components/CategorySection";
import CollectionsSection from "../components/CollectionsSection";
import DealsSection from "../components/DealsSection";
import FeaturedProductsSection from "../components/FeaturedProductsSection";
import HeroSection from "../components/HeroSection";
import NewArrivalsSection from "../components/NewArrivalsSection";
import SpotlightSection from "../components/SpotlightSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <FeaturedProductsSection />
      <SpotlightSection />
      <DealsSection />
      <NewArrivalsSection />
      <CollectionsSection />
    </>
  );
};

export default HomePage;
