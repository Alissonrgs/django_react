const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const BundleTracker = require('webpack-bundle-tracker')
const CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = merge(common, {
  mode: 'production',
  entry: [
    './src/index.js'
  ],
  plugins: [
    new BundleTracker({
      filename: './config/webpack-stats.json'
    }),
    new CleanWebpackPlugin(['dist'])
  ],
  output: {
    filename: '[name]-[hash].js',
    path: path.resolve('dist'),
    publicPath: '/static/'
  }
})