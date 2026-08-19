export interface CategoryCardData {
  id: string;

  name: string;

  slug: string;

  description?: string;

  image?: string;

  productCount?: number;

  featured?: boolean;
}

export interface CategoryCardProps {
  category: CategoryCardData;

  onClick?: (category: CategoryCardData) => void;

  className?: string;
}
