import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";

// console.log(mode.toString())//("yellow", "red")("light"))
/*
"activeBackground": "#23272e",
"activeForeground": "#dcdcdc",
"border": "#181a1f",
"hoverBackground": "#323842",
"inactiveBackground": "#1e2227",
"ansiBlack": "#3f4451",
"ansiBlue": "#4aa5f0",
"ansiBrightBlack": "#4f5666",
"ansiBrightBlue": "#4dc4ff",
"ansiBrightCyan": "#4cd1e0",
"ansiBrightGreen": "#a5e075",
"ansiBrightMagenta": "#de73ff",
"ansiBrightRed": "#ff616e",
"ansiBrightWhite": "#d7dae0",
"ansiBrightYellow": "#f0a45d",
"ansiCyan": "#42b3c2",
"ansiGreen": "#8cc265",
"ansiMagenta": "#c162de",
"ansiRed": "#e05561",
"ansiWhite": "#e6e6e6",
"ansiYellow": "#d18f52",
"background": "#23272e",
"foreground": "#abb2bf",
"selectionBackground": "#abb2bf30",
"background": "#2e3440",
"border": "#4b5362",
"textLink": "#61afef",
"textPreformat": "#d19a66",
"activeForeground": "#9da5b4",
"inactiveForeground": "#6b717d",
*/
// const m = colorMode === "dark" ? dark : light

const colors = {
  ansiBlack: "#3f4451",
  ansiBlue: "#4aa5f0",
  ansiBrightBlack: "#4f5666",
  ansiBrightBlue: "#4dc4ff",
  ansiBrightCyan: "#4cd1e0",
  ansiBrightGreen: "#a5e075",
  ansiBrightMagenta: "#de73ff",
  ansiBrightRed: "#ff616e",
  ansiBrightWhite: "#e6e6e6",
  ansiBrightYellow: "#f0a45d",
  ansiCyan: "#42b3c2",
  ansiGreen: "#8cc265",
  ansiMagenta: "#c162de",
  ansiRed: "#e05561",
  ansiWhite: "#d7dae0",
  ansiYellow: "#d18f52",
  background: "#23272e",
  foreground: "#abb2bf",
  selectionBackground: "#abb2bf30",
  comment: "#5c6370",
};
const styles = extendTheme({
  colors: {
    black: {
      dark: colors.background,
      normal: colors.ansiBlack,
      bright: colors.ansiBrightBlack,
    },
    white: {
      dark: colors.foreground,
      normal: colors.ansiWhite,
      bright: colors.ansiBrightWhite,
    },
    magenta: {
      normal: colors.ansiMagenta,
      bright: colors.ansiBrightMagenta,
    },
    blue: {
      normal: colors.ansiBlue,
      bright: colors.ansiBrightBlue,
    },
    cyan: {
      normal: colors.ansiCyan,
      bright: colors.ansiBrightCyan,
    },
    green: {
      normal: colors.ansiGreen,
      bright: colors.ansiBrightGreen,
    },
    red: {
      normal: colors.ansiRed,
      bright: colors.ansiBrightRed,
    },
    yellow: {
      normal: colors.ansiYellow,
      bright: colors.ansiBrightYellow,
    },
    comment: colors.comment,
  },
  shadows: {
    xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    outline: `0 0 0 3px ${colors.ansiBrightCyan}`,
    inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
    none: "none",
    "dark-lg":
      "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px",
  },
  styles: {
    global: (props: Dict<any>) => ({
      html: {
        backgroundColor: mode("white.bright", "black.dark")(props),
        color: mode("black.dark", "white.bright")(props),
      },
      body: {
        fontFamily: "Nunito",
        backgroundColor: mode("white.bright", "black.dark")(props),
        color: mode("black.dark", "white.bright")(props),
      },
    }),
  },
});

export default styles;
