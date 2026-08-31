import type { FooterSection } from "./Footer.types";

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Shop",
    links: [
      { label: "Categories", href: "/categories" },
      { label: "Today's Deals", href: "/deals" },
      { label: "New Arrivals", href: "/new-arrivals" },
      { label: "Top Sellers", href: "/sellers" },
    ],
  },
  {
    title: "Customer Service",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Track Order", href: "/orders" },
      { label: "Returns & Refunds", href: "/returns" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Sell on MarketHub",
    links: [
      { label: "Become a Seller", href: "/seller/register" },
      { label: "Seller Dashboard", href: "/seller/dashboard" },
      { label: "Seller Guidelines", href: "/seller/guidelines" },
    ],
  },
];

export const FOOTER_LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];
