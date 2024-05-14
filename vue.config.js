module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/your-resume/' : '/',
  outputDir: 'docs',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.ya?ml$/,
          use: 'js-yaml-loader'
        }
      ]
    }
  }
};
