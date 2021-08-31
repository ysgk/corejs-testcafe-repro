const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: 'src/index.js',
  output: {
    path: 'dist',
    filename: 'js/[name]-[contenthash].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      // favicon: path.resolve(__dirname, 'favicon.png'),
      hash: true,
    }),
  ],
  optimization: {
    minimize: false,
  },
}
