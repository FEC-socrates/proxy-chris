const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    vendor: ["styled-components"],
    pageOne: '../AboutAndNews/client/index.jsx',
    pageTwo: '../buySell/client/src/index.jsx',
    pageThree: '../lineGraph/client/index.jsx'
  },
  externals: {
    'styled-components' : 'styled'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
    chunkFilename: '[id].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  }
};
