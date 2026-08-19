import {
  Bell,
  Heart,
  Info,
  Settings,
  ShoppingCart,
  Trash2,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Tooltip from "@/components/ui/Tooltip";

const TooltipPlayground = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Tooltip Component
        </h2>

        <p className="mt-2 text-muted-foreground">
          Short contextual explanations for icons, actions and unfamiliar
          controls.
        </p>
      </div>

      <div className="mt-8 space-y-8">
        <div>
          <h3 className="font-semibold text-card-foreground">Icon Buttons</h3>

          <div className="mt-4 flex flex-wrap gap-3">
            <Tooltip content="View notifications">
              <Button
                size="icon"
                variant="outline"
                aria-label="View notifications"
              >
                <Bell className="h-5 w-5" />
              </Button>
            </Tooltip>

            <Tooltip content="Open shopping cart">
              <Button
                size="icon"
                variant="outline"
                aria-label="Open shopping cart"
              >
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Tooltip>

            <Tooltip content="Add to wishlist">
              <Button
                size="icon"
                variant="outline"
                aria-label="Add to wishlist"
              >
                <Heart className="h-5 w-5" />
              </Button>
            </Tooltip>

            <Tooltip content="Delete product">
              <Button
                size="icon"
                variant="destructive"
                aria-label="Delete product"
              >
                <Trash2 className="h-5 w-5" />
              </Button>
            </Tooltip>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-card-foreground">Positioning</h3>

          <div className="mt-4 flex flex-wrap gap-4">
            <Tooltip content="Displayed above" contentProps={{ side: "top" }}>
              <Button variant="outline">Top</Button>
            </Tooltip>

            <Tooltip
              content="Displayed on the right"
              contentProps={{ side: "right" }}
            >
              <Button variant="outline">Right</Button>
            </Tooltip>

            <Tooltip
              content="Displayed below"
              contentProps={{ side: "bottom" }}
            >
              <Button variant="outline">Bottom</Button>
            </Tooltip>

            <Tooltip
              content="Displayed on the left"
              contentProps={{ side: "left" }}
            >
              <Button variant="outline">Left</Button>
            </Tooltip>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-card-foreground">
            Sizes and Rich Content
          </h3>

          <div className="mt-4 flex flex-wrap gap-4">
            <Tooltip content="Compact tooltip" contentProps={{ size: "sm" }}>
              <Button variant="outline">Small</Button>
            </Tooltip>

            <Tooltip
              content="Standard tooltip information"
              contentProps={{ size: "md" }}
            >
              <Button variant="outline">Medium</Button>
            </Tooltip>

            <Tooltip
              content={
                <div>
                  <p className="font-semibold">Store settings</p>

                  <p className="mt-1 opacity-80">
                    Manage visibility, shipping and notification preferences.
                  </p>
                </div>
              }
              contentProps={{
                size: "lg",
                side: "top",
              }}
            >
              <Button
                variant="outline"
                leftIcon={<Settings className="h-4 w-4" />}
              >
                Rich Content
              </Button>
            </Tooltip>
          </div>
        </div>

        <Card>
          <div className="flex items-start gap-3">
            <Tooltip content="More information about this feature">
              <button
                type="button"
                aria-label="More information"
                className="mt-0.5 rounded-md text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Info className="h-5 w-5" />
              </button>
            </Tooltip>

            <div>
              <h3 className="font-semibold text-foreground">
                Marketplace analytics
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                Hover or focus the information icon to view additional context.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TooltipPlayground;
