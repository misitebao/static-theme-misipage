module.exports = {
  // 打包后静态资源根路径
  // publicPath: '/',
  assetsDir: "",
  // 打包文件hash
  filenameHashing: false,
  // 抽取css生成文件
  css: {
    extract: "true",
  },
  productionSourceMap: false,
  pages: {
    index: {
      // page 的入口
      entry: "src/pages/index.js",
      // 模板来源
      template: "src/pages/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
      // 当使用 title 选项时，
      title: "首页",
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["chunk-vendors", "chunk-common", "index"],
      minify: false,
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    about: {
      entry: "src/pages/about.js",
      template: "src/pages/about.html",
      filename: "about.html",
      title: "关于",
      chunks: ["chunk-vendors", "chunk-common", "about"],
      minify: false,
    },
  },
  configureWebpack: {
    // 设置外部依赖
    externals: {
      "vue/dist/vue.esm-bundler.js": "Vue",
    },
  },
};
