import { useState } from "react";

import RatingInput from "@/components/common/RatingInput";
import Card from "@/components/ui/Card";

const RatingInputPlayground = () => {
  const [rating, setRating] = useState(4);

  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Rating Input
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable interactive star rating for product and seller reviews.
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Card>
          <h3 className="font-semibold text-foreground">Interactive</h3>

          <div className="mt-5">
            <RatingInput
              value={rating}
              onChange={setRating}
              label="Your rating"
            />
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Selected rating:{" "}
            <strong className="text-foreground">{rating}</strong>
          </p>
        </Card>

        <Card>
          <h3 className="font-semibold text-foreground">Large</h3>

          <div className="mt-5">
            <RatingInput value={rating} onChange={setRating} size="lg" />
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold text-foreground">Small</h3>

          <div className="mt-5">
            <RatingInput value={rating} onChange={setRating} size="sm" />
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold text-foreground">Disabled</h3>

          <div className="mt-5">
            <RatingInput value={3} onChange={() => {}} disabled />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default RatingInputPlayground;
