const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const stylesheetsLoader = ExtractTextPlugin.extract('style-loader',
  '!css-loader?modules&localIdentName=[hash:base64]');
const stylesheetsPlugin = new ExtractTextPlugin('[hash].css');
const htmlWebpackPlugin = new HtmlWebpackPlugin({ template: 'index.html' });
const definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.NODE_ENV === 'development' || 'false')),
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production')
  }
});
const dedupePlugin = new webpack.optimize.DedupePlugin();
const uglifyPlugin = new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } });
const compressionPlugin = new CompressionPlugin();

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: ['babel-polyfill', './index'],
  output: {
    publicPath: '/',
    filename: '[hash].js',
    path: path.join(__dirname, 'dist')
  },
  devtool: 'cheap-source-map',
  debug: false,
  plugins: [
    stylesheetsPlugin,
    htmlWebpackPlugin,
    definePlugin,
    dedupePlugin,
    uglifyPlugin,
    compressionPlugin
  ],
  resolve: {
    root: path.join(__dirname, 'src')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      { test: /\.css$/, loader: stylesheetsLoader },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
      { test: /\.sass$/, loader: `${stylesheetsLoader}!sass?indentedSyntax=sass` },
      { test: /\.less$/, loader: `${stylesheetsLoader}!less` },
      { test: /\.html$/, loader: 'html-loader' },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader?limit=25000&name=images/[name].[ext]'
      },
      {
        test: /\.(woff2|woff|otf|svg)$/,
        loader: 'url-loader',
        query: {
          name: 'font/[hash].[ext]',
          limit: 5000,
          mimetype: 'application/font-woff'
        }
      },
      {
        test: /\.ttf$|\.eot$/,
        loader: 'file-loader',
        query: {
          name: 'font/[hash].[ext]'
        }
      }
    ]
  }
};
