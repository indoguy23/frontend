import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@/components/ui/Button";
import EmptyState from "@/components/ui/EmptyState";

import OrderCard from "../components/OrderCard";
import { getOrders } from "../services/orders.service";
import type { Order } from "../types/orders.types";

const OrdersPage = () => {
  const navigate = useNavigate();

  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let isActive = true;

    const fetchOrders = async () => {
      try {
        const response = await getOrders();

        if (isActive) {
          setOrders(response);
          setError("");
        }
      } catch (error) {
        if (isActive) {
          setError(
            error instanceof Error
              ? error.message
              : "Unable to load your orders. Please try again.",
          );
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    };

    void fetchOrders();

    return () => {
      isActive = false;
    };
  }, [retryCount]);

  const handleRetry = () => {
    setError("");
    setIsLoading(true);
    setRetryCount((count) => count + 1);
  };

  // Keep your existing loading, error, empty and orders JSX here.
  // Use handleRetry for the Try Again button.

  return (
    <main className="min-h-screen">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold sm:text-3xl">My Orders</h1>

        {isLoading ? (
          <p role="status" className="mt-4 text-sm text-muted-foreground">
            Loading your orders...
          </p>
        ) : error ? (
          <div className="mt-6">
            <EmptyState
              title="Unable to load orders"
              description={error}
              primaryAction={
                <Button type="button" onClick={handleRetry}>
                  Try Again
                </Button>
              }
            />
          </div>
        ) : orders.length === 0 ? (
          <div className="mt-6">
            <EmptyState
              title="No orders yet"
              description="Your orders will appear here after you place an order."
              primaryAction={
                <Button type="button" onClick={() => navigate("/products")}>
                  Browse Products
                </Button>
              }
            />
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            {orders.map((order) => (
              <OrderCard
                key={order.id}
                order={order}
                onViewDetails={(orderId) =>
                  navigate(`/orders/${encodeURIComponent(orderId)}`)
                }
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default OrdersPage;
