var path = require('path')

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
          use: [ 'style-loader', 'css-loader' ]
        },
        {
          test: /\.png$/,
          use: 'file-loader'
        }
      ]
    }
  }
}
