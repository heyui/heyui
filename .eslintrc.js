module.exports = {
  root: true,

  env: {
    node: true
  },

  globals: {
    $: true
  },

  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6,
    sourceType: 'module'
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'vue/no-v-for-template-key-on-child': 'off',
    'vue/no-v-for-template-key': 'off'
  },

  extends: ['plugin:vue/vue3-recommended', 'plugin:vue/essential', 'eslint:recommended']
};
