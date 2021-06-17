const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react', '@babel/preset-env'],
						plugins: ['@babel/plugin-transform-runtime'],
					},
				},
			},
			{
					test: /\.css$/i,
					use: ['style-loader', 'css-loader'],
			},
			{
					test: /\.(png|svg|jpg|jpeg|gif)$/i,
					type: 'asset/resource',
			}
		],
	},
	plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ]
};
