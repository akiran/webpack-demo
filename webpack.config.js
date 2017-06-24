const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

module.exports = function(env) {
  console.log(env)
  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'app.js'
    },
    module: {
      rules: [
        {test: /\.js$/, use: 'babel-loader'},
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader",
          })
        },
        {
          test: /\.png$/,
          use: 'file-loader'
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin("styles.css"),
      env.production ?  new webpack.optimize.UglifyJsPlugin({}): null,
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(env.production ? 'production' : 'development')
        }
      })
    ].filter(p => !!p),
    resolve: {
      modules: [path.resolve(__dirname, "src"), 'node_modules'],
    },
    devServer: {
      historyApiFallback: true,
      contentBase: './dist',
    }
  }
}
