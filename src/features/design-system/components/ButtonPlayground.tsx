import { ArrowRight, ShoppingBag, Trash2 } from "lucide-react";

import Button from "@/components/ui/Button";

const ButtonPlayground = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Button Component
        </h2>

        <p className="mt-2 text-muted-foreground">
          Available button variants, states, sizes and icon support.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Button leftIcon={<ShoppingBag className="h-4 w-4" />}>Shop Now</Button>

        <Button
          variant="secondary"
          rightIcon={<ArrowRight className="h-4 w-4" />}
        >
          Become Vendor
        </Button>

        <Button variant="outline">View Details</Button>

        <Button variant="ghost">Cancel</Button>

        <Button variant="destructive" leftIcon={<Trash2 className="h-4 w-4" />}>
          Delete Product
        </Button>

        <Button loading>Processing</Button>

        <Button
          size="icon"
          variant="outline"
          aria-label="Open shopping bag"
          title="Open shopping bag"
        >
          <ShoppingBag className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default ButtonPlayground;
