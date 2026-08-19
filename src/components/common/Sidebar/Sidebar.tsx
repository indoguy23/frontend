import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "@/components/ui/Button";
import Tooltip from "@/components/ui/Tooltip";
import { cn } from "@/utils/cn";

import { sidebarStyles } from "./Sidebar.styles";
import type { SidebarProps } from "./Sidebar.types";

const Sidebar = ({
  groups,
  activePath,
  collapsed = false,
  onCollapsedChange,
  className,
}: SidebarProps) => {
  return (
    <aside
      className={cn(
        sidebarStyles.root,
        collapsed ? sidebarStyles.collapsed : sidebarStyles.expanded,
        className,
      )}
    >
      <div className={sidebarStyles.header}>
        <Link to="/" className={sidebarStyles.brand}>
          <span className={sidebarStyles.brandMark}>MH</span>

          {!collapsed && <span>MarketHub</span>}
        </Link>
      </div>

      <nav aria-label="Dashboard navigation" className={sidebarStyles.content}>
        {groups.map((group, groupIndex) => (
          <div
            key={group.id}
            className={cn(
              sidebarStyles.group,
              groupIndex > 0 && sidebarStyles.groupSpacing,
            )}
          >
            {!collapsed && group.label && (
              <p className={sidebarStyles.groupLabel}>{group.label}</p>
            )}

            {group.items.map((item) => {
              const Icon = item.icon;

              const isActive = activePath === item.href;

              const content = (
                <Link
                  to={item.href}
                  aria-current={isActive ? "page" : undefined}
                  aria-disabled={item.disabled ? "true" : undefined}
                  tabIndex={item.disabled ? -1 : undefined}
                  className={cn(
                    sidebarStyles.item,
                    isActive && sidebarStyles.activeItem,
                    item.disabled && sidebarStyles.disabledItem,
                  )}
                  onClick={(event) => {
                    if (item.disabled) {
                      event.preventDefault();
                    }
                  }}
                >
                  <Icon aria-hidden="true" className={sidebarStyles.icon} />

                  {!collapsed && (
                    <>
                      <span className={sidebarStyles.label}>{item.label}</span>

                      {item.badge !== undefined && (
                        <span className={sidebarStyles.badge}>
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </Link>
              );

              if (!collapsed) {
                return <div key={item.id}>{content}</div>;
              }

              return (
                <Tooltip
                  key={item.id}
                  content={item.label}
                  contentProps={{
                    side: "right",
                  }}
                >
                  {content}
                </Tooltip>
              );
            })}
          </div>
        ))}
      </nav>

      <div className={sidebarStyles.footer}>
        <Button
          variant="ghost"
          size={collapsed ? "icon" : "md"}
          className={cn(!collapsed && "w-full justify-start")}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          onClick={() => onCollapsedChange?.(!collapsed)}
          leftIcon={
            !collapsed ? <ChevronLeft className="h-4 w-4" /> : undefined
          }
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : "Collapse"}
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
