const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: "development",

  devServer: {
    port: 3000
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'mfe1',
      filename:'remoteEntry.js',
      exposes: {
        './mfe1Index': './src/index',
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}