module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.jsx',
            '.json',
          ],
          alias: {
            '@components': './src/components',
            '@assets': './src/assets',
            '@styles': './src/styles',
            '@utils': './src/utils',
          }
        }
      ]
    ]
  };
};
