import { useState } from "react";

import { Heart, Menu, ShoppingCart, UserRound } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import SearchBar from "@/components/common/SearchBar";
import ThemeToggle from "@/components/common/ThemeToggle";
import Button from "@/components/ui/Button";
import { useCart } from "@/features/cart/hooks/useCart";

import { marketplaceHeaderStyles } from "./MarketplaceHeader.styles";
import MobileNavigation from "../MobileNavigation";
import { useWishlist } from "@/features/wishlist/hooks/useWishlist";

const MarketplaceHeader = () => {
  const navigate = useNavigate();
  const { cartCount } = useCart();

  const { wishlistCount } = useWishlist();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleCartClick = () => {
    navigate("/cart");
  };

  const handleWishlistClick = () => {
    navigate("/wishlist");
  };

  return (
    <header className={marketplaceHeaderStyles.root}>
      <div className={marketplaceHeaderStyles.container}>
        {/* Mobile */}
        <div className={marketplaceHeaderStyles.mobileTopRow}>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              size="icon"
              variant="ghost"
              aria-label="Open navigation menu"
              className="rounded-full"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>

            <Link to="/" className={marketplaceHeaderStyles.brand}>
              MarketHub
            </Link>
          </div>

          <div className={marketplaceHeaderStyles.actions}>
            <Button
              type="button"
              size="icon"
              variant="ghost"
              aria-label="Wishlist"
              className={marketplaceHeaderStyles.actionButton}
              onClick={handleWishlistClick}
            >
              <Heart className="h-5 w-5" />

              {wishlistCount > 0 && (
                <span className={marketplaceHeaderStyles.badge}>
                  {wishlistCount > 99 ? "99+" : wishlistCount}
                </span>
              )}
            </Button>

            <Button
              type="button"
              size="icon"
              variant="ghost"
              aria-label={`Shopping cart${
                cartCount > 0 ? `, ${cartCount} items` : ""
              }`}
              className={marketplaceHeaderStyles.actionButton}
              onClick={handleCartClick}
            >
              <ShoppingCart className="h-5 w-5" />

              {cartCount > 0 && (
                <span className={marketplaceHeaderStyles.badge}>
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Button>

            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Search */}
        <div className={marketplaceHeaderStyles.mobileSearch}>
          <SearchBar
            value={searchValue}
            onChange={setSearchValue}
            placeholder="Search products, brands & categories..."
            className="w-full"
          />
        </div>

        {/* Tablet + Desktop */}
        <div className={marketplaceHeaderStyles.desktopRow}>
          <Link to="/" className={marketplaceHeaderStyles.brand}>
            MarketHub
          </Link>

          <div className={marketplaceHeaderStyles.searchWrapper}>
            <SearchBar
              value={searchValue}
              onChange={setSearchValue}
              placeholder="Search products, brands & categories..."
              className="w-full"
            />
          </div>

          <div className={marketplaceHeaderStyles.actions}>
            <Button
              type="button"
              size="icon"
              variant="ghost"
              aria-label="Wishlist"
              className={marketplaceHeaderStyles.actionButton}
              onClick={handleWishlistClick}
            >
              <Heart className="h-5 w-5" />

              {wishlistCount > 0 && (
                <span className={marketplaceHeaderStyles.badge}>
                  {wishlistCount > 99 ? "99+" : wishlistCount}
                </span>
              )}
            </Button>

            <Button
              type="button"
              size="icon"
              variant="ghost"
              aria-label={`Shopping cart${
                cartCount > 0 ? `, ${cartCount} items` : ""
              }`}
              className={marketplaceHeaderStyles.actionButton}
              onClick={handleCartClick}
            >
              <ShoppingCart className="h-5 w-5" />

              {cartCount > 0 && (
                <span className={marketplaceHeaderStyles.badge}>
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Button>

            <Button
              type="button"
              size="icon"
              variant="ghost"
              aria-label="Account"
              className={marketplaceHeaderStyles.actionButton}
            >
              <UserRound className="h-5 w-5" />
            </Button>

            <ThemeToggle />
          </div>
        </div>

        <MobileNavigation
          open={mobileMenuOpen}
          onOpenChange={setMobileMenuOpen}
        />
      </div>
    </header>
  );
};

export default MarketplaceHeader;
