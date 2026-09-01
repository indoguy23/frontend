import ProductCard from "@/components/common/ProductCard";

import type { ProductCardData } from "@/components/common/ProductCard";

import { productsGridStyles } from "./ProductsGrid.styles";

interface ProductsGridProps {
  products: ProductCardData[];
}

const ProductsGrid = ({ products }: ProductsGridProps) => {
  return (
    <div className={productsGridStyles.root}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
