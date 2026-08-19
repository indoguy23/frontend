import { useState } from "react";

import FormField from "@/components/ui/form/FormField";
import RadioGroup from "@/components/ui/form/RadioGroup";
import {
  DELIVERY_OPTIONS,
  PAYMENT_METHOD_OPTIONS,
  USER_ROLE_OPTIONS,
} from "@/constants/radioOptions";

const RadioGroupPlayground = () => {
  const [paymentMethod, setPaymentMethod] = useState("upi");

  const [selectedRole, setSelectedRole] = useState("");

  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Radio Group Component
        </h2>

        <p className="mt-2 text-muted-foreground">
          Single-choice selections with controlled, default, disabled and
          invalid states.
        </p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <FormField
          label="Payment Method"
          required
          helperText={`Selected method: ${paymentMethod}`}
        >
          <RadioGroup
            name="paymentMethod"
            options={PAYMENT_METHOD_OPTIONS}
            value={paymentMethod}
            onValueChange={setPaymentMethod}
            required
          />
        </FormField>

        <FormField
          label="Delivery Method"
          helperText="Same-day delivery is currently unavailable."
        >
          <RadioGroup
            name="deliveryMethod"
            options={DELIVERY_OPTIONS}
            defaultValue="standard"
          />
        </FormField>

        <FormField
          label="Account Type"
          required
          error={selectedRole ? undefined : "Please select an account type."}
        >
          <RadioGroup
            name="accountType"
            options={USER_ROLE_OPTIONS}
            value={selectedRole}
            onValueChange={setSelectedRole}
            invalid={!selectedRole}
            orientation="horizontal"
          />
        </FormField>

        <FormField label="Disabled Group">
          <RadioGroup
            name="disabledGroup"
            options={USER_ROLE_OPTIONS}
            defaultValue="customer"
            disabled
          />
        </FormField>
      </div>
    </section>
  );
};

export default RadioGroupPlayground;
