import { useState } from "react";

import { ImageOff } from "lucide-react";

import { cn } from "@/utils/cn";

import { productGalleryStyles } from "./ProductGallery.styles";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

const ProductGallery = ({ images, productName }: ProductGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(images[0] ?? "");

  const [imageError, setImageError] = useState(false);

  const handleSelectImage = (image: string) => {
    setSelectedImage(image);
    setImageError(false);
  };

  if (!selectedImage || imageError) {
    return (
      <div className={productGalleryStyles.mainWrapper}>
        <div className={productGalleryStyles.fallback}>
          <div className="flex flex-col items-center gap-2">
            <ImageOff className="h-7 w-7" />
            <span className="text-sm">Image unavailable</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={productGalleryStyles.root}>
      {images.length > 1 && (
        <div className={productGalleryStyles.thumbnails}>
          {images.map((image, index) => {
            const isActive = image === selectedImage;

            return (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => handleSelectImage(image)}
                aria-label={`View ${productName} image ${index + 1}`}
                aria-pressed={isActive}
                className={cn(
                  productGalleryStyles.thumbnailButton,
                  isActive && productGalleryStyles.activeThumbnail,
                )}
              >
                <img
                  src={image}
                  alt={`${productName} thumbnail ${index + 1}`}
                  loading="lazy"
                  className={productGalleryStyles.thumbnailImage}
                />
              </button>
            );
          })}
        </div>
      )}

      <div className={productGalleryStyles.mainWrapper}>
        <img
          src={selectedImage}
          alt={productName}
          className={productGalleryStyles.mainImage}
          onError={() => setImageError(true)}
        />
      </div>
    </div>
  );
};

export default ProductGallery;
