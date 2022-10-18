const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: 3002,

  plugins: [
    new ModuleFederationPlugin({
      name: 'mfe3',
      filename: 'remoteEntry.js',
      exposes: {
        '.': './src/index',
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ]
}