import { useState } from "react";

import FileUpload from "@/components/common/FileUpload";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { showToast } from "@/components/ui/Toast";

const FileUploadPlayground = () => {
  const [productImage, setProductImage] = useState<File | null>(null);

  const [document, setDocument] = useState<File | null>(null);

  const handleUpload = () => {
    if (!productImage) {
      showToast.error("Please select a product image.");

      return;
    }

    showToast.success(`${productImage.name} is ready for upload.`);
  };

  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          FileUpload Component
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable drag-and-drop uploads for products, documents and marketplace
          profiles.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card>
          <h3 className="font-semibold text-foreground">Product Image</h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Image upload with preview and file-size validation.
          </p>

          <div className="mt-6">
            <FileUpload
              value={productImage}
              onChange={setProductImage}
              accept="image/png,image/jpeg,image/webp"
              maxSize={5 * 1024 * 1024}
              label="Upload product image"
              helperText="PNG, JPEG or WebP. Maximum 5 MB."
            />
          </div>

          <Button
            className="mt-5"
            disabled={!productImage}
            onClick={handleUpload}
          >
            Upload Image
          </Button>
        </Card>

        <Card>
          <h3 className="font-semibold text-foreground">Document Upload</h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Example for vendor documents and verification files.
          </p>

          <div className="mt-6">
            <FileUpload
              value={document}
              onChange={setDocument}
              accept=".pdf,.doc,.docx"
              maxSize={10 * 1024 * 1024}
              label="Upload document"
              helperText="PDF, DOC or DOCX. Maximum 10 MB."
            />
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold text-foreground">Loading State</h3>

          <div className="mt-6">
            <FileUpload
              value={null}
              onChange={() => {}}
              loading
              label="Uploading file"
            />
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold text-foreground">Disabled State</h3>

          <div className="mt-6">
            <FileUpload
              value={null}
              onChange={() => {}}
              disabled
              label="Upload unavailable"
            />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FileUploadPlayground;
