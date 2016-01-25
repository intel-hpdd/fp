module.exports = {
  parser: 'babel-eslint',
  plugins: [
    'flow-vars'
  ],
  rules: {
    'flow-vars/define-flow-type': 1,
    'flow-vars/use-flow-type': 1,
    quotes: [2, 'single'],
    'linebreak-style': [2, 'unix'],
    semi: [2, 'always'],
    indent: [2, 2]
  },
  globals: {
    console: false
  },
  ecmaFeatures: {
    modules: true
  },
  env: {
    es6: true,
    node: true
  },
  extends: 'eslint:recommended'
};