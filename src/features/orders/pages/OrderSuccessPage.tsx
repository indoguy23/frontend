import { useLocation, useNavigate } from "react-router-dom";

import Button from "@/components/ui/Button";
import EmptyState from "@/components/ui/EmptyState";

import OrderSuccess from "../components/OrderSuccess";
import type { OrderSuccessData } from "../types/orders.types";

interface OrderSuccessLocationState {
  order?: OrderSuccessData;
}

const OrderSuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state as OrderSuccessLocationState | null;
  const order = state?.order;

  if (!order) {
    return (
      <main className="min-h-screen">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <EmptyState
            title="Order information not found"
            description="We could not find the order information for this page."
            primaryAction={
              <Button type="button" onClick={() => navigate("/products")}>
                Continue Shopping
              </Button>
            }
          />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <OrderSuccess
          order={order}
          onContinueShopping={() => navigate("/products")}
          onViewOrders={() => navigate("/orders")}
        />
      </div>
    </main>
  );
};

export default OrderSuccessPage;
