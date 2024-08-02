import {
  createTheme,
  CSSVariablesResolver,
  DEFAULT_THEME,
  mergeMantineTheme
} from "@mantine/core";

const themeOverride = createTheme({
  autoContrast: true,
  colors: {
    lightBlue: [
      "#dffcff",
      "#cbf5ff",
      "#9ae7ff",
      "#64daff",
      "#3ccffe",
      "#24c8fe",
      "#09c4ff",
      "#00ade4",
      "#009acc",
      "#0085b5"
    ]
  },
  cursorType: "pointer",
  defaultRadius: 6,
  focusRing: "auto",
  fontFamily: "'Inter Variable', sans-serif",
  headings: {
    fontFamily: "'Inter Variable', sans-serif"
  },
  primaryColor: "lightBlue"
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

export const resolver: CSSVariablesResolver = () => ({
  variables: {},
  light: {},
  dark: {}
});
