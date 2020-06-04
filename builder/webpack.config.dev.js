const { join } = require('path');
const webpack = require('webpack');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const baseConfig = require('./webpack.config.base');
const { DEV_PORT, DEV_IP, getEntries, getPagePlugins } = require('./helper');

const BASE_DIR = join(__dirname, '..');

const config = merge.smart(baseConfig, {
  entry: getEntries('./examples_src/**/*.js', true),

  output: {
    filename: '[name].[hash].js',
    path: join(BASE_DIR, 'dist'),
    publicPath: `http://${DEV_IP}:${DEV_PORT}/`,
  },
  devtool: 'cheap-source-map',
  plugins: [
    ...getPagePlugins('./examples_src/**/*.html', true),
    new HtmlWebpackHarddiskPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new CopyWebpackPlugin([
      {
        from: 'node_modules/monaco-editor/min/vs',
        to: 'vs',
      },
    ]),
  ],
});

module.exports = config;
