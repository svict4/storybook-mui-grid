import { addDecorator } from "@storybook/react";
import { withThemes } from "@react-theming/storybook-addon";
import ThemeProvider from "./ThemeProvider";

import { storybookThemeLight, storybookThemeDark } from "src/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  playroom: {
    // Because Playroom is built inside Storybook on this example's deploy,
    // we must define the absolute path to it when NODE_ENV is production,
    // otherwise set undefined to use the default Playroom URL (localhost)
    url: process.env.NODE_ENV === "production" ? "/playroom/" : undefined
  }
};

addDecorator(
  withThemes(ThemeProvider, [storybookThemeLight, storybookThemeDark])
);
