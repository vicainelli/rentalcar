const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve('src'),
        src: path.resolve('src'),
        components: path.resolve('src/components'),
        services: path.resolve('src/services'),
        utils: path.resolve('src/utils'),
      },
    },
  },
}
