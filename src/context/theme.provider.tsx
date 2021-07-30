import React, { ReactNode } from "react";
import { theme } from "@styles/theme-config";
import { GlobalStyles } from "@styles/global.styles";
import { ResetStyles } from "@styles/reset.styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <StyledThemeProvider theme={theme}>
    <ResetStyles />
    <GlobalStyles />
    {children}
  </StyledThemeProvider>
);
