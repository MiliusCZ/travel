const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const stylesheetsLoader =
  'style-loader!css-loader?modules&localIdentName=[path]-[local]-[hash:base64:3]';
const htmlWebpackPlugin = new HtmlWebpackPlugin({ template: 'index.html' });
const definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.NODE_ENV === 'development' || 'true'))
});

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index',
  output: {
    filename: '[hash].js',
    publicPath: '/'
  },
  devtool: 'source-map',
  debug: true,
  plugins: [htmlWebpackPlugin, definePlugin],
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
  },
  devServer: {
    historyApiFallback: true,
  }
};
