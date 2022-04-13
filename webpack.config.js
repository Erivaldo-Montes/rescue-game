const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
var $ = require("jquery");
var webpack = require("webpack");

module.exports = {
  devtool: "source-map",
  entry: "./src/main.js",
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
    filename: "bundler.js",
  },

  // ignore format

  module: {
    rules: [
      {
        // transpila o codigo js para versões anteriores do ECMAScript
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        // extrai o css para um arquivo separado
        // enpacota o css
        test: /\.css$/,
        use: [miniCssExtractPlugin.loader, "css-loader"],
      },

      // resolve importações de imagens
      {
        test: /\.(png|svg|jpg|gif|mp3)$/,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    // extrai o css para um arquivo separado
    new miniCssExtractPlugin({
      filename: "style.css",
    }),
    // Carregar módulos automaticamente em vez de ter que importou requireeles em todos os lugares.
    new webpack.ProvidePlugin({
      $: "jquery",
    }),
  ],
};
