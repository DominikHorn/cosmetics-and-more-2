const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: ["react-hot-loader/patch", "./dist/index.js"],
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
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
  resolve: {
    modules: ["node_modules"],
    extensions: [".js"],
    symlinks: true,
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  optimization: { moduleIds: "named", usedExports: true },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      inject: "body",
    }),
    new CopyPlugin({
      patterns: [{ from: "images", to: "images" }],
    }),
  ],
  devServer: {
    hot: true,
    host: "0.0.0.0",
    port: 8080,
    historyApiFallback: true,
    watchFiles: ["packages/**"],
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    allowedHosts: "all"
  },
};
