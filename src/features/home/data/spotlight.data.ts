export interface SpotlightItem {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  priceLabel?: string;
  actionLabel?: string;
}

export const SPOTLIGHT_ITEMS: SpotlightItem[] = [
  {
    id: "spotlight-1",
    eyebrow: "Premium Audio",
    title: "Sound that changes how you listen.",
    description:
      "Discover premium headphones and speakers designed for immersive everyday listening.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    priceLabel: "Starting from ₹4,999",
    actionLabel: "Explore Audio",
  },
  {
    id: "spotlight-2",
    eyebrow: "Smart Living",
    title: "Technology built around your day.",
    description:
      "Explore smart watches and connected products that make everyday routines easier.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    priceLabel: "Starting from ₹7,999",
    actionLabel: "Explore Smart Tech",
  },
  {
    id: "spotlight-3",
    eyebrow: "Everyday Style",
    title: "Carry more. Travel better.",
    description:
      "Modern backpacks and everyday accessories designed for work, travel and life.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    priceLabel: "Starting from ₹2,499",
    actionLabel: "Explore Collection",
  },
];
