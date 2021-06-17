const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/ukb_fe_react_launchpad/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'ukb_fe_react_launchpad',
      remotes: {
        marketing: `ukb_fe_react_onboarding@${domain}/ukb_fe_react_onboarding/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
