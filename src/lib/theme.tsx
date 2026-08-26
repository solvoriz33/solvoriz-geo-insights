import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Theme = "light" | "dark";

const KEY = "solvoriz.theme";

type ThemeContextValue = {
  theme: Theme;
  hasChosen: boolean;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [hasChosen, setHasChosen] = useState(true);

  useEffect(() => {
    const stored = window.localStorage.getItem(KEY) as Theme | null;
    if (stored === "light" || stored === "dark") {
      setThemeState(stored);
      setHasChosen(true);
    } else {
      setHasChosen(false);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    setHasChosen(true);
    window.localStorage.setItem(KEY, next);
  }, []);

  const value = useMemo(() => ({ theme, hasChosen, setTheme }), [theme, hasChosen, setTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
