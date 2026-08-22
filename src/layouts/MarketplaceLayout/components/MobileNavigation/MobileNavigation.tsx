import {
  CircleHelp,
  Heart,
  Home,
  LayoutGrid,
  LogIn,
  Package,
  ShoppingCart,
  Store,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";

import Dialog from "@/components/ui/Dialog";

import { mobileNavigationStyles } from "./MobileNavigation.styles";

interface MobileNavigationProps {
  open: boolean;

  onOpenChange: (open: boolean) => void;
}

const MobileNavigation = ({ open, onOpenChange }: MobileNavigationProps) => {
  const handleNavigate = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <Dialog.Content
        showCloseButton
        className={mobileNavigationStyles.content}
      >
        <Dialog.Header>
          <Dialog.Title className={mobileNavigationStyles.brand}>
            MarketHub
          </Dialog.Title>

          <Dialog.Description className="sr-only">
            Marketplace navigation menu
          </Dialog.Description>
        </Dialog.Header>

        <Dialog.Body className={mobileNavigationStyles.body}>
          <div>
            <p className={mobileNavigationStyles.sectionTitle}>Marketplace</p>

            <nav className={mobileNavigationStyles.nav}>
              <Link
                to="/"
                className={mobileNavigationStyles.link}
                onClick={handleNavigate}
              >
                <Home className={mobileNavigationStyles.icon} />
                Home
              </Link>

              <Link
                to="/categories"
                className={mobileNavigationStyles.link}
                onClick={handleNavigate}
              >
                <LayoutGrid className={mobileNavigationStyles.icon} />
                Categories
              </Link>

              <Link
                to="/products"
                className={mobileNavigationStyles.link}
                onClick={handleNavigate}
              >
                <Package className={mobileNavigationStyles.icon} />
                Products
              </Link>

              <Link
                to="/wishlist"
                className={mobileNavigationStyles.link}
                onClick={handleNavigate}
              >
                <Heart className={mobileNavigationStyles.icon} />
                Wishlist
              </Link>

              <Link
                to="/cart"
                className={mobileNavigationStyles.link}
                onClick={handleNavigate}
              >
                <ShoppingCart className={mobileNavigationStyles.icon} />
                Cart
              </Link>
            </nav>
          </div>

          <div>
            <p className={mobileNavigationStyles.sectionTitle}>Account</p>

            <nav className={mobileNavigationStyles.nav}>
              <Link
                to="/account"
                className={mobileNavigationStyles.link}
                onClick={handleNavigate}
              >
                <UserRound className={mobileNavigationStyles.icon} />
                My Account
              </Link>

              <Link
                to="/orders"
                className={mobileNavigationStyles.link}
                onClick={handleNavigate}
              >
                <Package className={mobileNavigationStyles.icon} />
                Orders
              </Link>

              <Link
                to="/login"
                className={mobileNavigationStyles.link}
                onClick={handleNavigate}
              >
                <LogIn className={mobileNavigationStyles.icon} />
                Login
              </Link>
            </nav>
          </div>

          <div>
            <p className={mobileNavigationStyles.sectionTitle}>More</p>

            <nav className={mobileNavigationStyles.nav}>
              <Link
                to="/seller/register"
                className={mobileNavigationStyles.link}
                onClick={handleNavigate}
              >
                <Store className={mobileNavigationStyles.icon} />
                Become a Seller
              </Link>

              <Link
                to="/help"
                className={mobileNavigationStyles.link}
                onClick={handleNavigate}
              >
                <CircleHelp className={mobileNavigationStyles.icon} />
                Help Center
              </Link>
            </nav>
          </div>
        </Dialog.Body>
      </Dialog.Content>
    </Dialog>
  );
};

export default MobileNavigation;
