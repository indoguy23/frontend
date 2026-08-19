import { useState } from "react";

import FormField from "@/components/ui/form/FormField";
import Select from "@/components/ui/form/Select";
import {
  CATEGORY_OPTIONS,
  COUNTRY_OPTIONS,
  STATUS_OPTIONS,
} from "@/constants/selectOptions";

const SelectPlayground = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Select Component
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable native dropdowns with dynamic options, placeholder support,
          validation states and controlled values.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <FormField
          label="Product Category"
          required
          helperText="Choose the category that best matches the product."
          htmlFor="productCategory"
        >
          <Select
            id="productCategory"
            name="category"
            options={CATEGORY_OPTIONS}
            placeholder="Select a category"
            required
          />
        </FormField>

        <FormField
          label="Product Status"
          helperText="Archived is temporarily unavailable."
          htmlFor="productStatus"
        >
          <Select
            id="productStatus"
            name="status"
            options={STATUS_OPTIONS}
            placeholder="Select a status"
          />
        </FormField>

        <FormField
          label="Country"
          helperText="Select your primary country."
          htmlFor="country"
        >
          <Select
            id="country"
            name="country"
            options={COUNTRY_OPTIONS}
            placeholder="Select a country"
            size="lg"
          />
        </FormField>

        <FormField
          label="Invalid Selection"
          error="Please select a valid category."
          htmlFor="invalidCategory"
        >
          <Select
            id="invalidCategory"
            name="invalidCategory"
            options={CATEGORY_OPTIONS}
            placeholder="Select a category"
            invalid
            aria-describedby="invalidCategory-error"
          />
        </FormField>

        <FormField
          label="Small Select"
          helperText="Example of the small Select size."
          htmlFor="smallSelect"
        >
          <Select
            id="smallSelect"
            name="smallSelect"
            options={CATEGORY_OPTIONS}
            placeholder="Small select"
            size="sm"
          />
        </FormField>

        <FormField label="Disabled Select" htmlFor="disabledSelect">
          <Select
            id="disabledSelect"
            name="disabledSelect"
            options={CATEGORY_OPTIONS}
            placeholder="Selection unavailable"
            disabled
          />
        </FormField>

        <FormField
          label="Controlled Category"
          helperText={
            selectedCategory
              ? `Selected value: ${selectedCategory}`
              : "No category selected."
          }
          htmlFor="controlledCategory"
        >
          <Select
            id="controlledCategory"
            name="controlledCategory"
            options={CATEGORY_OPTIONS}
            placeholder="Choose a category"
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
          />
        </FormField>
      </div>
    </section>
  );
};

export default SelectPlayground;
