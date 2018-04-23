const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const packagejson = require('./package.json');
const dependencies = Object.keys(packagejson.dependencies);

module.exports = {
  mode: 'development',
  target: 'web',

  entry: {
    // 'app' is the entry point into our react app located in src/.index.js
    app: './src/index.js',
    // 'vendor' is the name of the bundle that contains all of our 3rd party code
    // this is a list of modules that are listed in our package.json file
    vendor: dependencies
  },

  output: {
    // we are going to output everythign into the 'dist' directory,
    path: path.resolve(__dirname, 'dist'),
    // each of the entry point will be produced using placeholder for the name of the
    // entry point.  We should see 'app.js' and 'vendor~.js' in 'dist
    filename: '[name].js',
    // the path to resources relative to the html file.  Our index.html will 
    // be at the root of dist
    publicPath: '/'
  },

  // setting up babel-loader to compile our js/jsx files
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  // tell webpack to split our vendors bundle into chunks
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },

  plugins: [
    // Here we are taking the template found in 'src/index.html' and injecting our bundles
    // into the body secion of the file
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/index.html'),
      filename: 'index.html',
      inject: 'body'
    })
  ],

  // the dev server settings
  devServer: {
    // the path of the static resources
    contentBase: path.join(__dirname, '/'),
    historyApiFallback: true
  },
  // for debugging the compiled code
  devtool: 'source-map'
};