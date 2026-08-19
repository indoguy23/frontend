export const productListingStyles = {
  container: "w-full",

  toolbar: [
    "flex flex-col gap-4",
    "lg:flex-row lg:items-center lg:justify-between",
  ].join(" "),

  controls: ["flex flex-col gap-3", "sm:flex-row sm:items-center"].join(" "),

  content: ["mt-6 grid gap-6", "lg:grid-cols-[280px_minmax(0,1fr)]"].join(" "),

  resultsArea: "min-w-0",

  grid: ["grid gap-5", "sm:grid-cols-2", "xl:grid-cols-3"].join(" "),

  resultInfo: ["mb-4 text-sm", "text-muted-foreground"].join(" "),

  pagination: "mt-8",
};
