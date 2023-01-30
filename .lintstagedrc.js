module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc,*.husky}': ['prettier --write'],
  '*.vue': ['prettier --write', 'eslint --fix'],
  'packages/components/src/**/*.less': ['stylelint --fix', 'prettier --write'],
  '*.md': ['prettier --write']
};
