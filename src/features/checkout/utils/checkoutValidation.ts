import type {
  CheckoutAddressData,
  CheckoutAddressErrors,
} from "../components/types/checkout.types";

export const validateCheckoutAddress = (
  address: CheckoutAddressData,
): CheckoutAddressErrors => {
  const errors: CheckoutAddressErrors = {};

  const fullName = address.fullName.trim();
  const phone = address.phone.trim();
  const email = address.email.trim();
  const addressLine1 = address.addressLine1.trim();
  const city = address.city.trim();
  const state = address.state.trim();
  const postalCode = address.postalCode.trim();
  const country = address.country.trim();

  if (!fullName) {
    errors.fullName = "Full name is required.";
  } else if (fullName.length < 3) {
    errors.fullName = "Full name must be at least 3 characters.";
  }

  if (!phone) {
    errors.phone = "Phone number is required.";
  } else if (!/^[6-9]\d{9}$/.test(phone)) {
    errors.phone = "Enter a valid 10-digit Indian phone number.";
  }

  if (!email) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!addressLine1) {
    errors.addressLine1 = "Address is required.";
  }

  if (!city) {
    errors.city = "City is required.";
  }

  if (!state) {
    errors.state = "State is required.";
  }

  if (!postalCode) {
    errors.postalCode = "PIN code is required.";
  } else if (!/^\d{6}$/.test(postalCode)) {
    errors.postalCode = "Enter a valid 6-digit PIN code.";
  }

  if (!country) {
    errors.country = "Country is required.";
  }

  return errors;
};
