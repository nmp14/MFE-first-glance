const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('./package.json').dependencies;
const remotes = require('./remote.config');

module.exports = {
  mode: "development",

  devServer: {
    port: 8080
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        ...remotes
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: deps.react
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps['react-dom'],
        }
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}