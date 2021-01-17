module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "globals": {
    "$": true,
    "log": true,
    "G": true,
    "Utils": true
  },
  "extends": [
    "eslint:recommended"
  ],
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true,
        "modules": true
    }
  },
  "rules": {}
}