const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/js/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src/scss'),
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        include: path.resolve(__dirname, 'src/assets'),
        use: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      jquery: 'jquery/dist/jquery.slim.min.js'
    }
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      Popper: 'popper.js'
    })
  ]
};
