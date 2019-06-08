const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        include: path.resolve(__dirname, 'src/img'),
        use: 'file-loader'
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)$/,
        include: path.resolve(__dirname, 'src/fonts'),
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist/*']),
    new MiniCssExtractPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      Popper: 'popper.js'
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/assets',
        to: 'assets'
      },
      {
        from: 'src/fonts',
        to: 'fonts'
      },
      {
        from: 'dist',
        to: path.resolve(__dirname, '../backend/static')
      }
    ])
  ]
};
