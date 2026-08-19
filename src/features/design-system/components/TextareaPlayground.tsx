import FormField from "@/components/ui/form/FormField";
import Textarea from "@/components/ui/form/Textarea";

const TextareaPlayground = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Textarea Component
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable multiline fields for descriptions, notes and messages.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <FormField
          label="Product Description"
          required
          helperText="Explain the main features and benefits of the product."
          htmlFor="productDescription"
        >
          <Textarea
            id="productDescription"
            name="productDescription"
            placeholder="Enter a detailed product description..."
          />
        </FormField>

        <FormField
          label="Store Description"
          helperText="Tell customers about your business."
          htmlFor="storeDescription"
        >
          <Textarea
            id="storeDescription"
            name="storeDescription"
            size="lg"
            placeholder="Write something about your store..."
          />
        </FormField>

        <FormField
          label="Order Notes"
          helperText="Optional delivery or packaging instructions."
          htmlFor="orderNotes"
        >
          <Textarea
            id="orderNotes"
            name="orderNotes"
            size="sm"
            placeholder="Add order instructions..."
          />
        </FormField>

        <FormField
          label="Customer Review"
          error="The review must contain at least 20 characters."
          htmlFor="customerReview"
        >
          <Textarea
            id="customerReview"
            name="customerReview"
            invalid
            placeholder="Share your experience..."
          />
        </FormField>

        <FormField
          label="Fixed Size Message"
          helperText="This field cannot be resized."
          htmlFor="fixedMessage"
        >
          <Textarea
            id="fixedMessage"
            name="fixedMessage"
            resize="none"
            placeholder="Write your message..."
          />
        </FormField>

        <FormField label="Disabled Description" htmlFor="disabledDescription">
          <Textarea
            id="disabledDescription"
            value="This description cannot currently be edited."
            disabled
            readOnly
          />
        </FormField>
      </div>
    </section>
  );
};

export default TextareaPlayground;
