const path = require('path')

module.exports = env => ({
  entry: './src/index.js',
  mode: Object.keys(env)[0],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer: {
    host: 'dev.thearkose.com',
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 5000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              'transform-class-properties',
              'react-css-modules',
              'transform-object-rest-spread'
            ],
            presets: ['react', 'env', 'flow']
          }
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: ['file-loader']
      },
      {
        test: /\.css$/,
        loaders: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  }
})
