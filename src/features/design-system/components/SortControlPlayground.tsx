import { useState } from "react";

import SortControl from "@/components/common/SortControl";
import Card from "@/components/ui/Card";

import { PRODUCT_SORT_OPTIONS } from "../data/sortControl.data";

const SortControlPlayground = () => {
  const [sortBy, setSortBy] = useState("featured");

  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Sort Control
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable sorting control for products, orders, reviews and marketplace
          listings.
        </p>
      </div>

      <div className="mt-8 max-w-2xl">
        <Card>
          <div className="space-y-5">
            <SortControl
              value={sortBy}
              options={PRODUCT_SORT_OPTIONS}
              onChange={setSortBy}
            />

            <div className="rounded-xl bg-muted p-4">
              <p className="text-sm text-muted-foreground">Selected sort</p>

              <p className="mt-1 font-medium text-foreground">{sortBy}</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SortControlPlayground;
