const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = env => ({
  entry: ['@babel/polyfill', './src/index.js'],
  mode: Object.keys(env)[0],
  output: {
    filename: '[hash].js',
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
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html'
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              '@babel/plugin-syntax-dynamic-import',
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-object-rest-spread',
              '@babel/plugin-transform-runtime',
              'react-css-modules'
            ],
            presets: [
              '@babel/preset-react',
              '@babel/preset-flow',
              '@babel/env'
            ]
          }
        }
      },
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
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
