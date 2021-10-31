const path = require('path');
const TsConfigPathDetector = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../src/stories/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      src: path.resolve(__dirname, '../src'),
    };

    config.resolve.plugins.push(
      new TsConfigPathDetector({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      })
    );
    return config;
  },
};
