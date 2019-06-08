const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  mode: 'production',
  entry: './src/js/index.js',
  output: {
    path: __dirname + '/dist',
    filename: '[name].[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          },
          {
            loader: 'eslint-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src/scss'),
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => autoprefixer()
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        include: path.resolve(__dirname, 'src/img'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/'
            }
          },
          'image-webpack-loader'
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)$/,
        include: path.resolve(__dirname, 'src/fonts'),
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      template: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[contenthash].css'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      Popper: 'popper.js'
    }),
    new MiniCssExtractPlugin(),
    new BundleTracker({filename: './webpack-stats.json'})
  ],

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false
          }
        }
      }),
      new OptimizeCssAssetsPlugin()
    ]
  }
};
