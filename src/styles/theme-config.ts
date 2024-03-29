export type FontFamily = "primary";

export type DeviceBreakpoint = "mobile";

export type Color =
  | "primary"
  | "primaryLight"
  | "backgroundSecondary"
  | "background"
  | "white"
  | "border";

export type Spacing = "base" | "medium" | "small";

export type FontSize = "xsmall" | "small" | "regular";

export type FontWeight = "bold" | "light" | "regular";

export interface Theme {
  fontFamily: { [key in FontFamily]: string };
  color: { [key in Color]: string };
  spacing: { [key in Spacing]: string };
  deviceBreakpoint: { [key in DeviceBreakpoint]: string };
  fontSize: { [key in FontSize]: string };
  fontWeight: { [key in FontWeight]: number };
}

export const progressColor = {
  light: {
    from: "#3B5AF7",
    to: "#8AACFF",
    trail: "#ECF1FF",
  },
};

export const theme: Theme = {
  fontFamily: {
    primary: "Montserrat",
  },
  color: {
    primary: "#070F25",
    primaryLight: "#0253C8",
    background: "#F8F8FB",
    backgroundSecondary: "#dedede",
    border: "#D9E3FE",
    white: "#FFF",
  },
  fontSize: {
    xsmall: "12px",
    small: "14px",
    regular: "16px",
  },
  fontWeight: {
    bold: 700,
    regular: 400,
    light: 300,
  },
  spacing: {
    small: "10px",
    medium: "20px",
    base: "40px",
  },
  deviceBreakpoint: {
    mobile: "992px",
  },
};
