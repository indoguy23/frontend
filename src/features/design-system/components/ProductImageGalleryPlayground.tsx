import ProductImageGallery from "@/components/common/ProductImageGallery";

import { PRODUCT_GALLERY_IMAGES } from "../data/productGallery.data";

const ProductImageGalleryPlayground = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Product Image Gallery
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable image gallery for product details and marketplace previews.
        </p>
      </div>

      <div className="mt-8 max-w-3xl">
        <ProductImageGallery images={PRODUCT_GALLERY_IMAGES} />
      </div>
    </section>
  );
};

export default ProductImageGalleryPlayground;
