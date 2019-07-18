module.exports = {
  root: true,
  env: {
    node: true
  },
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 2015,
    "sourceType": "module"
  },
  "globals": {
    "$": true,
    "log": true,
    "G": true,
    "Utils": true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
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
    "no-useless-call": "off",
    "space-before-function-paren": ["error", { "anonymous": "always", "named": "never", "asyncArrow": "always" }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
