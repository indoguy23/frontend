import { useMemo, useState } from "react";

import { ImageOff } from "lucide-react";

import { cn } from "@/utils/cn";

import { productImageGalleryStyles } from "./ProductImageGallery.styles";
import type { ProductImageGalleryProps } from "./ProductImageGallery.types";

const ProductImageGallery = ({
  images,
  initialImageId,
  className,
}: ProductImageGalleryProps) => {
  const firstImageId = initialImageId ?? images[0]?.id ?? "";

  const [selectedImageId, setSelectedImageId] = useState(firstImageId);

  const [failedImages, setFailedImages] = useState<Set<string>>(
    () => new Set(),
  );

  const selectedImage = useMemo(
    () => images.find((image) => image.id === selectedImageId) ?? images[0],
    [images, selectedImageId],
  );

  const handleImageError = (imageId: string) => {
    setFailedImages((current) => {
      const next = new Set(current);

      next.add(imageId);

      return next;
    });
  };

  if (images.length === 0) {
    return (
      <div className={cn(productImageGalleryStyles.main, className)}>
        <div className={productImageGalleryStyles.fallback}>
          <div className="flex flex-col items-center gap-2">
            <ImageOff className="h-7 w-7" />

            <span className="text-sm">No product images</span>
          </div>
        </div>
      </div>
    );
  }

  const selectedImageFailed = selectedImage
    ? failedImages.has(selectedImage.id)
    : true;

  return (
    <div className={cn(productImageGalleryStyles.root, className)}>
      <div className={productImageGalleryStyles.thumbnails}>
        {images.map((image) => {
          const isActive = image.id === selectedImage?.id;

          const hasFailed = failedImages.has(image.id);

          return (
            <button
              key={image.id}
              type="button"
              aria-label={`View ${image.alt}`}
              aria-pressed={isActive}
              className={cn(
                productImageGalleryStyles.thumbnailButton,
                isActive && productImageGalleryStyles.activeThumbnail,
              )}
              onClick={() => setSelectedImageId(image.id)}
            >
              {hasFailed ? (
                <div className="flex h-20 w-20 items-center justify-center text-muted-foreground">
                  <ImageOff className="h-5 w-5" />
                </div>
              ) : (
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className={productImageGalleryStyles.thumbnailImage}
                  onError={() => handleImageError(image.id)}
                />
              )}
            </button>
          );
        })}
      </div>

      <div className={productImageGalleryStyles.main}>
        {selectedImage && !selectedImageFailed ? (
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className={productImageGalleryStyles.mainImage}
            onError={() => handleImageError(selectedImage.id)}
          />
        ) : (
          <div className={productImageGalleryStyles.fallback}>
            <div className="flex flex-col items-center gap-2">
              <ImageOff className="h-7 w-7" />

              <span className="text-sm">Image unavailable</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductImageGallery;
