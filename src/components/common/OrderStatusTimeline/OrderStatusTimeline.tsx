import { Check, Clock3, X } from "lucide-react";

import { cn } from "@/utils/cn";

import { orderStatusTimelineStyles } from "./OrderStatusTimeline.styles";
import type {
  OrderStatusStep,
  OrderStatusTimelineProps,
} from "./OrderStatusTimeline.types";

interface StatusIconProps {
  step: OrderStatusStep;
}

const StatusIcon = ({ step }: StatusIconProps) => {
  if (step.state === "completed") {
    return <Check aria-hidden="true" className="h-4 w-4" />;
  }

  if (step.state === "cancelled") {
    return <X aria-hidden="true" className="h-4 w-4" />;
  }

  return <Clock3 aria-hidden="true" className="h-4 w-4" />;
};

const getIndicatorClassName = (state: OrderStatusStep["state"]) => {
  if (state === "completed") {
    return orderStatusTimelineStyles.completed;
  }

  if (state === "current") {
    return orderStatusTimelineStyles.current;
  }

  if (state === "cancelled") {
    return orderStatusTimelineStyles.cancelled;
  }

  return orderStatusTimelineStyles.upcoming;
};

const OrderStatusTimeline = ({
  steps,
  className,
}: OrderStatusTimelineProps) => {
  return (
    <div className={cn(orderStatusTimelineStyles.root, className)}>
      <ol className={orderStatusTimelineStyles.list}>
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;

          const connectorCompleted = step.state === "completed";

          return (
            <li key={step.id} className={orderStatusTimelineStyles.item}>
              <div className={orderStatusTimelineStyles.indicatorColumn}>
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className={cn(
                      orderStatusTimelineStyles.connector,
                      connectorCompleted &&
                        orderStatusTimelineStyles.connectorCompleted,
                    )}
                  />
                )}

                <span
                  className={cn(
                    orderStatusTimelineStyles.indicator,
                    getIndicatorClassName(step.state),
                  )}
                >
                  <StatusIcon step={step} />
                </span>
              </div>

              <div className={orderStatusTimelineStyles.content}>
                <div className={orderStatusTimelineStyles.header}>
                  <h3 className={orderStatusTimelineStyles.title}>
                    {step.title}
                  </h3>

                  {step.date && (
                    <span className={orderStatusTimelineStyles.date}>
                      {step.date}
                    </span>
                  )}
                </div>

                {step.description && (
                  <p className={orderStatusTimelineStyles.description}>
                    {step.description}
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default OrderStatusTimeline;
