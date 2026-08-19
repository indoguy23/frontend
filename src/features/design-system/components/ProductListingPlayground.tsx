import { useState } from "react";

import ProductListing from "@/components/common/ProductListing";
import type { ProductCardData } from "@/components/common/ProductCard";
import { showToast } from "@/components/ui/Toast";

import { PRODUCT_CARD_DATA } from "../data/productCard.data";

const ProductListingPlayground = () => {
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);

  const handleAddToCart = (product: ProductCardData) => {
    showToast.success(`${product.name} added to cart.`);
  };

  const handleWishlist = (product: ProductCardData) => {
    setWishlistIds((current) =>
      current.includes(product.id)
        ? current.filter((id) => id !== product.id)
        : [...current, product.id],
    );
  };

  const handleViewDetails = (product: ProductCardData) => {
    showToast.info(`Opening ${product.name}.`);
  };

  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Product Listing
        </h2>

        <p className="mt-2 text-muted-foreground">
          Search, filter, sort and browse marketplace products.
        </p>
      </div>

      <div className="mt-8">
        <ProductListing
          products={PRODUCT_CARD_DATA}
          wishlistIds={wishlistIds}
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleWishlist}
          onViewDetails={handleViewDetails}
          pageSize={3}
        />
      </div>
    </section>
  );
};

export default ProductListingPlayground;
