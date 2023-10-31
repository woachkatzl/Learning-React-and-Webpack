const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  resolveLoader: {
    modules: [
      path.resolve(process.cwd(), 'node_modules'),
      path.resolve(__dirname, 'node_modules'),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, './public/index.html'),
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'bundle'),
  },
  devServer: {
    static: {
      directory: path.join(process.cwd(), 'bundle'), //Директорий, откуда забирать статику, которую отдавать в браузер
    },
    //настройки клиента
    client: {
      progress: true,
      //Что показывать поверх приложения (ошибки, предупреждения)
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    //Обработка всех запросов на index.html, работает для одностраничных приложений. Для многостраничных нужно поставить false
    historyApiFallback: true,
    //Какое приложение открывать при запуске (браузер)
    open: true,
    hot: true,
    compress: true,
    port: 3000,
  },
};
