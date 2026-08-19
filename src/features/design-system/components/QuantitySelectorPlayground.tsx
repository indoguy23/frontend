import { useState } from "react";

import QuantitySelector from "@/components/common/QuantitySelector";
import Card from "@/components/ui/Card";

const QuantitySelectorPlayground = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Quantity Selector
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable quantity controls for products, carts and marketplace
          ordering.
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Card>
          <h3 className="font-semibold text-foreground">Default</h3>

          <div className="mt-5">
            <QuantitySelector
              value={quantity}
              onChange={setQuantity}
              min={1}
              max={10}
            />
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Current quantity: {quantity}
          </p>
        </Card>

        <Card>
          <h3 className="font-semibold text-foreground">Small</h3>

          <div className="mt-5">
            <QuantitySelector
              value={quantity}
              onChange={setQuantity}
              min={1}
              max={10}
              size="sm"
            />
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold text-foreground">Maximum Reached</h3>

          <div className="mt-5">
            <QuantitySelector value={5} onChange={() => {}} min={1} max={5} />
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold text-foreground">Disabled</h3>

          <div className="mt-5">
            <QuantitySelector value={1} onChange={() => {}} disabled />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default QuantitySelectorPlayground;
