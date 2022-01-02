const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "iconsent.js",
    publicPath: "/dist/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  devServer: {
    port: 3000,
  },
};
