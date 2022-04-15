const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  // stats show logs for webpack dev server - 'minimal', 'verbose'
  stats: 'minimal',
  // contenthash will hash the filename everytime a change is made to trigger a browser cache miss
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },
  // we are using swc loader here to transpile typescript into javascript
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'swc-loader',
        exclude: /(node_modules)/,
      },
    ],
  },
  // dev server allows us to have local development with hot reloading
  devServer: {
    port: 3005,
  },
  // this helps us generate an html file with our bundle added to it
  plugins: [
    new HtmlWebpackPlugin({
      title: 'SWC example',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],
  // New in v5, we split vendor files automatically
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
