import { useState } from "react";

import { ProductsHeader } from "../components/ProductsHeader";
import {
  ProductsToolbar,
  type ProductSortValue,
} from "../components/ProductsToolbar";

const ProductsPage = () => {
  const [sortBy, setSortBy] = useState<ProductSortValue>("featured");

  const productCount = 128;

  const handleFilterClick = () => {
    // Mobile filter dialog will be connected next.
  };

  return (
    <main className="min-h-screen">
      <div
        className={[
          "mx-auto",
          "w-full",
          "max-w-7xl",
          "px-4",
          "py-6",
          "sm:px-6",
          "sm:py-8",
          "lg:px-8",
        ].join(" ")}
      >
        <ProductsHeader productCount={productCount} />

        <ProductsToolbar
          sortBy={sortBy}
          onSortChange={setSortBy}
          onFilterClick={handleFilterClick}
        />

        {/* Product Filters + Grid */}
        {/* Pagination */}
      </div>
    </main>
  );
};

export default ProductsPage;
