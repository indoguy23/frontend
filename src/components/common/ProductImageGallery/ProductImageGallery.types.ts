export interface ProductGalleryImage {
  id: string;
  src: string;
  alt: string;
}

export interface ProductImageGalleryProps {
  images: ProductGalleryImage[];

  initialImageId?: string;

  className?: string;
}
