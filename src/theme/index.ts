import merge from "lodash/merge";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import type { Direction, Theme, ThemeOptions } from "@material-ui/core";
import { THEMES } from "src/utils/constants";
import { lightShadows, darkShadows } from "./shadows";

const ORANGE = "#E87500";
const GREEN = "#283F3D";

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    card: Palette["primary"];
  }
  interface PaletteOptions {
    card: PaletteOptions["primary"];
  }
}

interface ThemeConfig {
  direction?: Direction;
  responsiveFontSizes?: boolean;
  roundedCorners?: boolean;
  theme?: string;
}

const baseOptions: ThemeOptions = {
  direction: "ltr",
  components: {
    MuiAvatar: {
      styleOverrides: {
        fallback: {
          height: "75%",
          width: "75%",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: "h6",
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          overflow: "hidden",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "auto",
          marginRight: "16px",
        },
      },
    },
  },
  typography: {
    button: {
      fontWeight: 600,
    },
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    h1: {
      fontWeight: 600,
      fontSize: "3.5rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "3rem",
    },
    h3: {
      fontWeight: 600,
      fontSize: "2.25rem",
    },
    h4: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1.125rem",
    },
    overline: {
      fontWeight: 600,
    },
    body1: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    },
    body2: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    },
  },
};

const themesOptions: Record<string, ThemeOptions> = {
  [THEMES.LIGHT]: {
    components: {
      MuiInputBase: {
        styleOverrides: {
          input: {
            "&::placeholder": {
              opacity: 0.86,
              color: "#42526e",
            },
          },
        },
      },
    },
    palette: {
      mode: "light",
      card: {
        main: "#F7F4F1",
      },
      action: {
        active: "#6b778c",
      },
      background: {
        default: "#f4f5f7",
        paper: "#ffffff",
      },
      error: {
        contrastText: "#ffffff",
        main: "#f44336",
      },
      primary: {
        contrastText: "#ffffff",
        main: ORANGE,
      },
      secondary: {
        contrastText: "#ffffff",
        main: GREEN,
      },
      success: {
        contrastText: "#ffffff",
        main: "#4caf50",
      },
      text: {
        primary: "#172b4d",
        secondary: "#6b778c",
      },
      warning: {
        contrastText: "#ffffff",
        main: "#ff9800",
      },
    },
    shadows: lightShadows,
  },
  [THEMES.DARK]: {
    components: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderBottom: "1px solid rgba(145, 158, 171, 0.24)",
          },
        },
      },
    },
    palette: {
      mode: "dark",
      card: {
        main: "#252320",
      },
      background: {
        default: "#171c24",
        paper: "#222b36",
      },
      divider: "rgba(145, 158, 171, 0.24)",
      error: {
        contrastText: "#ffffff",
        main: "#f44336",
      },
      primary: {
        contrastText: "#ffffff",
        main: ORANGE,
      },
      secondary: {
        contrastText: "#ffffff",
        main: GREEN,
      },
      success: {
        contrastText: "#ffffff",
        main: "#4caf50",
      },
      text: {
        primary: "#ffffff",
        secondary: "#919eab",
      },
      warning: {
        contrastText: "#ffffff",
        main: "#ff9800",
      },
    },
    shadows: darkShadows,
  },
};

export const createTheme = (config: ThemeConfig = {}): Theme => {
  let themeOptions = themesOptions[config.theme];

  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    themeOptions = themesOptions[THEMES.LIGHT];
  }

  let theme = createMuiTheme(
    merge(
      {},
      baseOptions,
      themeOptions,
      {
        ...(config.roundedCorners && {
          shape: {
            borderRadius: 16,
          },
        }),
      },
      {
        direction: config.direction,
      }
    )
  );

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};

export const storybookThemeLight = createMuiTheme(
  merge({}, baseOptions, themesOptions.LIGHT)
);

export const storybookThemeDark = createMuiTheme(
  merge({}, baseOptions, themesOptions.DARK)
);
