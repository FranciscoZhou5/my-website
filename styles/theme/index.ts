import { ComponentStyleConfig, extendTheme, keyframes } from "@chakra-ui/react";

const fonts = {
  heading: "var(--inter-font)",
  body: "var(--inter-font)",
};

const styles = {
  global: {
    "html, body": {
      backgroundColor: "background-primary",
      color: "white",
    },
  },
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const colors = {
  primary: "#8093F1",

  "background-primary": "#151515",
  "background-secundary": "#111111",

  // border: "#3F444E",
  border: "#202227",

  "text-weak": "#a1a1a1",
};

export const theme = extendTheme({
  fonts,
  styles,
  breakpoints,
  config,
  colors,
  components: {},
});
