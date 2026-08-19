import { useState } from "react";

import Checkbox from "@/components/ui/form/Checkbox";

const CheckboxPlayground = () => {
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [selectedItems, setSelectedItems] = useState({
    productA: true,
    productB: false,
    productC: false,
  });

  const selectedCount = Object.values(selectedItems).filter(Boolean).length;

  const allSelected = selectedCount === Object.keys(selectedItems).length;

  const someSelected = selectedCount > 0 && !allSelected;

  const toggleAll = (checked: boolean) => {
    setSelectedItems({
      productA: checked,
      productB: checked,
      productC: checked,
    });
  };

  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Checkbox Component
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable checkbox controls with labels, descriptions, disabled state,
          invalid state and indeterminate support.
        </p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="space-y-5">
          <Checkbox
            label="Accept terms and conditions"
            description="You must accept the terms before creating an account."
            checked={acceptedTerms}
            onChange={(event) => setAcceptedTerms(event.target.checked)}
          />

          <Checkbox
            label="Subscribe to promotional emails"
            description="Receive marketplace offers and vendor updates."
            defaultChecked
          />

          <Checkbox
            label="This option is disabled"
            description="This preference cannot currently be changed."
            disabled
          />

          <Checkbox
            label="Invalid checkbox"
            description="This agreement is required."
            invalid
          />
        </div>

        <div className="rounded-2xl border border-border bg-background p-5">
          <h3 className="font-semibold text-foreground">
            Indeterminate selection
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            Select all products or choose them individually.
          </p>

          <div className="mt-5 space-y-4">
            <Checkbox
              label="Select all products"
              checked={allSelected}
              indeterminate={someSelected}
              onChange={(event) => toggleAll(event.target.checked)}
            />

            <div className="space-y-3 border-l border-border pl-6">
              <Checkbox
                label="Wireless Headphones"
                checked={selectedItems.productA}
                onChange={(event) =>
                  setSelectedItems((current) => ({
                    ...current,
                    productA: event.target.checked,
                  }))
                }
              />

              <Checkbox
                label="Smart Watch"
                checked={selectedItems.productB}
                onChange={(event) =>
                  setSelectedItems((current) => ({
                    ...current,
                    productB: event.target.checked,
                  }))
                }
              />

              <Checkbox
                label="Laptop Stand"
                checked={selectedItems.productC}
                onChange={(event) =>
                  setSelectedItems((current) => ({
                    ...current,
                    productC: event.target.checked,
                  }))
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckboxPlayground;
