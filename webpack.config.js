const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

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
            use: "css-loader"
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
    ],
    devServer: {
      historyApiFallback: true,
      contentBase: './dist',
    }
  }
}
