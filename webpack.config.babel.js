import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})
import ExtractTextPlugin from 'extract-text-webpack-plugin';


module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
                 use: 'css-loader'
             })
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }]
  },
  plugins: [HtmlWebpackPluginConfig, new ExtractTextPlugin('styles.css')],
};
