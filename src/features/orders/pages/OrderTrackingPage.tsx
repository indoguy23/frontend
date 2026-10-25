import { useEffect, useState } from "react";
import { ArrowLeft, PackageCheck, Truck } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "@/components/ui/Button";
import EmptyState from "@/components/ui/EmptyState";

import OrderStatusTimeline from "@/components/common/OrderStatusTimeline";
import { ORDER_STATUS_CONFIG } from "../data/orderStatus.data";
import { getOrderById } from "../services/orders.service";
import type { Order } from "../types/orders.types";
import { getOrderTrackingSteps } from "../utils/orderTracking.utils";

const OrderTrackingPage = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const navigate = useNavigate();

  const [order, setOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isActive = true;

    const fetchOrder = async () => {
      if (!orderId) {
        setError("The order ID is missing.");
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError("");

      try {
        const response = await getOrderById(orderId);

        if (isActive) {
          setOrder(response);
        }
      } catch (err) {
        if (isActive) {
          setOrder(null);
          setError(
            err instanceof Error
              ? err.message
              : "Unable to load order tracking.",
          );
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    };

    void fetchOrder();

    return () => {
      isActive = false;
    };
  }, [orderId]);

  if (isLoading) {
    return (
      <main className="min-h-screen">
        <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
          <p role="status" className="text-sm text-muted-foreground">
            Loading order tracking...
          </p>
        </div>
      </main>
    );
  }

  if (error || !order) {
    return (
      <main className="min-h-screen">
        <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
          <EmptyState
            title="Tracking information unavailable"
            description={error || "The requested order could not be found."}
            primaryAction={
              <Button type="button" onClick={() => navigate("/orders")}>
                Back to My Orders
              </Button>
            }
          />
        </div>
      </main>
    );
  }

  const status = ORDER_STATUS_CONFIG[order.status];

  const trackingSteps = getOrderTrackingSteps(order.status, {
    createdAt: order.createdAt,
    updatedAt: order.updatedAt,
  });

  return (
    <main className="min-h-screen">
      <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <Button
          type="button"
          variant="outline"
          onClick={() =>
            navigate(`/orders/${encodeURIComponent(order.orderId)}`)
          }
        >
          <ArrowLeft aria-hidden="true" className="mr-2 h-4 w-4" />
          Back to Order Details
        </Button>

        <section className="mt-6 rounded-xl border border-border bg-card p-5 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-muted">
              {order.status === "delivered" ? (
                <PackageCheck aria-hidden="true" className="h-6 w-6" />
              ) : (
                <Truck aria-hidden="true" className="h-6 w-6" />
              )}
            </div>

            <div className="min-w-0 flex-1">
              <h1 className="text-xl font-semibold text-foreground sm:text-2xl">
                Track Your Order
              </h1>

              <p className="mt-1 break-words text-sm text-muted-foreground">
                Order ID: {order.orderId}
              </p>

              <p className="mt-3 text-sm text-muted-foreground">
                Current status:{" "}
                <span className="font-medium text-foreground">
                  {status.label}
                </span>
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                Ordered on{" "}
                {new Date(order.createdAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-border pt-6">
            <h2 className="mb-5 text-lg font-semibold text-foreground">
              Order Progress
            </h2>

            <OrderStatusTimeline steps={trackingSteps} />
          </div>

          <div className="mt-8 border-t border-border pt-6">
            <h2 className="text-base font-semibold text-foreground">
              Delivery Address
            </h2>

            <p className="mt-2 text-sm font-medium text-foreground">
              {order.address.fullName}
            </p>

            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              {order.address.addressLine1}
              {order.address.addressLine2
                ? `, ${order.address.addressLine2}`
                : ""}
              <br />
              {order.address.city}, {order.address.state}{" "}
              {order.address.postalCode}
              <br />
              {order.address.country}
            </p>
          </div>

          <div className="mt-8">
            <Button type="button" onClick={() => navigate("/orders")}>
              View All Orders
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default OrderTrackingPage;
