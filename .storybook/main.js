const path = require("path");
const toPath = (filePath) => path.join(process.cwd(), filePath);

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/preset-create-react-app",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@react-theming/storybook-addon",
    "@storybook/addon-a11y",
    "@storybook/addon-design-assets",
    "@storybook/addon-jest",
    "storybook-addon-playroom",
    "@storybook/addon-actions/register",
  ],
};
