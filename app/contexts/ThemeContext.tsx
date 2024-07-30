"use client";

import React, { createContext, useState } from "react";

const themeOptions = ["system", "light", "dark"] as const;

type Theme = (typeof themeOptions)[number];
type InitialState = {
  theme: Theme;
  changeTheme: (selectTheme: Theme) => void;
};

const DEFAULT_THEME = "system";

const initialSTate: InitialState = {
  theme: DEFAULT_THEME,
  changeTheme: () => {},
};

export const ThemeContext = createContext(initialSTate);

function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);

  const value = {
    theme,
    changeTheme: (selectedTheme: Theme) => {
      setTheme(selectedTheme);
    },
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
