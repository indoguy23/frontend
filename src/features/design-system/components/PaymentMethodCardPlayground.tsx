import { useState } from "react";

import PaymentMethodCard from "@/components/common/PaymentMethodCard";
import { showToast } from "@/components/ui/Toast";

import { PAYMENT_METHOD_DATA } from "../data/paymentMethod.data";

const PaymentMethodCardPlayground = () => {
  const [selectedPaymentId, setSelectedPaymentId] = useState(
    PAYMENT_METHOD_DATA[0]?.id ?? "",
  );

  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Payment Method Card
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable payment selection cards for checkout and account payment
          settings.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {PAYMENT_METHOD_DATA.map((method) => (
          <PaymentMethodCard
            key={method.id}
            method={method}
            selectable
            selected={selectedPaymentId === method.id}
            onSelect={(selectedMethod) =>
              setSelectedPaymentId(selectedMethod.id)
            }
            onEdit={(selectedMethod) =>
              showToast.info(`Editing ${selectedMethod.title}.`)
            }
            onDelete={(selectedMethod) =>
              showToast.info(`Remove requested for ${selectedMethod.title}.`)
            }
          />
        ))}
      </div>

      <p className="mt-5 text-sm text-muted-foreground">
        Selected payment method:{" "}
        <strong className="text-foreground">
          {selectedPaymentId || "None"}
        </strong>
      </p>
    </section>
  );
};

export default PaymentMethodCardPlayground;
