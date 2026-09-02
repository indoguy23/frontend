import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { slug } = useParams<{ slug: string }>();
  return (
    <main className="min-h-screen">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <h1 className="text-2xl font-semibold">Product Details</h1>
        <p className="mt-2 text-muted-foreground">Product slug: {slug}</p>
      </div>
    </main>
  );
};

export default ProductDetailsPage;
