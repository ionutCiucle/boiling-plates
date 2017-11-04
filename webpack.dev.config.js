const path = require('path');
const webpack = require('webpack');

config = {
  devtool: '#inline-source-map',
  entry: './src/js/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: [
        'babel-loader',
        'eslint-loader'
      ]
    }, {
      test: /\.(png|jpg|svg|mp3|html)$/,
      loader: 'file'
    }, {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.(otf)$/,
      loader: 'file?limit=65000&mimetype=application/octet-stream&src/assets/fonts/[name].[ext]'
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('dev')
    })
  ]
};

module.exports = config;
