const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8086/',
  },
  devServer: {
    port: 8086,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'ukb_fe_react_payment',
      filename: 'remoteEntry.js',
      exposes: {
        './PaymentApp': './src/bootstrap',
      },
			remotes: {
				commons:"ukb_fe_react_launchpad_commons@http://localhost:8085/commons.js",
			},
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
