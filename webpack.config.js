const path = require('path');

module.exports = {
  entry: './src/index.js',  // Ajuste conforme seu arquivo de entrada
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js?$/,  // Para arquivos .js e .jsx
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,  // Para arquivos .css
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.feature$/,  // Para arquivos .feature do Gherkin
        use: 'gherkin-loader',  // Ou 'raw-loader'
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.feature', '.css'],  // Adicione as extensões necessárias
  },
  devtool: 'source-map',  // Facilita o processo de depuração
};



  
  
  