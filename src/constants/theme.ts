import type { ThemeMode } from "@/types/theme";


export const THEME_STORAGE_KEY = "markethub-theme";

export const DEFAULT_THEME: ThemeMode = "system";

export const THEME_OPTIONS: Array<{
  label: string;
  value: ThemeMode;
}> = [
  {
    label: "Light",
    value: "light",
  },
  {
    label: "Dark",
    value: "dark",
  },
  {
    label: "System",
    value: "system",
  },
];
