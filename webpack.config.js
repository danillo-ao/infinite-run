const webpack = require('webpack');
const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');


module.exports = {
  watch: true,
  entry: './src/ts/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [new TsconfigPathsPlugin()]
  },
  module: {
    rules : [{
      test: /\.tsx?$/,
      loader: "ts-loader",
      exclude: /node_modules/,
    }, {
      test: /\.scss$/,
      use: [
        { loader: MiniCssExtractPlugin.loader },
        "css-loader",
        "sass-loader"
      ]
    }, {
      test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "main.css" })
  ]
};
