const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },{
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader?importLoaders=1&modules=false',
        'sass-loader'
      ]
    },{
      test: /\.(ico|gif|png|jpg|jpeg|svg|webp)$/,
      loader: 'url-loader'
    },{
      test: /\.(eot|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "file-loader"
    }
  ]
  },
  plugins: [
    new Dotenv({ systemvars: true })
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    open: true,
    port: 8282
  }
};
