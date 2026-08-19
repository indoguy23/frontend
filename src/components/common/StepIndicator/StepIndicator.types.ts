export type StepState = "completed" | "current" | "upcoming" | "error";

export interface StepIndicatorItem {
  id: string;

  label: string;

  description?: string;

  state: StepState;
}

export interface StepIndicatorProps {
  steps: StepIndicatorItem[];

  orientation?: "horizontal" | "vertical";

  className?: string;
}
