import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "@/components/ui/Button";
import EmptyState from "@/components/ui/EmptyState";

import OrderDetails from "../components/OrderDetails";
import { getOrderById } from "../services/orders.service";
import type { Order } from "../types/orders.types";

const OrderDetailsPage = () => {
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

      try {
        const response = await getOrderById(orderId);

        if (isActive) {
          setOrder(response);
          setError("");
        }
      } catch (error) {
        if (isActive) {
          setError(
            error instanceof Error
              ? error.message
              : "Unable to load order details.",
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
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <p role="status" className="text-sm text-muted-foreground">
            Loading order details...
          </p>
        </div>
      </main>
    );
  }

  if (error || !order) {
    return (
      <main className="min-h-screen">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <EmptyState
            title="Order details unavailable"
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

  return (
    <main className="min-h-screen">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <OrderDetails
          order={order}
          onBack={() => navigate("/orders")}
          onTrackOrder={() =>
            navigate(`/orders/${encodeURIComponent(order.orderId)}/tracking`)
          }
          onCancelOrder={() => {
            // Order cancellation will be connected to the backend later.
          }}
        />
      </div>
    </main>
  );
};

export default OrderDetailsPage;
