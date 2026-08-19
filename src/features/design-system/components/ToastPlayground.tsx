import Button from "@/components/ui/Button";
import { showToast } from "@/components/ui/Toast";

const simulateProductCreation = () => {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Product created");
    }, 2000);
  });
};

const ToastPlayground = () => {
  const handleImageUpload = () => {
    const toastId = showToast.loading("Uploading image...");

    setTimeout(() => {
      showToast.dismiss(toastId);
      showToast.success("Upload completed successfully.");
    }, 3000);
  };

  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Toast Component
        </h2>

        <p className="mt-2 text-muted-foreground">
          Temporary feedback for successful, failed and ongoing actions.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Button
          onClick={() =>
            showToast.success("Product added to cart successfully.")
          }
        >
          Success
        </Button>

        <Button
          variant="destructive"
          onClick={() => showToast.error("Unable to delete product.")}
        >
          Error
        </Button>

        <Button
          variant="secondary"
          onClick={() => showToast.warning("Inventory is running low.")}
        >
          Warning
        </Button>

        <Button
          variant="outline"
          onClick={() =>
            showToast.info("A new marketplace update is available.")
          }
        >
          Info
        </Button>

        <Button
          onClick={() =>
            showToast.promise(simulateProductCreation(), {
              loading: "Creating product...",
              success: "Product created successfully.",
              error: "Unable to create product.",
            })
          }
        >
          Promise Toast
        </Button>

        <Button variant="outline" onClick={handleImageUpload}>
          Loading Toast
        </Button>
      </div>
    </section>
  );
};

export default ToastPlayground;
