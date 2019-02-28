module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    '@vue/standard'
  ],
  "globals": {
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "semi": [
      "error",
      "always"
    ],
    "eqeqeq": "off",
    "linebreak-style": [
        "error",
        "unix"
    ],
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
