import { productsHeaderStyles } from "./ProductsHeader.styles";

interface ProductsHeaderProps {
  productCount: number;
}

const ProductsHeader = ({ productCount }: ProductsHeaderProps) => {
  return (
    <div className={productsHeaderStyles.root}>
      <div className={productsHeaderStyles.content}>
        <p className={productsHeaderStyles.eyebrow}>Explore MarketHub</p>

        <h1 className={productsHeaderStyles.title}>Products</h1>

        <p className={productsHeaderStyles.description}>
          Discover products from trusted sellers across the marketplace.
        </p>
      </div>

      <p className={productsHeaderStyles.count}>
        {productCount} {productCount === 1 ? "product" : "products"}
      </p>
    </div>
  );
};

export default ProductsHeader;
