module.exports = {
  ...require('./packages/prettier/src/index.js'),
  overrides: [
    {
      files: '.prettierrc',
      options: { parser: 'json' },
    },
  ],
}
