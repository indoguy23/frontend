import { useState } from "react";

import { PackagePlus, Trash2 } from "lucide-react";

import Alert from "@/components/ui/Alert";
import Button from "@/components/ui/Button";
import Dialog from "@/components/ui/Dialog";
import Form from "@/components/ui/form/Form";
import FormField from "@/components/ui/form/FormField";
import Input from "@/components/ui/form/Input";
import Select from "@/components/ui/form/Select";
import Textarea from "@/components/ui/form/Textarea";
import { CATEGORY_OPTIONS, STATUS_OPTIONS } from "@/constants/selectOptions";

const DialogPlayground = () => {
  const [controlledOpen, setControlledOpen] = useState(false);

  const handleCreateProduct = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    console.log("Product values:", Object.fromEntries(formData.entries()));

    setControlledOpen(false);
  };

  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Dialog Component
        </h2>

        <p className="mt-2 text-muted-foreground">
          Accessible modal windows for confirmations, forms, details and focused
          workflows.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        {/* Basic dialog */}

        <Dialog>
          <Dialog.Trigger asChild>
            <Button variant="outline">Open Basic Dialog</Button>
          </Dialog.Trigger>

          <Dialog.Content size="sm">
            <Dialog.Header>
              <Dialog.Title>Marketplace Information</Dialog.Title>

              <Dialog.Description>
                This is a reusable dialog using MarketHub semantic design
                tokens.
              </Dialog.Description>
            </Dialog.Header>

            <Dialog.Body>
              <Alert
                variant="info"
                title="Dialog content"
                description="You can render text, forms, lists or other components here."
              />
            </Dialog.Body>

            <Dialog.Footer>
              <Dialog.Close asChild>
                <Button variant="outline">Close</Button>
              </Dialog.Close>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog>

        {/* Destructive confirmation */}

        <Dialog>
          <Dialog.Trigger asChild>
            <Button
              variant="destructive"
              leftIcon={<Trash2 className="h-4 w-4" />}
            >
              Delete Product
            </Button>
          </Dialog.Trigger>

          <Dialog.Content size="sm">
            <Dialog.Header>
              <Dialog.Title>Delete product?</Dialog.Title>

              <Dialog.Description>
                This action cannot be undone. The product will be permanently
                removed.
              </Dialog.Description>
            </Dialog.Header>

            <Dialog.Body>
              <Alert
                variant="destructive"
                title="Permanent action"
                description="Orders containing this product will keep their historical information."
              />
            </Dialog.Body>

            <Dialog.Footer>
              <Dialog.Close asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.Close>

              <Dialog.Close asChild>
                <Button variant="destructive">Delete Permanently</Button>
              </Dialog.Close>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog>

        {/* Controlled form dialog */}

        <Dialog open={controlledOpen} onOpenChange={setControlledOpen}>
          <Dialog.Trigger asChild>
            <Button leftIcon={<PackagePlus className="h-4 w-4" />}>
              Add Product
            </Button>
          </Dialog.Trigger>

          <Dialog.Content size="lg">
            <Dialog.Header>
              <Dialog.Title>Create Product</Dialog.Title>

              <Dialog.Description>
                Add the basic product information. More inventory fields will be
                added later.
              </Dialog.Description>
            </Dialog.Header>

            <Dialog.Body>
              <Form
                id="createProductForm"
                spacing="lg"
                onSubmit={handleCreateProduct}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    label="Product Name"
                    required
                    htmlFor="dialogProductName"
                  >
                    <Input
                      id="dialogProductName"
                      name="name"
                      placeholder="Wireless Headphones"
                      required
                    />
                  </FormField>

                  <FormField
                    label="Category"
                    required
                    htmlFor="dialogProductCategory"
                  >
                    <Select
                      id="dialogProductCategory"
                      name="category"
                      options={CATEGORY_OPTIONS}
                      placeholder="Select category"
                      required
                    />
                  </FormField>

                  <FormField label="Status" htmlFor="dialogProductStatus">
                    <Select
                      id="dialogProductStatus"
                      name="status"
                      options={STATUS_OPTIONS}
                      placeholder="Select status"
                    />
                  </FormField>

                  <FormField
                    label="Price"
                    required
                    htmlFor="dialogProductPrice"
                  >
                    <Input
                      id="dialogProductPrice"
                      name="price"
                      type="number"
                      min="0"
                      step="0.01"
                      placeholder="4999"
                      required
                    />
                  </FormField>
                </div>

                <FormField
                  label="Description"
                  htmlFor="dialogProductDescription"
                >
                  <Textarea
                    id="dialogProductDescription"
                    name="description"
                    placeholder="Describe the product..."
                  />
                </FormField>
              </Form>
            </Dialog.Body>

            <Dialog.Footer>
              <Dialog.Close asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.Close>

              <Button type="submit" form="createProductForm">
                Create Product
              </Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog>
      </div>
    </section>
  );
};

export default DialogPlayground;
