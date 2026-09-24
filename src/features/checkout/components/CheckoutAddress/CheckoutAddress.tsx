import type {
  CheckoutAddressData,
  CheckoutAddressErrors,
} from "../types/checkout.types";

interface CheckoutAddressProps {
  value: CheckoutAddressData;
  errors?: CheckoutAddressErrors;
  onChange: (value: CheckoutAddressData) => void;
}

const CheckoutAddress = ({
  value,
  errors = {},
  onChange,
}: CheckoutAddressProps) => {
  const handleChange = (
    field: keyof CheckoutAddressData,
    fieldValue: string,
  ) => {
    onChange({
      ...value,
      [field]: fieldValue,
    });
  };

  const inputClassName =
    "w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring";

  const errorInputClassName = "border-destructive focus:ring-destructive";

  const getInputClassName = (field: keyof CheckoutAddressData) => {
    return `${inputClassName} ${errors[field] ? errorInputClassName : ""}`;
  };

  return (
    <>
      <section className="rounded-xl bg-card p-4 sm:p-6">
        <div>
          <h2 className="text-lg font-semibold">Delivery Address</h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Enter the address where you want your order delivered.
          </p>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {/* Full Name */}
          <div className="sm:col-span-2">
            <label
              htmlFor="checkout-full-name"
              className="mb-2 block text-sm font-medium"
            >
              Full Name
            </label>

            <input
              id="checkout-full-name"
              type="text"
              value={value.fullName}
              onChange={(event) => handleChange("fullName", event.target.value)}
              placeholder="Enter your full name"
              autoComplete="name"
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={
                errors.fullName ? "checkout-full-name-error" : undefined
              }
              className={getInputClassName("fullName")}
            />

            {errors.fullName && (
              <p
                id="checkout-full-name-error"
                className="mt-1.5 text-sm text-destructive"
              >
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="checkout-phone"
              className="mb-2 block text-sm font-medium"
            >
              Phone Number
            </label>

            <input
              id="checkout-phone"
              type="tel"
              inputMode="numeric"
              value={value.phone}
              onChange={(event) =>
                handleChange(
                  "phone",
                  event.target.value.replace(/\D/g, "").slice(0, 10),
                )
              }
              placeholder="Enter 10-digit phone number"
              autoComplete="tel"
              maxLength={10}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={
                errors.phone ? "checkout-phone-error" : undefined
              }
              className={getInputClassName("phone")}
            />

            {errors.phone && (
              <p
                id="checkout-phone-error"
                className="mt-1.5 text-sm text-destructive"
              >
                {errors.phone}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="checkout-email"
              className="mb-2 block text-sm font-medium"
            >
              Email Address
            </label>

            <input
              id="checkout-email"
              type="email"
              value={value.email}
              onChange={(event) => handleChange("email", event.target.value)}
              placeholder="Enter email address"
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={
                errors.email ? "checkout-email-error" : undefined
              }
              className={getInputClassName("email")}
            />

            {errors.email && (
              <p
                id="checkout-email-error"
                className="mt-1.5 text-sm text-destructive"
              >
                {errors.email}
              </p>
            )}
          </div>

          {/* Address Line 1 */}
          <div className="sm:col-span-2">
            <label
              htmlFor="checkout-address-1"
              className="mb-2 block text-sm font-medium"
            >
              Address
            </label>

            <input
              id="checkout-address-1"
              type="text"
              value={value.addressLine1}
              onChange={(event) =>
                handleChange("addressLine1", event.target.value)
              }
              placeholder="House number, street, area"
              autoComplete="address-line1"
              aria-invalid={Boolean(errors.addressLine1)}
              aria-describedby={
                errors.addressLine1 ? "checkout-address-1-error" : undefined
              }
              className={getInputClassName("addressLine1")}
            />

            {errors.addressLine1 && (
              <p
                id="checkout-address-1-error"
                className="mt-1.5 text-sm text-destructive"
              >
                {errors.addressLine1}
              </p>
            )}
          </div>

          {/* Address Line 2 */}
          <div className="sm:col-span-2">
            <label
              htmlFor="checkout-address-2"
              className="mb-2 block text-sm font-medium"
            >
              Apartment, Suite, Landmark
              <span className="ml-1 text-muted-foreground">(Optional)</span>
            </label>

            <input
              id="checkout-address-2"
              type="text"
              value={value.addressLine2}
              onChange={(event) =>
                handleChange("addressLine2", event.target.value)
              }
              placeholder="Apartment, suite, landmark, etc."
              autoComplete="address-line2"
              className={getInputClassName("addressLine2")}
            />
          </div>

          {/* City */}
          <div>
            <label
              htmlFor="checkout-city"
              className="mb-2 block text-sm font-medium"
            >
              City
            </label>

            <input
              id="checkout-city"
              type="text"
              value={value.city}
              onChange={(event) => handleChange("city", event.target.value)}
              placeholder="Enter city"
              autoComplete="address-level2"
              aria-invalid={Boolean(errors.city)}
              aria-describedby={errors.city ? "checkout-city-error" : undefined}
              className={getInputClassName("city")}
            />

            {errors.city && (
              <p
                id="checkout-city-error"
                className="mt-1.5 text-sm text-destructive"
              >
                {errors.city}
              </p>
            )}
          </div>

          {/* State */}
          <div>
            <label
              htmlFor="checkout-state"
              className="mb-2 block text-sm font-medium"
            >
              State
            </label>

            <input
              id="checkout-state"
              type="text"
              value={value.state}
              onChange={(event) => handleChange("state", event.target.value)}
              placeholder="Enter state"
              autoComplete="address-level1"
              aria-invalid={Boolean(errors.state)}
              aria-describedby={
                errors.state ? "checkout-state-error" : undefined
              }
              className={getInputClassName("state")}
            />

            {errors.state && (
              <p
                id="checkout-state-error"
                className="mt-1.5 text-sm text-destructive"
              >
                {errors.state}
              </p>
            )}
          </div>

          {/* PIN Code */}
          <div>
            <label
              htmlFor="checkout-postal-code"
              className="mb-2 block text-sm font-medium"
            >
              PIN Code
            </label>

            <input
              id="checkout-postal-code"
              type="text"
              inputMode="numeric"
              value={value.postalCode}
              onChange={(event) =>
                handleChange(
                  "postalCode",
                  event.target.value.replace(/\D/g, "").slice(0, 6),
                )
              }
              placeholder="Enter 6-digit PIN"
              autoComplete="postal-code"
              maxLength={6}
              aria-invalid={Boolean(errors.postalCode)}
              aria-describedby={
                errors.postalCode ? "checkout-postal-code-error" : undefined
              }
              className={getInputClassName("postalCode")}
            />

            {errors.postalCode && (
              <p
                id="checkout-postal-code-error"
                className="mt-1.5 text-sm text-destructive"
              >
                {errors.postalCode}
              </p>
            )}
          </div>

          {/* Country */}
          <div>
            <label
              htmlFor="checkout-country"
              className="mb-2 block text-sm font-medium"
            >
              Country
            </label>

            <input
              id="checkout-country"
              type="text"
              value={value.country}
              onChange={(event) => handleChange("country", event.target.value)}
              placeholder="Enter country"
              autoComplete="country-name"
              aria-invalid={Boolean(errors.country)}
              aria-describedby={
                errors.country ? "checkout-country-error" : undefined
              }
              className={getInputClassName("country")}
            />

            {errors.country && (
              <p
                id="checkout-country-error"
                className="mt-1.5 text-sm text-destructive"
              >
                {errors.country}
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutAddress;
