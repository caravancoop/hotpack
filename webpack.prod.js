const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  mode: 'production',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')]
            }
          },
          'fast-sass-loader'
        ]
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          { loader: 'file-loader',
            options: {
              emitFile: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    new OptimizeCssAssetsPlugin(),
    new BundleTracker({ path: path.resolve(__dirname, 'dist') }),
    new CopyWebpackPlugin([
      {
        from: 'src/img',
        to: 'img/[name].[hash].[ext]'
      },
      {
        from: 'dist',
        to: path.resolve(__dirname, '../backend/static')
      }
    ])
  ]
}
