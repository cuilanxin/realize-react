module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 130,
  overrides: [
    {
      files: '.prettierrc',
      options: { parser: 'json' },
    },
  ],
};
