const path = require('path');
const GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  devServer: {
    static: "./dist",
  },
  mode: 'production',
  entry: {main:'./src/index.js'},
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': path.resolve(__dirname,'src')
    }
  },
  externals: {
    writeFavorite: './src/util/writeFavorite.js'
  },
  output: {
    filename: '[name].bundle.js',
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
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
        ]
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
      hash: true,
      meta: {
        description: 'edje',
        keywords: 'edje',
        viewport: 'width=device-width,initial-scale=1'
      },
      title: "Edje's Fracking Bookmarks",
      top: `<a href="https://github.com/projectje/bookmark"><img width="149" height="149" src="./img/forkme.png" style="position: absolute; top: 0; right: 0; border: 0;" alt="Fork me on GitHub"></a>` +
           `<h1 id="title">❤️ Edje</h1>` +
           `<script>const w=(b)=>{var s=localStorage.getItem(b.url);if (s) {var g=JSON.parse(s);g.c=(g.c)?g.c+1:1;localStorage.setItem(b.url,JSON.stringify(g));} else {b.c=1;localStorage.setItem(b.url,JSON.stringify(b));}}</script>`
           ,
      placeholder: `<div class="container-fluid" id="main_container"></div>`
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/assets/img', 'forkme.png'),
            to: path.resolve(__dirname, 'dist/img','forkme.png' ) },
        {
          from: path.resolve(__dirname, 'src/assets/img', 'SK-C-214.jpg'),
          to: path.resolve(__dirname, 'dist/img', 'SK-C-214.jpg')
        }
      ],
    }),
  ]
};