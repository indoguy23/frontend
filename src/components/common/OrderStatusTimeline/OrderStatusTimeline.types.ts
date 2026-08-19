export type OrderStatusStepState =
  | "completed"
  | "current"
  | "upcoming"
  | "cancelled";

export interface OrderStatusStep {
  id: string;
  title: string;
  description?: string;
  date?: string;
  state: OrderStatusStepState;
}

export interface OrderStatusTimelineProps {
  steps: OrderStatusStep[];
  className?: string;
}
