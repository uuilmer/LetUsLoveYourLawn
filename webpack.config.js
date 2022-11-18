const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './web/index.js',
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
            },
            {
                test: /\.css$/,
                use: {
                    loader: 'css-loader'
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
