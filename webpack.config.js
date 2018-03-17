
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './sticky-events.js',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'sticky-events.es5.js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ],
  },
};
