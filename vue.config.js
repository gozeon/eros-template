module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/static/eros-template/' : '/',
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:8080',
      },
    },
  },
}
