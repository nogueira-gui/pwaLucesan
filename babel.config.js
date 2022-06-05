module.exports = function(api) {
  // api.cache(true);
  const platform = api.caller((caller) => caller?.platform)
  return {
    presets: platform === 'web' && [require.resolve('babel-plugin-react-native-web')],
  // return {
  //   presets: ['babel-preset-expo'],
  };
};
