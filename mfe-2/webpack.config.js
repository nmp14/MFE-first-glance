const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: "development",

  devServer: {
    port: 3001
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'mfe2',
      filename:'remoteEntry.js',
      exposes: {
        '.': './src/index',
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}