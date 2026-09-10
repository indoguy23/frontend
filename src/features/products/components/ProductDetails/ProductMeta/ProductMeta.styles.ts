export const productMetaStyles = {
  root: ["mt-10", "grid", "gap-6", "lg:grid-cols-2"].join(" "),

  card: [
    "rounded-2xl",
    "border",
    "border-border",
    "bg-card",
    "p-5",
    "sm:p-6",
  ].join(" "),

  title: "text-lg font-semibold sm:text-xl",

  specifications: "mt-5 divide-y divide-border",

  specificationRow: [
    "grid",
    "grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]",
    "gap-4",
    "py-3",
    "text-sm",
  ].join(" "),

  specificationLabel: "font-medium text-muted-foreground",

  specificationValue: "text-right font-medium text-foreground",

  sellerHeader: "mt-5 flex items-start justify-between gap-4",

  sellerNameWrapper: "min-w-0",

  sellerName: "truncate text-base font-semibold",

  sellerSlug: "mt-1 text-sm text-muted-foreground",

  sellerDetails: "mt-5 space-y-3",

  sellerDetailRow: "flex items-center justify-between gap-4 text-sm",

  sellerDetailLabel: "text-muted-foreground",

  sellerDetailValue: "font-medium text-foreground",

  verified: "inline-flex items-center gap-1.5 text-sm font-medium",
};
