import { useState } from "react";

import Button from "@/components/ui/Button";
import Alert from "@/components/ui/Alert";

const AlertPlayground = () => {
  const [showDismissibleAlert, setShowDismissibleAlert] = useState(true);

  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Alert Component
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable feedback messages for success, warning, error and
          informational states.
        </p>
      </div>

      <div className="mt-8 space-y-5">
        <Alert
          title="General notification"
          description="This is a standard message using the default alert style."
        />

        <Alert
          variant="info"
          title="Vendor profile incomplete"
          description="Add your store address and payment details before publishing products."
        />

        <Alert
          variant="success"
          title="Order placed successfully"
          description="Your order has been confirmed and the vendor has been notified."
        />

        <Alert
          variant="warning"
          title="Low stock warning"
          description="Only three units of this product remain in inventory."
        />

        <Alert
          variant="destructive"
          title="Payment failed"
          description="We could not complete the payment. Please verify your details and try again."
        />

        <Alert
          variant="warning"
          title="Vendor approval required"
          description="Your store cannot publish products until an administrator approves it."
          action={
            <Button variant="outline" size="sm">
              Review Profile
            </Button>
          }
        />

        {showDismissibleAlert ? (
          <Alert
            variant="info"
            title="Marketplace update"
            description="A new version of the vendor dashboard is now available."
            dismissible
            onDismiss={() => setShowDismissibleAlert(false)}
          />
        ) : (
          <Button
            variant="outline"
            onClick={() => setShowDismissibleAlert(true)}
          >
            Show dismissed alert
          </Button>
        )}

        <Alert variant="success">
          <p className="leading-6">
            Custom child content can also be rendered inside the Alert
            component.
          </p>

          <ul className="mt-2 list-inside list-disc space-y-1 text-current/80">
            <li>Product created</li>
            <li>Inventory updated</li>
            <li>Vendor notified</li>
          </ul>
        </Alert>
      </div>
    </section>
  );
};

export default AlertPlayground;
