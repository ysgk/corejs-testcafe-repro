const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * @type import('webpack').Configuration
 */
module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name]-[contenthash].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      // favicon: path.resolve(__dirname, 'favicon.png'),
      hash: true,
    }),
  ],
  optimization: {
    minimize: false,
  },
}
