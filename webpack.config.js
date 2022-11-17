const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
   entry: './web/index.js',
   target: "web",
   output: {
      path: path.join(__dirname, '/backend/generated'),
      filename: 'index_bundle.js'
   },
   module: {
      rules: [
         {
            test: /\.js?$/,
            exclude: /node_modules/,
        use: {
              loader: "babel-loader",
            }
         }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './web/index.html'
      })
   ]
}
