module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['prettier --write--parser json'],
  '*.vue': ['prettier --write', 'eslint --fix'],
  'packages/components/src/**/*.less': ['stylelint --fix', 'prettier --write'],
  '*.md': ['prettier --write']
};
