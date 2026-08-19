import { useState } from "react";

import { Heart, Menu, ShoppingCart, X } from "lucide-react";
import { Link } from "react-router-dom";

import SearchBar from "@/components/common/SearchBar";
import ThemeToggle from "@/components/common/ThemeToggle";
import Button from "@/components/ui/Button";
import { cn } from "@/utils/cn";

import { navbarStyles } from "./Navbar.styles";
import type { NavbarProps } from "./Navbar.types";

const Navbar = ({
  links,
  searchValue = "",
  onSearchChange,
  cartCount = 0,
  wishlistCount = 0,
  onCartClick,
  onWishlistClick,
  userMenu,
  className,
}: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={cn(navbarStyles.root, className)}>
      <div className={navbarStyles.container}>
        {/* Brand */}
        <Link to="/" className={navbarStyles.brand}>
          MarketHub
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className={navbarStyles.nav}>
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={navbarStyles.navLink}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop search */}
        <div className={navbarStyles.search}>
          <SearchBar
            value={searchValue}
            onChange={onSearchChange ?? (() => {})}
            placeholder="Search products..."
          />
        </div>

        {/* Actions */}
        <div className={navbarStyles.actions}>
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>

          <div className={navbarStyles.iconWrapper}>
            <Button
              size="icon"
              variant="ghost"
              aria-label="Wishlist"
              onClick={onWishlistClick}
            >
              <Heart className="h-5 w-5" />
            </Button>

            {wishlistCount > 0 && (
              <span className={navbarStyles.count}>
                {wishlistCount > 99 ? "99+" : wishlistCount}
              </span>
            )}
          </div>

          <div className={navbarStyles.iconWrapper}>
            <Button
              size="icon"
              variant="ghost"
              aria-label="Shopping cart"
              onClick={onCartClick}
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>

            {cartCount > 0 && (
              <span className={navbarStyles.count}>
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </div>

          {userMenu}

          <Button
            size="icon"
            variant="ghost"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            className={navbarStyles.mobileButton}
            onClick={() => setMobileOpen((current) => !current)}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile */}
      {mobileOpen && (
        <div className={navbarStyles.mobilePanel}>
          <div className="mb-4 md:hidden">
            <SearchBar
              value={searchValue}
              onChange={onSearchChange ?? (() => {})}
              placeholder="Search products..."
            />
          </div>

          <nav
            aria-label="Mobile navigation"
            className={navbarStyles.mobileNav}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={navbarStyles.mobileLink}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-4 border-t border-border pt-4 sm:hidden">
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
