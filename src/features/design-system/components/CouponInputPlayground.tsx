import { useState } from "react";

import CouponInput from "@/components/common/CouponInput";
import Card from "@/components/ui/Card";

const CouponInputPlayground = () => {
  const [code, setCode] = useState("");

  const [applied, setApplied] = useState(false);

  const [error, setError] = useState("");

  const handleApply = (couponCode: string) => {
    if (couponCode.toUpperCase() !== "SAVE20") {
      setApplied(false);
      setError("Invalid coupon code. Try SAVE20.");

      return;
    }

    setError("");
    setApplied(true);
  };

  const handleRemove = () => {
    setApplied(false);
    setCode("");
    setError("");
  };

  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Coupon Input
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable coupon entry for cart and checkout flows.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card>
          <h3 className="font-semibold text-foreground">Interactive Example</h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Use SAVE20 as the valid demo coupon.
          </p>

          <div className="mt-5">
            <CouponInput
              value={code}
              onChange={(value) => {
                setCode(value);
                setError("");
              }}
              onApply={handleApply}
              onRemove={handleRemove}
              applied={applied}
              error={error}
              successMessage="SAVE20 applied. You saved ₹500."
            />
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold text-foreground">Loading State</h3>

          <div className="mt-5">
            <CouponInput
              value="SAVE20"
              onChange={() => {}}
              onApply={() => {}}
              loading
            />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CouponInputPlayground;
