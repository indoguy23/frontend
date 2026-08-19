import { useState } from "react";

import ProductCard from "@/components/common/ProductCard";
import type { ProductCardData } from "@/components/common/ProductCard";
import { showToast } from "@/components/ui/Toast";

import { PRODUCT_CARD_DATA } from "../data/productCard.data";

const ProductCardPlayground = () => {
  const [wishlist, setWishlist] = useState<string[]>([]);

  const handleAddToCart = (product: ProductCardData) => {
    showToast.success(`${product.name} added to cart.`);
  };

  const handleWishlist = (product: ProductCardData) => {
    setWishlist((current) => {
      const exists = current.includes(product.id);

      if (exists) {
        showToast.info(`${product.name} removed from wishlist.`);

        return current.filter((id) => id !== product.id);
      }

      showToast.success(`${product.name} added to wishlist.`);

      return [...current, product.id];
    });
  };

  const handleViewDetails = (product: ProductCardData) => {
    showToast.info(`Opening ${product.name}.`);
  };

  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          ProductCard Component
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable marketplace cards for product listings, categories, search
          results and related products.
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {PRODUCT_CARD_DATA.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isWishlisted={wishlist.includes(product.id)}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleWishlist}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>

      <div className="mt-10">
        <h3 className="font-semibold text-foreground">Loading State</h3>

        <div className="mt-4 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {Array.from({
            length: 4,
          }).map((_, index) => (
            <ProductCard key={index} product={PRODUCT_CARD_DATA[0]} loading />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCardPlayground;
