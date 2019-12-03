const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const env = process.env.NODE_ENV;

module.exports = {
  entry: {   
    welcome: "./src/assets/scripts/welcome.js",
    feedback: "./src/assets/scripts/feedback.js",
    contacts: "./src/assets/scripts/contacts.js",
    services: "./src/assets/scripts/services.js",
    advantage:"./src/assets/scripts/advantage.js", 
    bankruptcy:"./src/assets/scripts/bankruptcy.js"
  },
  output: {
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      { 
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          compress: {
            drop_console: true
          }
        }
      })
    ]
  },
  resolve: {
    alias: {
      vue$:
        env === "development" ? "vue/dist/vue.esm.js" : "vue/dist/vue.min.js"
    }
  },
  devtool: env === "development" ? "#eval-source-map" : ""
};
