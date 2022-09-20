const { loadConfigFromFile, mergeConfig } = require('vite');
const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite'
  },
  features: {
    storyStoreV7: true,
    interactionsDebugger: true
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      plugins: [],
      resolve: {
        alias: [{ find: '~', replacement: path.resolve(__dirname, '../src') }]
      }
    });
  }
};
