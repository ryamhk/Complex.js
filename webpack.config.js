const path = require('path');

module.exports = {
  mode: 'production',
  entry: './lib',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'complex.js',
    library: 'complex.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            comments: false,
          },
        },
      },
    ],
  },
  optimization: {
    minimize: false,
  },
};