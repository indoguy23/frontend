import WishlistItem from "@/components/common/WishlistItem";
import { showToast } from "@/components/ui/Toast";

import { PRODUCT_CARD_DATA } from "../data/productCard.data";

const WishlistItemPlayground = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Wishlist Item
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable wishlist entries with product information and actions.
        </p>
      </div>

      <div className="mt-8 space-y-4">
        {PRODUCT_CARD_DATA.slice(0, 3).map((product) => (
          <WishlistItem
            key={product.id}
            product={product}
            onAddToCart={(selectedProduct) =>
              showToast.success(`${selectedProduct.name} added to cart.`)
            }
            onViewDetails={(selectedProduct) =>
              showToast.info(`Opening ${selectedProduct.name}.`)
            }
            onRemove={(selectedProduct) =>
              showToast.info(`${selectedProduct.name} removed from wishlist.`)
            }
          />
        ))}
      </div>
    </section>
  );
};

export default WishlistItemPlayground;
