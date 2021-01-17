module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [["import", {
    libraryName: 'heyuiNative',
    libraryDirectory: 'lib/components'
  }]]
}
