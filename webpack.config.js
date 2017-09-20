/* global module, process, require */

const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const outputDir = process.env.NODE_ENV === 'development' ? '.tmp' : './dist';

let config;
try {
  config = require('./config/local.config');
} catch (ex) {
  config = require('./config/production.config');
}

const entryConfig = {
  'drNim': './ui/module/drNim/drNim.jsx'
};

// Plugin Config
// This is set outside the rest of the object so we can manipulate it
const pluginConfig = [
  // Clear dist directory
  new CleanWebpackPlugin(['.tmp']),
  new CleanWebpackPlugin(['dist']),

  // Set export path for generated style sheets
  new ExtractTextPlugin('[name].min.css'),

  // Minify generated CSS
  new OptimizeCssAssetsPlugin({
    assetNameRegExp: /\.min\.css$/,
    cssProcessorOptions: { discardComments: { removeAll: true }}
  }),

  // Copy static Assets
  new CopyWebpackPlugin([
    { from: 'ui/asset', to: 'asset/' }
  ]),

  // Build the HTML files
  // Profile
  new HtmlWebpackPlugin(Object.assign(
    { filename: 'module/drNim/index.html', template: './views/base.ejs', inject: false },
    config.drNim
  ))
];

// When not in development, minify outpus scripts
if (process.env.NODE_ENV !== 'development') {
  // Compress JS files
  // new webpack.optimize.UglifyJsPlugin(),
}

module.exports = {
  entry: entryConfig,
  output: {
    path: path.resolve(`${outputDir}/`),
    filename: '[name].min.js'
  },
  module: {
    loaders: [
      // Javascript Files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: ['es2015'] }
      },

      // Jsx React Files
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        query: { presets: [ 'react', 'es2015' ] }
      },

      // Scss files
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract([ 'css-loader', 'sass-loader' ])
      },

      // EJS Tempaltes
      {
        test: /\.ejs$/,
        loader: 'ejs-loader'
      }
    ]
  },
  plugins: pluginConfig,
  resolve: {
    alias: {
      // Component: path.resolve(__dirname, './ui/components/'),
      // Style: path.resolve(__dirname, './ui/style/')
    }
  }
};
