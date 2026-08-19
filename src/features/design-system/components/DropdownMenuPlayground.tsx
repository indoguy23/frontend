import { useState } from "react";

import {
  Archive,
  Bell,
  Copy,
  Edit3,
  Eye,
  LogOut,
  MoreHorizontal,
  Package,
  Settings,
  ShieldCheck,
  Store,
  Trash2,
  User,
} from "lucide-react";

import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import DropdownMenu from "@/components/ui/DropdownMenu";

const DropdownMenuPlayground = () => {
  const [showNotifications, setShowNotifications] = useState(true);

  const [dashboardView, setDashboardView] = useState("overview");

  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Dropdown Menu Component
        </h2>

        <p className="mt-2 text-muted-foreground">
          Accessible action menus for profiles, products, tables and dashboard
          controls.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* Account menu */}

        <Card>
          <h3 className="font-semibold text-foreground">Account Menu</h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Profile actions with groups, shortcuts and a destructive action.
          </p>

          <div className="mt-5">
            <DropdownMenu>
              <DropdownMenu.Trigger asChild>
                <Button
                  variant="outline"
                  className="h-auto justify-start px-3 py-2"
                >
                  <Avatar
                    alt="Aryan Dewangan"
                    fallback="AD"
                    size="sm"
                    status="online"
                  />

                  <span className="text-left">
                    <span className="block font-semibold">Aryan Dewangan</span>

                    <span className="block text-xs text-muted-foreground">
                      Administrator
                    </span>
                  </span>
                </Button>
              </DropdownMenu.Trigger>

              <DropdownMenu.Content align="start">
                <DropdownMenu.Label>My Account</DropdownMenu.Label>

                <DropdownMenu.Group>
                  <DropdownMenu.Item>
                    <User className="h-4 w-4" />
                    Profile
                    <DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
                  </DropdownMenu.Item>

                  <DropdownMenu.Item>
                    <Settings className="h-4 w-4" />
                    Settings
                    <DropdownMenu.Shortcut>⌘,</DropdownMenu.Shortcut>
                  </DropdownMenu.Item>

                  <DropdownMenu.Item>
                    <ShieldCheck className="h-4 w-4" />
                    Security
                  </DropdownMenu.Item>
                </DropdownMenu.Group>

                <DropdownMenu.Separator />

                <DropdownMenu.CheckboxItem
                  checked={showNotifications}
                  onCheckedChange={(checked) =>
                    setShowNotifications(checked === true)
                  }
                >
                  <Bell className="h-4 w-4" />
                  Notifications
                </DropdownMenu.CheckboxItem>

                <DropdownMenu.Separator />

                <DropdownMenu.Item destructive>
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu>
          </div>
        </Card>

        {/* Product action menu */}

        <Card>
          <h3 className="font-semibold text-foreground">Product Actions</h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Compact row actions with submenu support.
          </p>

          <div className="mt-5 flex items-center justify-between rounded-xl border border-border bg-background p-4">
            <div>
              <p className="font-medium text-foreground">Wireless Headphones</p>

              <p className="mt-1 text-sm text-muted-foreground">
                SKU: MH-HEAD-001
              </p>
            </div>

            <DropdownMenu>
              <DropdownMenu.Trigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  aria-label="Open product actions"
                >
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              </DropdownMenu.Trigger>

              <DropdownMenu.Content>
                <DropdownMenu.Item>
                  <Eye className="h-4 w-4" />
                  View Product
                </DropdownMenu.Item>

                <DropdownMenu.Item>
                  <Edit3 className="h-4 w-4" />
                  Edit Product
                </DropdownMenu.Item>

                <DropdownMenu.Item>
                  <Copy className="h-4 w-4" />
                  Duplicate
                </DropdownMenu.Item>

                <DropdownMenu.Sub>
                  <DropdownMenu.SubTrigger>
                    <Package className="h-4 w-4" />
                    Move to
                  </DropdownMenu.SubTrigger>

                  <DropdownMenu.SubContent>
                    <DropdownMenu.Item>
                      <Store className="h-4 w-4" />
                      Active Products
                    </DropdownMenu.Item>

                    <DropdownMenu.Item>
                      <Archive className="h-4 w-4" />
                      Archive
                    </DropdownMenu.Item>
                  </DropdownMenu.SubContent>
                </DropdownMenu.Sub>

                <DropdownMenu.Separator />

                <DropdownMenu.Item destructive>
                  <Trash2 className="h-4 w-4" />
                  Delete Product
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu>
          </div>
        </Card>

        {/* Radio menu */}

        <Card>
          <h3 className="font-semibold text-foreground">Dashboard View</h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Select one active view using radio items.
          </p>

          <div className="mt-5">
            <DropdownMenu>
              <DropdownMenu.Trigger asChild>
                <Button variant="outline">View: {dashboardView}</Button>
              </DropdownMenu.Trigger>

              <DropdownMenu.Content align="start">
                <DropdownMenu.Label>Select View</DropdownMenu.Label>

                <DropdownMenu.RadioGroup
                  value={dashboardView}
                  onValueChange={setDashboardView}
                >
                  <DropdownMenu.RadioItem value="overview">
                    Overview
                  </DropdownMenu.RadioItem>

                  <DropdownMenu.RadioItem value="analytics">
                    Analytics
                  </DropdownMenu.RadioItem>

                  <DropdownMenu.RadioItem value="reports">
                    Reports
                  </DropdownMenu.RadioItem>
                </DropdownMenu.RadioGroup>
              </DropdownMenu.Content>
            </DropdownMenu>
          </div>
        </Card>

        {/* Disabled items */}

        <Card>
          <h3 className="font-semibold text-foreground">Disabled Actions</h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Unavailable actions remain visible but cannot be selected.
          </p>

          <div className="mt-5">
            <DropdownMenu>
              <DropdownMenu.Trigger asChild>
                <Button variant="outline">Open Actions</Button>
              </DropdownMenu.Trigger>

              <DropdownMenu.Content align="start">
                <DropdownMenu.Item>Available Action</DropdownMenu.Item>

                <DropdownMenu.Item disabled>
                  Requires Permission
                </DropdownMenu.Item>

                <DropdownMenu.Item disabled>Coming Soon</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DropdownMenuPlayground;
