import { Check, Monitor, Moon, Sun, type LucideIcon } from "lucide-react";

import { THEME_OPTIONS } from "@/constants/theme";
import useTheme from "@/hooks/useTheme";
import type { ThemeMode } from "@/types/theme";

const themeIcons: Record<ThemeMode, LucideIcon> = {
  light: Sun,
  dark: Moon,
  system: Monitor,
};

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="inline-flex rounded-xl border border-border bg-card p-1"
      role="group"
      aria-label="Choose color theme"
    >
      {THEME_OPTIONS.map((option) => {
        const Icon = themeIcons[option.value];
        const isActive = theme === option.value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setTheme(option.value)}
            aria-label={`Use ${option.label.toLowerCase()} theme`}
            aria-pressed={isActive}
            title={`${option.label} theme`}
            className={[
              "relative inline-flex min-h-10 min-w-10 items-center justify-center rounded-lg px-3",
              "transition-colors duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            ].join(" ")}
          >
            <Icon aria-hidden="true" className="h-4 w-4" />

            <span className="sr-only">{option.label}</span>

            {isActive && (
              <Check
                aria-hidden="true"
                className="absolute right-1 top-1 h-3 w-3"
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default ThemeToggle;
