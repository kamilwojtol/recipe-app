module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/css/style.scss";
        `
      }
    }
  }
}