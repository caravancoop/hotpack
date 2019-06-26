// Use path to avoid operating system issues
const path = require('path')
const webpack = require('webpack')

module.exports = {
  devServer: {
    // Required for Docker to find assets
    host: '0.0.0.0',
    // Faster requests
    http2: true,
    // Full screen errors displayed
    overlay: true,
    // Hot module replacement
    hot: true
  },
  // Log and errors correct lines
  devtool: 'cheap-module-eval-source-map',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src/scss'),
        use: ['style-loader', 'css-loader', 'fast-sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
