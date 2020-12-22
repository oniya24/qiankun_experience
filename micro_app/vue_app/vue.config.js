const packageName = require('./package.json').name;
module.exports = {
  devServer: {
    // 监听端口
    // port: 10300,
    // overlay: {
    //     warnings: false,
    //     errors: false
    // },
    // 关闭主机检查，使微应用可以被 fetch
    // disableHostCheck: true,
    // 配置跨域请求头，解决开发环境的跨域问题
    headers: {
        "Access-Control-Allow-Origin": "*",
    }
  },
  configureWebpack: {
    output: {
      library: `vue-app`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_vue-app`,
    },
  }
}