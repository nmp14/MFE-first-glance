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
        '.': './src/index',
      },
      shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}