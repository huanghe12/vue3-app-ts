module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    // html无子元素标签自动闭合
    'vue/html-self-closing': [
      'error',
      {
        html: { void: 'always', normal: 'always', component: 'always' },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/require-default-prop': 0,
    'vue/multi-word-component-names': 0,
    'vue/no-v-html': 0
  },
  globals: {
    defineProps: 'readonly'
  }
}
