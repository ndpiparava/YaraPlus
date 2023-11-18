module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.js', '.ts', '.tsx', '.json'],
        alias: {
          '@YaraPlus': './src',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
