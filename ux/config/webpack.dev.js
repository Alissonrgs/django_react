const merge = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common.js')
const webpack = require('webpack')
const BundleTracker = require('webpack-bundle-tracker')
const CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = merge(common, {
  mode: 'development',
  entry: [
    './src/index.js',
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve('dist'),
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    },
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 3000
  },
  plugins: [
    new BundleTracker({
      filename: './config/webpack-stats.json'
    }),
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name]-[hash].js',
    path: path.resolve('dist'),
    publicPath: 'http://localhost:3000/static/'
  }
})