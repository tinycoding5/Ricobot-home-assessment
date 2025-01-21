"use client";
import { createTheme, PaletteColorOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface CustomPalette {
    anger: PaletteColorOptions;
    apple: PaletteColorOptions;
    steelBlue: PaletteColorOptions;
    violet: PaletteColorOptions;
    white: PaletteColorOptions;
  }
  /* eslint-disable */
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
  /* eslint-enable */
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    mmd: true;
    lg: true;
    xl: true;
    xxl: true;
    xxxl: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    anger: true;
    apple: true;
    steelBlue: true;
    violet: true;
    white: true;
  }
}

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: string) =>
  augmentColor({ color: { main: mainColor } });
export const theme = createTheme({
  palette: {
    anger: createColor("#F40B27"),
    apple: createColor("#5DBA40"),
    steelBlue: createColor("#5C76B7"),
    violet: createColor("#BC00A3"),
    white: createColor("#FFFFFF"),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 800,
      mmd: 900,
      lg: 1200,
      xl: 1400,
      xxl: 1600,
      xxxl: 1800,
    },
  },
});
