import { Outlet } from "react-router-dom";

import AnnouncementBar from "./components/AnnouncementBar";
import MarketplaceHeader from "./components/MarketplaceHeader";
import { marketplaceLayoutStyles } from "./MarketplaceLayout.styles";
import CategoryNavigation from "./components/CategoryNavigation";
import Footer from "@/components/layout/Footer";

const MarketplaceLayout = () => {
  return (
    <div className={marketplaceLayoutStyles.root}>
      <AnnouncementBar />

      <MarketplaceHeader />

      <CategoryNavigation />

      <main className={marketplaceLayoutStyles.content}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MarketplaceLayout;
