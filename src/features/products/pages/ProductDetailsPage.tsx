import { useNavigate, useParams } from "react-router-dom";

import Button from "@/components/ui/Button";

import { ProductGallery } from "../components/ProductDetails/ProductGallery";
import { ProductInfo } from "../components/ProductDetails/ProductInfo";
import { PRODUCTS } from "../data/products.data";

const ProductDetailsPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const product = PRODUCTS.find((item) => item.slug === slug);

  if (!product) {
    return (
      <main className="min-h-screen">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold">Product not found</h1>

          <p className="mt-2 text-muted-foreground">
            The product you're looking for doesn't exist.
          </p>

          <Button
            type="button"
            className="mt-6"
            onClick={() => navigate("/products")}
          >
            Back to Products
          </Button>
        </div>
      </main>
    );
  }

  const galleryImages =
    product.images.length > 0 ? product.images : [product.image];

  return (
    <main className="min-h-screen">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-2 text-sm text-muted-foreground"
        >
          <button
            type="button"
            className="transition-colors hover:text-foreground"
            onClick={() => navigate("/")}
          >
            Home
          </button>

          <span aria-hidden="true">/</span>

          <button
            type="button"
            className="transition-colors hover:text-foreground"
            onClick={() => navigate("/products")}
          >
            Products
          </button>

          <span aria-hidden="true">/</span>

          <span className="truncate text-foreground" aria-current="page">
            {product.name}
          </span>
        </nav>

        {/* Main Product Details */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <ProductGallery images={galleryImages} productName={product.name} />

          <ProductInfo product={product} />
        </div>
      </div>
    </main>
  );
};

export default ProductDetailsPage;
