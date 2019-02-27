module.exports = {
  "root": true,
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    },
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "globals": {
    "log": true,
  },
  "extends": "eslint:recommended",
  "plugins": ["vue"],
  "rules": {
    "no-console": ["error", { allow: ["warn", "error"] }]
  }
}
