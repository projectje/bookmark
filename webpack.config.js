const path = require('path');
const GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': path.resolve(__dirname,'src')
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'img',
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new GoogleFontsPlugin({
      fonts: [
        { family: "Sacramento" }
      ],
      cache: true
    }),
    new HtmlWebpackPlugin({
      title: "Edjes Fracking Startpagina",
      template: 'src/index.html',

      hash: true
    })
  ]
};