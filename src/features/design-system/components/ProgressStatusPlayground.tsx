import ProgressStatus from "@/components/common/ProgressStatus";
import Card from "@/components/ui/Card";

const ProgressStatusPlayground = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Progress Status
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable progress indicators for uploads, fulfillment, verification
          and long-running tasks.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Card>
          <ProgressStatus
            value={45}
            label="Order Processing"
            description="The seller is preparing your order."
          />
        </Card>

        <Card>
          <ProgressStatus
            value={100}
            label="Upload Complete"
            description="All files were uploaded successfully."
            variant="success"
          />
        </Card>

        <Card>
          <ProgressStatus
            value={72}
            label="Seller Verification"
            description="Additional verification is still required."
            variant="warning"
          />
        </Card>

        <Card>
          <ProgressStatus
            value={25}
            label="Refund Processing"
            description="Refund processing encountered an issue."
            variant="danger"
          />
        </Card>

        <Card>
          <ProgressStatus
            value={60}
            label="Without Percentage"
            showValue={false}
          />
        </Card>

        <Card>
          <ProgressStatus
            value={130}
            label="Safe Value Handling"
            description="Values above 100 are automatically clamped."
          />
        </Card>
      </div>
    </section>
  );
};

export default ProgressStatusPlayground;
