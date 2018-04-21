const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'development',
  entry: path.resolve(srcPath, 'index.jsx'),
  output: {
    filename: 'bundle.js',
    path: distPath
  },
  module: {
    rules: [{
      test: /\.(js|jsx)?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['env', 'react', 'stage-2']
      }
    }]
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: distPath,
    compress: true,
    watchContentBase: true,
    inline: true,
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: `${srcPath}/*.+(html)`, to: distPath, flatten: true},
      {from: `${srcPath}/images`, to: `${distPath}/images`},
    ], {/* options */})
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      app: srcPath,
    }
  }
};
