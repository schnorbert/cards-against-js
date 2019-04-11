const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    register: "./src/register.js",
    game: "./src/game.js",
    login: "./src/login.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js"
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: "src/view/index.html",
        to: "./",
        chunks: ["index"],
        fromType: "glob"
      }
    ]),
    new CopyWebpackPlugin([
      {
        from: "src/view/register.html",
        to: "./",
        chunks: ["register"],
        fromType: "glob"
      }
    ]),
    new CopyWebpackPlugin([
      {
        from: "src/view/game.html",
        to: "./",
        chunks: ["game"],
        fromType: "glob"
      }
    ]),
    new CopyWebpackPlugin([
      {
        from: "src/view/login.html",
        to: "./",
        chunks: ["login"],
        fromType: "glob"
      }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2016"]
          }
        }
      },
      {
        test: /.*\.scss/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};
