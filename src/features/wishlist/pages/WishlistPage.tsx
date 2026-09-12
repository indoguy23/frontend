import { useNavigate } from "react-router-dom";

import ProductCard from "@/components/common/ProductCard";
import Button from "@/components/ui/Button";
import EmptyState from "@/components/ui/EmptyState";
import { useCart } from "@/features/cart/hooks/useCart";

import { useWishlist } from "../hooks/useWishlist";

const WishlistPage = () => {
  const navigate = useNavigate();

  const { items, toggleWishlist, isWishlisted, clearWishlist } = useWishlist();

  const { addToCart } = useCart();

  if (items.length === 0) {
    return (
      <main className="min-h-screen">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <EmptyState
            title="Your wishlist is empty"
            description="Save products you like and they will appear here."
            primaryAction={
              <Button type="button" onClick={() => navigate("/products")}>
                Browse Products
              </Button>
            }
          />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold sm:text-3xl">My Wishlist</h1>

            <p className="mt-1 text-sm text-muted-foreground">
              {items.length} {items.length === 1 ? "product" : "products"} saved
            </p>
          </div>

          <Button type="button" variant="outline" onClick={clearWishlist}>
            Clear Wishlist
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map(({ product }) => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={isWishlisted(product.id)}
              onToggleWishlist={toggleWishlist}
              onAddToCart={addToCart}
              onViewDetails={() => navigate(`/products/${product.slug}`)}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default WishlistPage;
