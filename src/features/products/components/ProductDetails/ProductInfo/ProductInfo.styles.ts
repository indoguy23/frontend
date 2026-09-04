export const productInfoStyles = {
  root: "flex min-w-0 flex-col",

  category: "text-sm font-medium uppercase tracking-wide text-muted-foreground",

  title: "mt-2 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl",

  rating: "mt-4",

  price: "mt-5",

  stock: "mt-4",

  description: "mt-5 text-sm leading-6 text-muted-foreground sm:text-base",

  divider: "my-6 border-t border-border",

  quantitySection: "space-y-2",

  quantityLabel: "text-sm font-medium",

  quantityControls:
    "flex w-fit items-center overflow-hidden rounded-lg border border-border",

  quantityButton:
    "flex h-10 w-10 items-center justify-center transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50",

  quantityValue:
    "flex h-10 min-w-12 items-center justify-center border-x border-border px-3 text-sm font-medium",

  actions: "mt-6 flex flex-col gap-3 sm:flex-row",

  addToCart: "flex-1",

  wishlist: "sm:w-auto",
};
