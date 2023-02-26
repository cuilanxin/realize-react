module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'warn',
    'react/no-unstable-nested-components': 'off',
    'no-invalid-this': 'off',
    'no-unused-vars': 'error',
    'no-console': 'warn',
  },
};
