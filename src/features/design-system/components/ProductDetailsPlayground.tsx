import { useState } from "react";

import ProductDetails from "@/components/common/ProductDetails";
import { showToast } from "@/components/ui/Toast";

import { PRODUCT_DETAILS_DATA } from "../data/productDetails.data";

const ProductDetailsPlayground = () => {
  const [quantity, setQuantity] = useState(1);

  const [wishlisted, setWishlisted] = useState(false);

  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Product Details
        </h2>

        <p className="mt-2 text-muted-foreground">
          Complete reusable product overview with gallery, pricing, stock,
          quantity and purchase actions.
        </p>
      </div>

      <div className="mt-8">
        <ProductDetails
          product={PRODUCT_DETAILS_DATA}
          quantity={quantity}
          onQuantityChange={setQuantity}
          isWishlisted={wishlisted}
          onToggleWishlist={(product) => {
            setWishlisted((current) => {
              const nextValue = !current;

              showToast.success(
                nextValue
                  ? `${product.name} added to wishlist.`
                  : `${product.name} removed from wishlist.`,
              );

              return nextValue;
            });
          }}
          onAddToCart={(product, selectedQuantity) => {
            showToast.success(
              `${selectedQuantity} × ${product.name} added to cart.`,
            );
          }}
        />
      </div>
    </section>
  );
};

export default ProductDetailsPlayground;
