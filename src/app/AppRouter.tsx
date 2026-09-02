import { Route, Routes } from "react-router-dom";

import NotFoundPage from "../components/feedback/NotFoundPage";
import LoginPage from "../features/auth/pages/LoginPage";
import CartPage from "../features/cart/pages/CartPage";
import HomePage from "../features/home/pages/HomePage";
import ProductsPage from "../features/products/pages/ProductsPage";

import DesignSystemPage from "@/features/design-system/pages/DesignSystemPage";
import MarketplaceLayout from "@/layouts/MarketplaceLayout";

import { ROUTES } from "./route";
import ProductDetailsPage from "@/features/products/pages/ProductDetailsPage";

const AppRouter = () => {
  return (
    <Routes>
      {/* Marketplace */}
      <Route element={<MarketplaceLayout />}>
        <Route path={ROUTES.HOME} element={<HomePage />} />

        <Route path={ROUTES.PRODUCTS} element={<ProductsPage />} />

        <Route path={ROUTES.PRODUCT_DETAILS} element={<ProductDetailsPage />} />

        <Route path={ROUTES.CART} element={<CartPage />} />
      </Route>

      {/* Authentication */}
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />

      {/* Development Design System */}
      <Route path={ROUTES.DESIGN_SYSTEM} element={<DesignSystemPage />} />

      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
