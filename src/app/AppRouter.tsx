import { Route, Routes } from "react-router-dom";

import NotFoundPage from "../components/feedback/NotFoundPage";

import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import ForgotPasswordPage from "@/features/auth/pages/ForgotPasswordPage";
import ProtectedRoute from "@/features/auth/components/ProtectedRoute";

import CartPage from "../features/cart/pages/CartPage";
import HomePage from "../features/home/pages/HomePage";
import ProductsPage from "../features/products/pages/ProductsPage";

import DesignSystemPage from "@/features/design-system/pages/DesignSystemPage";
import OrderDetailsPage from "@/features/orders/pages/OrderDetailsPage";
import OrderSuccessPage from "@/features/orders/pages/OrderSuccessPage";
import OrdersPage from "@/features/orders/pages/OrdersPage";
import ProductDetailsPage from "@/features/products/pages/ProductDetailsPage";
import WishlistPage from "@/features/wishlist/pages/WishlistPage";
import CheckoutPage from "@/features/checkout/components/pages/CheckoutPage";

import MarketplaceLayout from "@/layouts/MarketplaceLayout";

import { ROUTES } from "./route";

const AppRouter = () => {
  return (
    <Routes>
      {/* Public authentication pages */}
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />

      {/* Public marketplace pages */}
      <Route element={<MarketplaceLayout />}>
        <Route path={ROUTES.PRODUCTS} element={<ProductsPage />} />
        <Route path={ROUTES.PRODUCT_DETAILS} element={<ProductDetailsPage />} />

        {/* Protected marketplace pages */}
        <Route element={<ProtectedRoute />}>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.CART} element={<CartPage />} />
          <Route path={ROUTES.WISHLIST} element={<WishlistPage />} />
          <Route path={ROUTES.CHECKOUT} element={<CheckoutPage />} />
          <Route path={ROUTES.ORDERS} element={<OrdersPage />} />
          <Route path={ROUTES.ORDERS_SUCCESS} element={<OrderSuccessPage />} />
          <Route path="/orders/:orderId" element={<OrderDetailsPage />} />
        </Route>
      </Route>

      {/* Development Design System */}
      <Route path={ROUTES.DESIGN_SYSTEM} element={<DesignSystemPage />} />

      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
