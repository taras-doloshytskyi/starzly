module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['@babel/plugin-transform-flow-strip-types'],
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      [
        'module-resolver',
        {
          alias: {
            '@api': './api',
            '@ui': './components/ui',
            '@layout': './components/layout',
            '@icons': './components/icons',
            '@screens': './screens',
            '@assets': './assets',
            '@types': './utils/types',
            '@enums': './utils/enums',
            '@navigation': './navigation',
            '@store': './store'
          },
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx'
          ],
          root: ['./']
        }
      ],
      'react-native-reanimated/plugin'
    ]
  };
};
