import StepIndicator from "@/components/common/StepIndicator";
import Card from "@/components/ui/Card";

import {
  CHECKOUT_STEPS,
  VENDOR_ONBOARDING_STEPS,
} from "../data/stepIndicator.data";

const StepIndicatorPlayground = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Step Indicator
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable progress indicators for checkout, onboarding and multi-step
          workflows.
        </p>
      </div>

      <div className="mt-8 space-y-6">
        <Card>
          <h3 className="font-semibold text-foreground">Horizontal</h3>

          <div className="mt-6">
            <StepIndicator steps={CHECKOUT_STEPS} />
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold text-foreground">Vertical</h3>

          <div className="mt-6 max-w-md">
            <StepIndicator
              steps={VENDOR_ONBOARDING_STEPS}
              orientation="vertical"
            />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default StepIndicatorPlayground;
