import PriceDisplay from "@/components/common/PriceDisplay";
import Button from "@/components/ui/Button";

import {
  ORDER_SUCCESS_ACTIONS,
  ORDER_SUCCESS_CONTENT,
  ORDER_SUCCESS_ICONS,
} from "../../data/orderSuccess.data";
import { ORDER_STATUS_CONFIG } from "../../data/orderStatus.data";
import type { OrderSuccessProps } from "./OrderSuccess.types";
import { orderSuccessStyles } from "./OrderSuccess.styles";

const OrderSuccess = ({
  order,
  onContinueShopping,
  onViewOrders,
}: OrderSuccessProps) => {
  const SuccessIcon = ORDER_SUCCESS_ICONS.success;
  const statusConfig = ORDER_STATUS_CONFIG[order.status];

  const actionHandlers = {
    "continue-shopping": onContinueShopping,
    "view-orders": onViewOrders,
  };

  return (
    <>
      <section className={orderSuccessStyles.section}>
        <div className={orderSuccessStyles.successIcon}>
          <SuccessIcon className={orderSuccessStyles.successIconSvg} />
        </div>

        <h1 className={orderSuccessStyles.title}>
          {ORDER_SUCCESS_CONTENT.title}
        </h1>

        <p className={orderSuccessStyles.description}>
          {ORDER_SUCCESS_CONTENT.description}
        </p>

        <div className={orderSuccessStyles.details}>
          <div className={orderSuccessStyles.detailRow}>
            <span className={orderSuccessStyles.detailLabel}>
              {ORDER_SUCCESS_CONTENT.orderIdLabel}
            </span>

            <span className={orderSuccessStyles.detailValue}>
              {order.orderId}
            </span>
          </div>

          <div
            className={`${orderSuccessStyles.detailRow} ${orderSuccessStyles.detailRowSpacing}`}
          >
            <span className={orderSuccessStyles.detailLabel}>
              {ORDER_SUCCESS_CONTENT.statusLabel}
            </span>

            <span className={orderSuccessStyles.detailValue}>
              {statusConfig.label}
            </span>
          </div>

          <div
            className={`${orderSuccessStyles.detailRow} ${orderSuccessStyles.detailRowSpacing}`}
          >
            <span className={orderSuccessStyles.detailLabel}>
              {ORDER_SUCCESS_CONTENT.totalLabel}
            </span>

            <PriceDisplay price={order.total} showDiscount={false} size="sm" />
          </div>
        </div>

        <div className={orderSuccessStyles.actions}>
          {ORDER_SUCCESS_ACTIONS.map((action) => {
            const ActionIcon = action.icon;
            const handleAction = actionHandlers[action.action];

            return (
              <Button
                key={action.id}
                type="button"
                variant={action.variant}
                onClick={handleAction}
              >
                <ActionIcon className="mr-2 h-4 w-4" />
                {action.label}
              </Button>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default OrderSuccess;
