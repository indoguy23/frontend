import { useNavigate, useParams } from "react-router-dom";

import Button from "@/components/ui/Button";

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

  return (
    <main className="min-h-screen">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <p className="text-sm text-muted-foreground">{product.category}</p>

        <h1 className="mt-2 text-2xl font-semibold sm:text-3xl">
          {product.name}
        </h1>

        <p className="mt-4">{product.description}</p>
      </div>
    </main>
  );
};

export default ProductDetailsPage;
