import { useEffect, useState } from "react";

export type AccentColor =
  | "amber"
  | "blue"
  | "green"
  | "red"
  | "purple"
  | "pink"
  | "indigo"
  | "cyan"
  | "teal"
  | "orange"
  | "lime"
  | "gray";

export type FontSize = "small" | "medium" | "large";
export type Appearance = "light" | "dark" | "system";

export interface ThemeConfig {
  accentColor: AccentColor;
  fontSize: FontSize;
  appearance: Appearance;
}

const defaultTheme: ThemeConfig = {
  accentColor: "amber",
  fontSize: "medium",
  appearance: "system",
};

const fontSizeMap: Record<FontSize, string> = {
  small: "14px",
  medium: "16px",
  large: "18px",
};

const accentColorMap: Record<AccentColor, string> = {
  amber: "var(--amber-9)",
  blue: "var(--blue-9)",
  green: "var(--green-9)",
  red: "var(--red-9)",
  purple: "var(--purple-9)",
  pink: "var(--pink-9)",
  indigo: "var(--indigo-9)",
  cyan: "var(--cyan-9)",
  teal: "var(--teal-9)",
  orange: "var(--orange-9)",
  lime: "var(--lime-9)",
  gray: "var(--gray-9)",
};

export function useTheme() {
  const [theme, setTheme] = useState<ThemeConfig>(defaultTheme);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      try {
        const parsedTheme = JSON.parse(savedTheme);
        setTheme({ ...defaultTheme, ...parsedTheme });
      } catch (error) {
        console.error("Failed to parse saved theme:", error);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save theme to localStorage and apply CSS variables
  useEffect(() => {
    if (!isLoaded || typeof window === "undefined") return;

    localStorage.setItem("theme", JSON.stringify(theme));

    // Apply CSS custom properties
    const root = document.documentElement;
    root.style.setProperty("--accent-color", accentColorMap[theme.accentColor]);
    root.style.setProperty("--font-size-base", fontSizeMap[theme.fontSize]);

    // Handle appearance
    if (theme.appearance === "system") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      root.classList.toggle("dark", prefersDark);
    } else {
      root.classList.toggle("dark", theme.appearance === "dark");
    }
  }, [theme, isLoaded]);

  // Listen for system theme changes when appearance is "system"
  useEffect(() => {
    if (theme.appearance !== "system" || typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const root = document.documentElement;
      root.classList.toggle("dark", mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme.appearance]);

  const updateTheme = (updates: Partial<ThemeConfig>) => {
    setTheme((prev) => ({ ...prev, ...updates }));
  };

  const resetTheme = () => {
    setTheme(defaultTheme);
  };

  return {
    theme,
    updateTheme,
    resetTheme,
    isLoaded,
  };
}
