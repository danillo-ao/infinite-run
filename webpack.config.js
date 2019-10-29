const webpack = require('webpack');
const path = require('path');

module.exports = {
  watch: true,
  entry: './js/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname)
  },
  module: {
    rules : [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    }]
  },
  plugins: []
};
