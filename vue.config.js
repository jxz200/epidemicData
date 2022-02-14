const CompressionPlugin = require("compression-webpack-plugin"); //引入g-zip插件
module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    // publicPath: "./", //跟着视频做的，我也不知道为什么

    externals: {
      vue: "Vue",
      "vue-router": "VueRouter",
      vuex: "Vuex",
      axios: "axios",
      vant: "vant",
      echarts: "echarts",
    }, //这些都用cdn来引
    plugins: [
      new CompressionPlugin({
        algorithm: "gzip", // 使用gzip压缩
        test: /\.js$|\.html$|\.css$/, // 匹配文件名
        filename: "[path].gz[query]", // 压缩后的文件名(保持原文件名，后缀加.gz)
        minRatio: 1, // 压缩率小于1才会压缩
        threshold: 10240, // 对超过10k的数据压缩
        deleteOriginalAssets: false, // 是否删除未压缩的源文件，谨慎设置，如果希望提供非gzip的资源，可不设置或者设置为false（比如删除打包后的gz后还可以加载到原始资源文件）
      }),
    ],
  },
  devServer: {
    hot: true,
    open: true,
    port: 8080,
    host: "0.0.0.0",
  },
};
