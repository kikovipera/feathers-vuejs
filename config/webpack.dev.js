'use strict';

const webpack = require('webpack');
const config = require('./webpack.base');

config.output.publicPath = '/';
config.entry.unshift('webpack-hot-middleware/client');
config.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
);

config.module.loaders.push({
  test: /\.css$/,
  loader: 'style-loader!css-loader!postcss-loader'
});

module.exports = config;
