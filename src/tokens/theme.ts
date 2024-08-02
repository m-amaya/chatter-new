import {
  Button,
  createTheme,
  CSSVariablesResolver,
  DEFAULT_THEME,
  mergeMantineTheme,
  TextInput
} from "@mantine/core";

const themeOverride = createTheme({
  autoContrast: true,
  colors: {
    burntOrange: [
      "#fff6ed",
      "#ffebd5",
      "#fed2aa",
      "#fdb374",
      "#fc873b",
      "#fa6615",
      "#eb4c0b",
      "#c3370b",
      "#9a2d12",
      "#862a13"
    ]
  },
  cursorType: "pointer",
  defaultRadius: 0,
  focusRing: "auto",
  fontFamily: "'Inter Variable', sans-serif",
  headings: {
    fontFamily: "'Anton', sans-serif",
    fontWeight: "400",
    sizes: {
      h1: {
        fontSize: "3rem"
      },
      h2: {
        fontSize: "2.5rem"
      },
      h3: {
        fontSize: "2rem"
      }
    }
  },
  primaryColor: "burntOrange",
  components: {
    Button: Button.extend({
      defaultProps: {
        gradient: { from: "burntOrange.5", to: "burntOrange.7" },
        variant: "gradient"
      }
    }),
    TextInput: TextInput.extend({
      styles: {
        input: {
          "--input-bd": "var(--mantine-color-burntOrange-1)",
          "--input-bg": "var(--mantine-color-burntOrange-1)",
          "--input-color": "var(--mantine-color-burntOrange-9)"
        }
      }
    })
  }
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

export const resolver: CSSVariablesResolver = () => ({
  variables: {
    "--mantine-color-burntOrange-black": "#1f0500"
  },
  light: {
    "--mantine-color-placeholder": "var(--mantine-color-burntOrange-9)",
    "--mantine-color-text": "var(--mantine-color-burntOrange-black)"
  },
  dark: {
    "--mantine-color-body": "var(--mantine-color-burntOrange-black)"
  }
});
