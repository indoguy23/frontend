import { Moon, Sun } from "lucide-react";

import useTheme from "@/hooks/useTheme";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  const handleToggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={handleToggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={[
        "inline-flex h-10 w-10 items-center justify-center",
        "rounded-full border border-border",
        "bg-card text-foreground",
        "transition-all duration-200",
        "hover:bg-muted",
        "focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-ring",
        "focus-visible:ring-offset-2",
        "focus-visible:ring-offset-background",
      ].join(" ")}
    >
      {isDark ? (
        <Sun aria-hidden="true" className="h-5 w-5" />
      ) : (
        <Moon aria-hidden="true" className="h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
