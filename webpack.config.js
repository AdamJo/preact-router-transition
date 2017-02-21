var path = require('path');

module.exports = {
	entry: './src',

	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js'
	},

	module: {
		rules: [
			{
				test: /\.jsx?/i,
				loader: 'babel-loader',
				options: {
					presets: [
						'es2015'
					],
					plugins: [
						['transform-react-jsx', { pragma: 'h' }]
					]
				}
			},
			{
				test: /(\.scss|\.css)/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: { modules: true, importLoaders: 1, localIdentName: '[name]__[local]___[hash:base64:5]'}
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.css', '.scss']
	},
	devServer: {
		contentBase: path.join(__dirname, 'src'),
		compress: true,
		historyApiFallback: true
	}
};