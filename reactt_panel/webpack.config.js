// webpack.config.js

const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    // Her sayfa için bir entry noktası tanımla
    home: './src/pages/Home.js',
    contact: './src/pages/Contact.js',
    movieList: './src/pages/MovieList.js',
    listPage: './src/pages/ListPage.js'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },
  plugins: [
    // Her sayfayı ayrı bir HTML dosyasına çıkar
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: '[name].html'
    })
  ]
}
