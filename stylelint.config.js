module.exports = {
  root: true,
  plugins: ['stylelint-less'],
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  syntax: 'less',
  customSyntax: 'postcss-less',
  rules: {},
  ignoreFiles: ['**./*.js,', '**./*.ts,', '**./*.tsx,', '**./*.jsx,', '**./*.vue,']
};
