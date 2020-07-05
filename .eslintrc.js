module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended'],
  plugins: [],
  // add your custom rules here
  rules: {
    "no-console": "warn", // console.log "error", "warn", "off"
    "no-trailing-spaces": "warn" // 行の末尾の空白
  }
}
