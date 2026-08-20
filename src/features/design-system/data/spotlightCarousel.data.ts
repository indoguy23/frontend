export interface SpotlightCarouselItem {
  id: string;

  title: string;

  description: string;

  image: string;

  badge?: string;

  price?: string;
}

export const SPOTLIGHT_CAROUSEL_DATA: SpotlightCarouselItem[] = [
  {
    id: "spotlight-1",
    title: "Wireless Noise Cancelling Headphones",
    description:
      "Premium audio with immersive noise cancellation and all-day comfort.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    badge: "Best Seller",
    price: "₹4,999",
  },

  {
    id: "spotlight-2",
    title: "Smart Watch",
    description:
      "Track fitness, notifications and daily activity from your wrist.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    badge: "New Arrival",
    price: "₹7,999",
  },

  {
    id: "spotlight-3",
    title: "Travel Backpack",
    description: "Modern everyday backpack for work, travel and adventure.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    badge: "Popular",
    price: "₹2,499",
  },

  {
    id: "spotlight-4",
    title: "Mirrorless Camera",
    description: "Capture detailed photos and cinematic video wherever you go.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    badge: "Featured",
    price: "₹54,999",
  },

  {
    id: "spotlight-5",
    title: "Bluetooth Speaker",
    description: "Portable sound with powerful bass and long battery life.",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
    price: "₹3,499",
  },
];
