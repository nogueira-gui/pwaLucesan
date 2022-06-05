const createExpoWebpackConfigAsync = require('@expo/webpack-config')
const { getExpoBabelLoader } = require('@expo/webpack-config/utils')

module.exports = async function (env, argv) {
  // do any other webpack config edits here
  const config = await createExpoWebpackConfigAsync(env, argv)

  // unlike webpack config, which is editted then returned, apparently
  // babel config is expected to be mutated in place
  const loader = getExpoBabelLoader(config)
  loader.use.options.configFile = './babel-webpack.config.js'

  return config
}