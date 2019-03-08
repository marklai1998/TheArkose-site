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
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              '@babel/plugin-syntax-dynamic-import',
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-object-rest-spread',
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
