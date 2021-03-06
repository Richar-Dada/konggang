'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap


module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction,
    usePostCSS: true
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },
  postcss: function () {
    return [
      require('./mycss')(),
      require('autoprefixer')({
        browsers: ['iOS >= 7', 'Android >= 4.1']
      }),
      require('postcss-px2rem')({ remUnit: 37.5 })
    ]
  }
}
