import type { FormEvent } from "react";

import { Mail, User } from "lucide-react";

import Button from "@/components/ui/Button";
import Form from "@/components/ui/form/Form";
import FormField from "@/components/ui/form/FormField";
import Input from "@/components/ui/form/Input";
import Textarea from "@/components/ui/form/Textarea";

const FormPlayground = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries());

    console.log("Form submitted:", values);
  };

  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Form Component
        </h2>

        <p className="mt-2 text-muted-foreground">
          A reusable form layout composed with FormField, Input, Textarea and
          Button.
        </p>
      </div>

      <Form spacing="lg" className="mt-8 max-w-2xl" onSubmit={handleSubmit}>
        <FormField
          label="Full Name"
          required
          helperText="Enter your legal name."
          htmlFor="formFullName"
        >
          <Input
            id="formFullName"
            name="fullName"
            autoComplete="name"
            placeholder="John Doe"
            leftIcon={<User className="h-4 w-4" />}
            required
          />
        </FormField>

        <FormField
          label="Email Address"
          required
          helperText="We'll use this email for account communication."
          htmlFor="formEmail"
        >
          <Input
            id="formEmail"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="john@example.com"
            leftIcon={<Mail className="h-4 w-4" />}
            required
          />
        </FormField>

        <FormField
          label="Message"
          helperText="Share any information relevant to your request."
          htmlFor="formMessage"
        >
          <Textarea
            id="formMessage"
            name="message"
            placeholder="Write your message..."
          />
        </FormField>

        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <Button
            type="reset"
            variant="outline"
            fullWidth
            className="sm:w-auto"
          >
            Reset
          </Button>

          <Button type="submit" fullWidth className="sm:w-auto">
            Submit Form
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default FormPlayground;
