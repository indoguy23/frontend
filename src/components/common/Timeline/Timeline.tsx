import { Check, Circle, Clock3, X } from "lucide-react";

import { cn } from "@/utils/cn";

import { timelineStyles } from "./Timeline.styles";
import type { TimelineItemStatus, TimelineProps } from "./Timeline.types";

interface TimelineStatusIconProps {
  status: TimelineItemStatus;
}

const TimelineStatusIcon = ({ status }: TimelineStatusIconProps) => {
  if (status === "completed") {
    return <Check aria-hidden="true" className="h-4 w-4" />;
  }

  if (status === "current") {
    return <Clock3 aria-hidden="true" className="h-4 w-4" />;
  }

  if (status === "error") {
    return <X aria-hidden="true" className="h-4 w-4" />;
  }

  return <Circle aria-hidden="true" className="h-3 w-3" />;
};

const getStatusClassName = (status: TimelineItemStatus) => {
  switch (status) {
    case "completed":
      return timelineStyles.completed;

    case "current":
      return timelineStyles.current;

    case "error":
      return timelineStyles.error;

    case "pending":
    default:
      return timelineStyles.pending;
  }
};

const Timeline = ({ items, className }: TimelineProps) => {
  return (
    <ol className={cn(timelineStyles.root, className)}>
      {items.map((item, index) => {
        const status = item.status ?? "pending";

        const isLast = index === items.length - 1;

        return (
          <li key={item.id} className={timelineStyles.item}>
            <div className={timelineStyles.indicatorWrapper}>
              <div
                className={cn(
                  timelineStyles.indicator,
                  getStatusClassName(status),
                )}
              >
                {item.icon ?? <TimelineStatusIcon status={status} />}
              </div>

              {!isLast && (
                <span
                  aria-hidden="true"
                  className={cn(
                    timelineStyles.connector,
                    status === "completed" && timelineStyles.completedConnector,
                  )}
                />
              )}
            </div>

            <div className={timelineStyles.content}>
              <div className={timelineStyles.header}>
                <h3 className={timelineStyles.title}>{item.title}</h3>

                {item.timestamp && (
                  <time className={timelineStyles.timestamp}>
                    {item.timestamp}
                  </time>
                )}
              </div>

              {item.description && (
                <p className={timelineStyles.description}>{item.description}</p>
              )}

              {item.content && (
                <div className={timelineStyles.customContent}>
                  {item.content}
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
};

export default Timeline;
