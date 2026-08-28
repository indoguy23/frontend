import SellerCard from "@/components/common/SellerCard";
import { TOP_SELLERS } from "../../data/topSellers.data";

import { topSellersSectionStyles } from "./TopSellersSection.styles";

const TopSellersSection = () => {
  return (
    <section
      className={topSellersSectionStyles.root}
      aria-labelledby="top-sellers-title"
    >
      <div className={topSellersSectionStyles.container}>
        <div className={topSellersSectionStyles.header}>
          <div className={topSellersSectionStyles.headingGroup}>
            <p className={topSellersSectionStyles.eyebrow}>
              Trusted Marketplace
            </p>

            <h2
              id="top-sellers-title"
              className={topSellersSectionStyles.title}
            >
              Top Sellers
            </h2>

            <p className={topSellersSectionStyles.description}>
              Shop from highly rated sellers trusted by MarketHub customers.
            </p>
          </div>
        </div>

        <div className={topSellersSectionStyles.sellers}>
          {TOP_SELLERS.map((seller) => (
            <SellerCard key={seller.id} seller={seller} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSellersSection;
