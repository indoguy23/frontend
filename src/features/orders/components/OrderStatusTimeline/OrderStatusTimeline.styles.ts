export const orderStatusTimelineStyles = {
  container: "rounded-xl border border-border bg-card p-4 sm:p-6",

  title: "text-lg font-semibold",

  timeline: "mt-6",

  step: "relative flex gap-4",

  indicatorWrapper: "flex w-6 shrink-0 flex-col items-center",

  indicator:
    "z-10 flex h-6 w-6 items-center justify-center rounded-full border",

  completedIndicator: "border-primary bg-primary text-primary-foreground",

  pendingIndicator: "border-border bg-background text-muted-foreground",

  connector: "my-1 min-h-10 w-px flex-1 bg-border",

  stepContent: "min-w-0 flex-1 pb-8",

  stepTitle: "text-sm font-medium",

  stepDescription: "mt-1 text-sm text-muted-foreground",

  cancelledPanel:
    "mt-6 rounded-lg border border-destructive/30 bg-destructive/5 p-4",

  cancelledTitle: "font-semibold text-destructive",

  cancelledDescription: "mt-1 text-sm text-muted-foreground",
};
