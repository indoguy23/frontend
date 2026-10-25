import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import NotFoundPage from "../components/feedback/NotFoundPage";

import ProtectedRoute from "@/features/auth/components/ProtectedRoute";
import RoleProtectedRoute from "@/features/auth/components/RoleProtectedRoute";

import MarketplaceLayout from "@/layouts/MarketplaceLayout";

import { ROUTES } from "./route";

// Authentication pages
const LoginPage = lazy(() => import("@/features/auth/pages/LoginPage"));
const RegisterPage = lazy(() => import("@/features/auth/pages/RegisterPage"));
const ForgotPasswordPage = lazy(
  () => import("@/features/auth/pages/ForgotPasswordPage"),
);

// Marketplace pages
const CartPage = lazy(() => import("@/features/cart/pages/CartPage"));
const HomePage = lazy(() => import("@/features/home/pages/HomePage"));
const ProductsPage = lazy(
  () => import("@/features/products/pages/ProductsPage"),
);
const ProductDetailsPage = lazy(
  () => import("@/features/products/pages/ProductDetailsPage"),
);
const WishlistPage = lazy(
  () => import("@/features/wishlist/pages/WishlistPage"),
);

// Checkout pages
const CheckoutPage = lazy(
  () => import("@/features/checkout/components/pages/CheckoutPage"),
);

// Order pages
const OrderDetailsPage = lazy(
  () => import("@/features/orders/pages/OrderDetailsPage"),
);
const OrderSuccessPage = lazy(
  () => import("@/features/orders/pages/OrderSuccessPage"),
);
const OrdersPage = lazy(() => import("@/features/orders/pages/OrdersPage"));

// Development page
const DesignSystemPage = lazy(
  () => import("@/features/design-system/pages/DesignSystemPage"),
);

const AppRouter = () => {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-sm text-gray-500">Loading page...</p>
        </div>
      }
    >
      <Routes>
        {/* Public authentication pages */}
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
        <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />

        {/* Public marketplace pages */}
        <Route element={<MarketplaceLayout />}>
          <Route path={ROUTES.PRODUCTS} element={<ProductsPage />} />
          <Route
            path={ROUTES.PRODUCT_DETAILS}
            element={<ProductDetailsPage />}
          />

          {/* Authenticated marketplace pages */}
          <Route element={<ProtectedRoute />}>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.CART} element={<CartPage />} />
            <Route path={ROUTES.WISHLIST} element={<WishlistPage />} />
            <Route path={ROUTES.CHECKOUT} element={<CheckoutPage />} />
            <Route path={ROUTES.ORDERS} element={<OrdersPage />} />
            <Route
              path={ROUTES.ORDERS_SUCCESS}
              element={<OrderSuccessPage />}
            />
            <Route path="/orders/:orderId" element={<OrderDetailsPage />} />
          </Route>

          {/* Admin-only pages */}
          <Route element={<RoleProtectedRoute allowedRoles={["admin"]} />}>
            {/* Add admin dashboard and management routes here */}
          </Route>

          {/* Vendor-only pages */}
          <Route element={<RoleProtectedRoute allowedRoles={["vendor"]} />}>
            {/* Add vendor dashboard and store management routes here */}
          </Route>

          {/* Customer-only pages */}
          <Route element={<RoleProtectedRoute allowedRoles={["customer"]} />}>
            {/* Add customer-specific routes here */}
          </Route>
        </Route>

        {/* Development Design System */}
        <Route path={ROUTES.DESIGN_SYSTEM} element={<DesignSystemPage />} />

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
