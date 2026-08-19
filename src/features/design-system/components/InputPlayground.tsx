import { Mail, Search, User } from "lucide-react";

import FormField from "@/components/ui/form/FormField";
import Input from "@/components/ui/form/Input";

const InputPlayground = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Input Component
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable single-line inputs with icons, helper text, error states and
          native form attributes.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <FormField
          label="Full Name"
          required
          helperText="Enter your legal name."
          htmlFor="fullName"
        >
          <Input
            id="fullName"
            name="fullName"
            autoComplete="name"
            placeholder="John Doe"
            leftIcon={<User className="h-4 w-4" />}
          />
        </FormField>

        <FormField
          label="Email Address"
          required
          helperText="We'll never share your email."
          htmlFor="emailAddress"
        >
          <Input
            id="emailAddress"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="john@example.com"
            leftIcon={<Mail className="h-4 w-4" />}
          />
        </FormField>

        <FormField
          label="Search Products"
          helperText="Search by product name, vendor or category."
          htmlFor="productSearch"
        >
          <Input
            id="productSearch"
            name="search"
            type="search"
            placeholder="Search products..."
            leftIcon={<Search className="h-4 w-4" />}
          />
        </FormField>

        <FormField
          label="Username"
          error="This username is already in use."
          htmlFor="username"
        >
          <Input
            id="username"
            name="username"
            placeholder="aryan_dev"
            invalid
            aria-describedby="username-error"
          />
        </FormField>

        <FormField label="Disabled Field" htmlFor="disabledField">
          <Input
            id="disabledField"
            value="This field is disabled"
            disabled
            readOnly
          />
        </FormField>

        <FormField
          label="Large Input"
          helperText="Example of the large input size."
          htmlFor="largeInput"
        >
          <Input id="largeInput" size="lg" placeholder="Large input size" />
        </FormField>
      </div>
    </section>
  );
};

export default InputPlayground;
