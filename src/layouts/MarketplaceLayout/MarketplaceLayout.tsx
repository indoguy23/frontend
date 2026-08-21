import { Outlet } from "react-router-dom";

import AnnouncementBar from "./components/AnnouncementBar";
import MarketplaceHeader from "./components/MarketplaceHeader";
import { marketplaceLayoutStyles } from "./MarketplaceLayout.styles";
import CategoryNavigation from "./components/CategoryNavigation";

const MarketplaceLayout = () => {
  return (
    <div className={marketplaceLayoutStyles.root}>
      <AnnouncementBar />

      <MarketplaceHeader />

      <CategoryNavigation />

      <main className={marketplaceLayoutStyles.content}>
        <Outlet />
      </main>
    </div>
  );
};

export default MarketplaceLayout;
