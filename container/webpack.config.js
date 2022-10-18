const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: "development",

  devServer: {
    port: 8080
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        mfe1: 'mfe1@http://localhost:3000/remoteEntry.js'
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}