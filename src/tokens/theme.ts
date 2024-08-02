import {
  Button,
  createTheme,
  CSSVariablesResolver,
  DEFAULT_THEME,
  Menu,
  mergeMantineTheme,
  rgba,
  TextInput,
  Tooltip
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
    Menu: Menu.extend({
      defaultProps: {
        offset: 10
      },
      styles: {
        dropdown: {
          backgroundColor: "var(--mantine-dropdown-bg)",
          borderColor: "var(--mantine-border-color)",
          borderRadius: "3px",
          padding: 0
        },
        item: {
          "--menu-item-hover": "pink",
          borderBottom: "1px solid var(--mantine-border-color)",
          padding: "12px"
        },
        itemLabel: {
          fontSize: "var(--mantine-font-size-md)"
        }
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
    }),
    Tooltip: Tooltip.extend({
      defaultProps: {
        offset: 10
      },
      styles: {
        tooltip: {
          "--tooltip-bg": "var(--mantine-tooltip-bg)",
          "--tooltip-radius": "3px",
          border: "1px solid var(--mantine-border-color)",
          color: "var(--mantine-color-text)"
        }
      }
    })
  },
  other: {
    colors: {
      burntOrange: {
        black: "#1f0500",
        backgroundZ1: "#2b120b",
        backgroundZ2: "#361e17",
        border: {
          dark: rgba("#fff6ed", 0.2)
        },
        hover: {
          dark: rgba("#fff6ed", 0.05)
        }
      }
    }
  }
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    "--mantine-color-burntOrange-black": theme.other.colors.burntOrange.black,
    "--mantine-color-burntOrange-border-dark":
      theme.other.colors.burntOrange.border.dark,
    "--mantine-color-burntOrange-hover-dark":
      theme.other.colors.burntOrange.hover.dark
  },
  light: {
    "--mantine-color-placeholder": theme.colors.burntOrange[9],
    "--mantine-color-text": theme.other.colors.burntOrange.black,
    "--mantine-tooltip-bg": theme.colors.dark[9],
    "--mantine-dropdown-bg": theme.colors.burntOrange[1]
  },
  dark: {
    "--mantine-border-color": theme.other.colors.burntOrange.border.dark,
    "--mantine-color-body": theme.other.colors.burntOrange.black,
    "--mantine-color-placeholder": theme.colors.burntOrange[9],
    "--mantine-tooltip-bg": theme.other.colors.burntOrange.backgroundZ1,
    "--mantine-dropdown-bg": theme.other.colors.burntOrange.backgroundZ1,
    "--mantine-dropdown-item-hover": theme.other.colors.burntOrange.backgroundZ2
  }
});
