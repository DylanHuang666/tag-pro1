module.exports = {
  publicPath: './',
  devServer: {
    port: 3033,
    open: true
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/_variable.scss";`
      }
    }
  }
}
