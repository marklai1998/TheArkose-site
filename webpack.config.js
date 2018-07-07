const path = require('path')

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            'plugins': [
              'transform-class-properties',
              'react-css-modules',
              'transform-object-rest-spread'
            ],
            'presets': [
              'react',
              'env',
              'flow'
            ]
          }
        }
      },{
        test: /\.(png|jpg|gif|svg)$/,
        use: ['file-loader']
      },{
        test: /\.css$/,
        loaders: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
    }
    ]
  },
}