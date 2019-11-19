module.exports = {
  assetsDir: 'assets',
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/'
}
