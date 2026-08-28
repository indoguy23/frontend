import CategorySection from "../components/CategorySection";
import CollectionsSection from "../components/CollectionsSection";
import DealsSection from "../components/DealsSection";
import FeaturedProductsSection from "../components/FeaturedProductsSection";
import HeroSection from "../components/HeroSection";
import NewArrivalsSection from "../components/NewArrivalsSection";
import SpotlightSection from "../components/SpotlightSection";
import { TopSellersSection } from "../components/TopSellersSection";

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
      <TopSellersSection />
    </>
  );
};

export default HomePage;
