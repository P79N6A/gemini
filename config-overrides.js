module.exports = function override(config, env) {
  // do stuff with the webpack config...
  const newConfig = Object.assign({}, { ...config });
  newConfig.output.publicPath = env === 'production' ? './' : '/';
  newConfig.externals = {
    three: 'three',
    react: 'react',
  };
  return newConfig;
};
