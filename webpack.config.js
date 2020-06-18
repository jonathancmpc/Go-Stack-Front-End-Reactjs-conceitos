const path = require('path'); /* Importando módulo do Node para utilizar os path's, ele serve para não dar problema nas barras e contra-barras dos sistemas operacionais, como windows por exemplo */

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'), /* Arquivo de entrada da nossa aplicação, primeiro arquivo carregado */
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  }, /* Qual arquivo será gerado depois de convertido(bundle) */
  devServer: {
    contentBase: path.resolve(__dirname, 'public'), /* Servidor do webpack para ficar escutando qualquer alteração dos nossos arquivos que estão na pasta pública */
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }
};