module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'universe',
    'universe/shared/typescript-analysis',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  overrides: [
    {
      parserOptions: {
        project: './tsconfig.json',
      },
      files: ['*.ts', '*.tsx'],
    },
  ],
  //plugins: ['@typescript-eslint'],
  plugins: ['react', 'react-hooks', 'prettier'],
  settings: {
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to ESLint
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts', '.ts'],
      },
    },
    'import/ignore': ['node_modules'],
  },
  ignorePatterns: ['react-native.config.js'],
  rules: {
    'import/order': ['error'],
  },
};
