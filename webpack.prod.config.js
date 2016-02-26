var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: path.join(__dirname, 'src/index'),
  output: {
    path: path.join(__dirname, 'public/static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.json$/,
        loaders: [ 'json' ],
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  }
}
