const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {    
		filename: 'bundle.js',
		 path: path.resolve(__dirname, 'dist'),
	 },
	devServer: {
		port: 8085,
	},
	module: {
		rules: [
			{
				/* The following line to ask babel 
						 to compile any file with extension
						 .js */
				test: /\.js?$/,

				/* exclude node_modules directory from babel. 
						Babel will not compile any files in this directory*/
				exclude: /node_modules/,

				// To Use babel Loader
				loader:
					'babel-loader',
				options: {
					presets: [
						'@babel/preset-env' /* to transfer any advansed ES to ES5 */,
						'@babel/preset-react',
					], // to compile react to ES5
				},
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},

	plugins: [
		new ModuleFederationPlugin(
			{
				name: 'ukb_fe_react_launchpad_commons',
				filename: 'commons.js',
				exposes: {
					"./UkbButton": "./src/components/atoms/UkbButton/UkbButton",
					"./UkbTextbox": "./src/components/atoms/UkbTextbox/UkbTextbox"
				},
				shared: {
					react: { singleton: true },
					"react-dom": { singleton: true },
					bootstrap: { singleton: true },
					"react-bootstrap": { singleton: true }
				}
			}
		),
		new HtmlWebpackPlugin({
			template:
				'./public/index.html',
		}),
	],
};