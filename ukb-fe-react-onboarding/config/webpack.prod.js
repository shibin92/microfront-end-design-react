const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/ukb_fe_react_onboarding/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'ukb_fe_react_onboarding',
      filename: 'remoteEntry.js',
      exposes: {
        './OnboardingApp': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
