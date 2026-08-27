export interface HomeCollection {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export const HOME_COLLECTIONS: HomeCollection[] = [
  {
    id: "collection-tech",
    eyebrow: "Tech Essentials",
    title: "Upgrade Your Setup",
    description: "Explore audio, accessories, smart devices and everyday tech.",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661",
    href: "/collections/tech",
  },
  {
    id: "collection-fashion",
    eyebrow: "Everyday Style",
    title: "Refresh Your Look",
    description: "Discover fashion, footwear and accessories for every day.",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050",
    href: "/collections/fashion",
  },
  {
    id: "collection-home",
    eyebrow: "Home Edit",
    title: "Make Home Feel Better",
    description: "Furniture, kitchen essentials and thoughtful home upgrades.",
    image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a",
    href: "/collections/home",
  },
  {
    id: "collection-fitness",
    eyebrow: "Move Better",
    title: "Fitness Picks",
    description:
      "Gear and essentials built for training, movement and recovery.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    href: "/collections/fitness",
  },
];
