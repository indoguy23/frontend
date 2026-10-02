export const ROUTES = {
  HOME: "/",

  PRODUCTS: "/products",
  PRODUCT_DETAILS: "/products/:slug",

  CART: "/cart",
  WISHLIST: "/wishlist",
  CHECKOUT: "/checkout",
  ORDERS: "/orders",
  ORDERS_SUCCESS: "/orders/success",

  LOGIN: "/login",
  REGISTER: "/register",

  VENDOR_DASHBOARD: "/vendor",
  ADMIN_DASHBOARD: "/admin",

  DESIGN_SYSTEM: "/design-system",
} as const;
