module.exports = {
  preset: "react-native",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "node"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)x?$",
  transform: {
    "^.+\\.(js)$": "<rootDir>/node_modules/babel-jest",
    // "^.+\\.svg$": "jest-transformer-svg",
  },
  testPathIgnorePatterns: ["\\.snap$", "\\.mock$", "<rootDir>/node_modules/"],
  transformIgnorePatterns: [
    "node_modules/(?!react-native|react-native-.*|react-navigation-.*|@react-navigation|@react-native-.*)/",
    "jest-runner",
  ],
  clearMocks: true,
  globals: {
    window: {},
  },
  cacheDirectory: ".jest/cache",
  setupFiles: [
    "<rootDir>/src/__specs__/spec-setup.ts",
    "./node_modules/react-native-gesture-handler/jestSetup.js"
  ],
  coveragePathIgnorePatterns: [".mock.ts"],
  collectCoverageFrom: ["./src/**", "!**/__snapshots__/**"],
};
