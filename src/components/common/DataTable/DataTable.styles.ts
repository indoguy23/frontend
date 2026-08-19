export const dataTableStyles = {
  container: [
    "w-full overflow-hidden",
    "rounded-xl border border-border",
    "bg-card",
  ].join(" "),

  scrollArea: "w-full overflow-x-auto",

  table: ["w-full min-w-max", "border-collapse", "text-sm"].join(" "),

  header: ["border-b border-border", "bg-muted/50"].join(" "),

  headerRow: "",

  headerCell: [
    "h-12 px-4 text-left align-middle",
    "font-medium text-muted-foreground",
    "whitespace-nowrap",
  ].join(" "),

  body: "divide-y divide-border",

  row: ["transition-colors duration-150", "hover:bg-muted/40"].join(" "),

  cell: ["px-4 py-4 align-middle", "text-card-foreground"].join(" "),

  emptyCell: "p-0",
};
