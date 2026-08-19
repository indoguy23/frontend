import { useState } from "react";

import { Menu, X } from "lucide-react";

import Sidebar from "@/components/common/Sidebar";
import ThemeToggle from "@/components/common/ThemeToggle";
import Button from "@/components/ui/Button";
import { cn } from "@/utils/cn";

import { dashboardLayoutStyles } from "./DashboardLayout.styles";
import type { DashboardLayoutProps } from "./DashboardLayout.types";

const DashboardLayout = ({
  children,
  sidebarGroups,
  activePath,
  title,
  description,
  headerActions,
  className,
}: DashboardLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className={cn(dashboardLayoutStyles.root, className)}>
      {/* Desktop Sidebar */}

      <div className={dashboardLayoutStyles.desktopSidebar}>
        <Sidebar
          groups={sidebarGroups}
          activePath={activePath}
          collapsed={collapsed}
          onCollapsedChange={setCollapsed}
        />
      </div>

      {/* Mobile Overlay */}

      {mobileOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          className={dashboardLayoutStyles.mobileOverlay}
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}

      {mobileOpen && (
        <div className={dashboardLayoutStyles.mobileSidebar}>
          <div className="relative h-full">
            <Sidebar groups={sidebarGroups} activePath={activePath} />

            <Button
              size="icon"
              variant="ghost"
              aria-label="Close sidebar"
              className="absolute right-3 top-3"
              onClick={() => setMobileOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
      )}

      {/* Main Area */}

      <div
        className={cn(
          dashboardLayoutStyles.content,
          collapsed
            ? dashboardLayoutStyles.collapsedContent
            : dashboardLayoutStyles.expandedContent,
        )}
      >
        {/* Header */}

        <header className={dashboardLayoutStyles.header}>
          <div className={dashboardLayoutStyles.headerInner}>
            <div className={dashboardLayoutStyles.headerLeft}>
              <Button
                size="icon"
                variant="ghost"
                aria-label="Open sidebar"
                className="lg:hidden"
                onClick={() => setMobileOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>

              <div className={dashboardLayoutStyles.titleWrapper}>
                {title && (
                  <h1 className={dashboardLayoutStyles.title}>{title}</h1>
                )}

                {description && (
                  <p className={dashboardLayoutStyles.description}>
                    {description}
                  </p>
                )}
              </div>
            </div>

            <div className={dashboardLayoutStyles.headerActions}>
              {headerActions}

              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Page Content */}

        <main className={dashboardLayoutStyles.main}>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
