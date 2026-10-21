import { useEffect, useRef, useState } from "react";
import { Heart, LogOut, Menu, ShoppingCart, UserRound } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import SearchBar from "@/components/common/SearchBar";
import ThemeToggle from "@/components/common/ThemeToggle";
import Button from "@/components/ui/Button";
import { useCart } from "@/features/cart/hooks/useCart";
import { useWishlist } from "@/features/wishlist/hooks/useWishlist";
import {
  clearDemoSession,
  getDemoSession,
  type DemoSession,
} from "@/features/auth/utils/demoAuth";

import MobileNavigation from "../MobileNavigation";
import { marketplaceHeaderStyles } from "./MarketplaceHeader.styles";

const MarketplaceHeader = () => {
  const navigate = useNavigate();
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [userSession, setUserSession] = useState<DemoSession | null>(
    getDemoSession,
  );

  const mobileAccountMenuRef = useRef<HTMLDivElement>(null);
  const desktopAccountMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!accountMenuOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;

      const insideMobileMenu =
        mobileAccountMenuRef.current?.contains(target) ?? false;

      const insideDesktopMenu =
        desktopAccountMenuRef.current?.contains(target) ?? false;

      if (!insideMobileMenu && !insideDesktopMenu) {
        setAccountMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setAccountMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [accountMenuOpen]);

  const handleCartClick = () => {
    navigate("/cart");
  };

  const handleWishlistClick = () => {
    navigate("/wishlist");
  };

  const handleSearch = (searchTerm: string) => {
    const trimmedSearch = searchTerm.trim();

    if (!trimmedSearch) return;

    navigate(`/products?search=${encodeURIComponent(trimmedSearch)}`);
  };

  const handleSignOut = () => {
    clearDemoSession();

    setUserSession(null);
    setAccountMenuOpen(false);
    setMobileMenuOpen(false);

    navigate("/login", { replace: true });
  };

  const handleSignIn = () => {
    setAccountMenuOpen(false);
    setMobileMenuOpen(false);
    navigate("/login");
  };

  const renderAccountMenu = (
    menuRef: React.RefObject<HTMLDivElement | null>,
  ) => (
    <div className="relative" ref={menuRef}>
      <Button
        type="button"
        size="icon"
        variant="ghost"
        aria-label="Account menu"
        aria-expanded={accountMenuOpen}
        aria-haspopup="menu"
        className={marketplaceHeaderStyles.actionButton}
        onClick={() => {
          setUserSession(getDemoSession());
          setAccountMenuOpen((open) => !open);
        }}
      >
        <UserRound className="h-5 w-5" />
      </Button>

      {accountMenuOpen && (
        <div
          className="absolute right-0 top-full z-50 mt-2 w-64 rounded-xl border border-border bg-background p-2 shadow-lg"
          role="menu"
          aria-label="Account options"
        >
          <div className="border-b border-border px-3 py-3">
            <p className="truncate text-sm font-semibold text-foreground">
              {userSession?.fullName || "My Account"}
            </p>

            <p className="mt-1 truncate text-xs text-muted-foreground">
              {userSession?.email || "Not signed in"}
            </p>

            {userSession && (
              <p className="mt-2 text-xs capitalize text-muted-foreground">
                Role: {userSession.role}
              </p>
            )}

            {userSession?.storeName && (
              <p className="mt-1 truncate text-xs text-muted-foreground">
                Store: {userSession.storeName}
              </p>
            )}
          </div>

          {userSession ? (
            <button
              type="button"
              role="menuitem"
              onClick={handleSignOut}
              className="mt-1 flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-destructive transition-colors hover:bg-destructive/10"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </button>
          ) : (
            <button
              type="button"
              role="menuitem"
              onClick={handleSignIn}
              className="mt-1 flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-foreground transition-colors hover:bg-muted"
            >
              <UserRound className="h-4 w-4" />
              Sign In
            </button>
          )}
        </div>
      )}
    </div>
  );

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

            {renderAccountMenu(mobileAccountMenuRef)}

            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Search */}
        <div className={marketplaceHeaderStyles.mobileSearch}>
          <SearchBar
            value={searchValue}
            onChange={setSearchValue}
            onSearch={handleSearch}
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
              onSearch={handleSearch}
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

            {renderAccountMenu(desktopAccountMenuRef)}

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
