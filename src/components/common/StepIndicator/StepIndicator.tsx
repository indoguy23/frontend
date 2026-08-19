import { Check, X } from "lucide-react";

import { cn } from "@/utils/cn";

import { stepIndicatorStyles } from "./StepIndicator.styles";
import type {
  StepIndicatorItem,
  StepIndicatorProps,
  StepState,
} from "./StepIndicator.types";

interface StepIconProps {
  state: StepState;
  index: number;
}

const StepIcon = ({ state, index }: StepIconProps) => {
  if (state === "completed") {
    return <Check aria-hidden="true" className="h-4 w-4" />;
  }

  if (state === "error") {
    return <X aria-hidden="true" className="h-4 w-4" />;
  }

  return <span>{index + 1}</span>;
};

const getStateClassName = (state: StepState) => {
  switch (state) {
    case "completed":
      return stepIndicatorStyles.completed;

    case "current":
      return stepIndicatorStyles.current;

    case "error":
      return stepIndicatorStyles.error;

    case "upcoming":
    default:
      return stepIndicatorStyles.upcoming;
  }
};

const StepIndicator = ({
  steps,
  orientation = "horizontal",
  className,
}: StepIndicatorProps) => {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      className={cn(
        stepIndicatorStyles.root,
        isHorizontal
          ? stepIndicatorStyles.horizontal
          : stepIndicatorStyles.vertical,
        className,
      )}
    >
      {steps.map((step: StepIndicatorItem, index) => {
        const isLast = index === steps.length - 1;

        const connectorCompleted = step.state === "completed";

        return (
          <div
            key={step.id}
            className={
              isHorizontal
                ? stepIndicatorStyles.horizontalItem
                : stepIndicatorStyles.verticalItem
            }
          >
            {!isLast && (
              <span
                aria-hidden="true"
                className={cn(
                  isHorizontal
                    ? stepIndicatorStyles.horizontalConnector
                    : stepIndicatorStyles.verticalConnector,
                  connectorCompleted && stepIndicatorStyles.completedConnector,
                )}
              />
            )}

            <div
              className={cn(
                stepIndicatorStyles.indicator,
                getStateClassName(step.state),
              )}
            >
              <StepIcon state={step.state} index={index} />
            </div>

            <div
              className={
                isHorizontal
                  ? stepIndicatorStyles.horizontalContent
                  : stepIndicatorStyles.verticalContent
              }
            >
              <p className={stepIndicatorStyles.label}>{step.label}</p>

              {step.description && (
                <p className={stepIndicatorStyles.description}>
                  {step.description}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;
