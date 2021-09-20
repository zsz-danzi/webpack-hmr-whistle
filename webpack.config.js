// 引入一个包
const path = require('path');
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
// 单独css
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// webpack中的所有的配置信息都应该写在 module.exports 中
module.exports = {

  // 指定入口文件
  entry: "./src/main.ts",

  mode: 'development',

  // 指定打包文件所在目录
  output: {
    // 指定打包文件的目录
    path: path.resolve(__dirname, 'dist'),
    // 打包后文件的文件
    filename:"bundle.js",
    environment: {
      arrowFunction: false,
    }
  },

  devServer: {
    port: 4300,
    hot: true,
    allowedHosts: 'all',
    client: {
      webSocketTransport: 'sockjs',
      webSocketURL: 'ws://127.0.0.1:4300/ws'
    },
    webSocketServer: 'sockjs',
    // allowedHosts: [
    //   'zsz-danzi.github.io',
    // ],
  },

  // 配置webpack插件
  plugins: [
    // new HTMLWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: "./src/index.html"
    }),

    new MiniCssExtractPlugin({
      //输出文件夹和文件名
        filename:'dist/css/index.css'
      })
  ],

  resolve: {
    // 用来设置模块
    extensions: ['.ts', '.js']
  },

  module:{
    rules:[
      { test: /\.css$/, 
        use:[
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      { test: /\.ts$/, use: 'ts-loader' },
    ]
  },

}

/**
 * css in js
 * step1 css-loader 把css解析
 * step2 style-loader 把css in js
 */

