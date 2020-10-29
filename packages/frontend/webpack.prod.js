const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    app: "./dist/index.js",
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  output: {
    publicPath: "./",
    filename: "frontend.bundle.js",
    path: path.resolve(__dirname, "bundle"),
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js"],
    symlinks: true,
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      PUBLIC_URL: "/",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      inject: "body",
    }),
    new CopyPlugin({
      patterns: [{ from: "images", to: "images" }],
    }),
  ],
};
