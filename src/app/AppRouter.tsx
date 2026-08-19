import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./route";
import HomePage from "../features/home/pages/HomePage";
import ProductsPage from "../features/products/pages/ProductsPage";
import CartPage from "../features/cart/pages/CartPage";
import LoginPage from "../features/auth/pages/LoginPage";
import NotFoundPage from "../components/feedback/NotFoundPage";
import DesignSystemPage from "@/features/design-system/pages/DesignSystemPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />

      <Route path={ROUTES.PRODUCTS} element={<ProductsPage />} />

      <Route path={ROUTES.CART} element={<CartPage />} />

      <Route path={ROUTES.LOGIN} element={<LoginPage />} />

      <Route path="*" element={<NotFoundPage />} />

      <Route path={ROUTES.DESIGN_SYSTEM} element={<DesignSystemPage />} />
    </Routes>
  );
};

export default AppRouter;
