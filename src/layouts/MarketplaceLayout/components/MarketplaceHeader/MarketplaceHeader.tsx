import { useState } from "react";
import { Heart, Menu, ShoppingCart, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import SearchBar from "@/components/common/SearchBar";
import ThemeToggle from "@/components/common/ThemeToggle";
import Button from "@/components/ui/Button";

import { marketplaceHeaderStyles } from "./MarketplaceHeader.styles";
import MobileNavigation from "../MobileNavigation";

const MarketplaceHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
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
            >
              <Heart className="h-5 w-5" />
            </Button>

            <Button
              type="button"
              size="icon"
              variant="ghost"
              aria-label="Shopping cart"
              className={marketplaceHeaderStyles.actionButton}
            >
              <ShoppingCart className="h-5 w-5" />

              <span className={marketplaceHeaderStyles.badge}>2</span>
            </Button>

            <ThemeToggle />
          </div>
        </div>

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
            >
              <Heart className="h-5 w-5" />
            </Button>

            <Button
              type="button"
              size="icon"
              variant="ghost"
              aria-label="Shopping cart"
              className={marketplaceHeaderStyles.actionButton}
            >
              <ShoppingCart className="h-5 w-5" />

              <span className={marketplaceHeaderStyles.badge}>2</span>
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
