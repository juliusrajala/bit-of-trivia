const path = require('path');

const config = {
  entry: './index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ },
    ]
  },
  resolve: {
    alias: {
      'src': path.resolve(__dirname, './src/')
    },
    extensions: ['.tsx', '.ts', '.js'],
  }
};

module.exports = config;