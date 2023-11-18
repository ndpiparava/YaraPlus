/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const { getDefaultConfig } = require('metro-config');
const defaultSourceExts =
  require('metro-config/src/defaults/defaults').sourceExts;

module.exports = (async () => {
  const {
    resolver: { assetExts },
  } = await getDefaultConfig();

  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
        },
      }),
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      sourceExts:[...defaultSourceExts, 'svg'],
      assetExts: assetExts.filter(ext => ext !== 'svg'),
    },
  };
})();
