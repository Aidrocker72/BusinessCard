module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    '@eslint/js',
    'plugin:vue/vue3-recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@babel/eslint-parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'vue'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-unused-vars': 'error',
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'no-console': 'warn',
    'no-debugger': 'error',
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'vue/html-self-closing': ['error', {
      html: {
        void: 'always',
        normal: 'never',
        component: 'always'
      },
      svg: 'always',
      math: 'always'
    }],
    'vue/max-attributes-per-line': ['error', {
      singleline: 2,
      multiline: {
        max: 2,
        allowFirstLine: false
      }
    }],
    'vue/html-indent': ['error', 2, {
      'attribute': 1,
      'baseIndent': 1,
      'closeBracket': 0,
      'alignAttributesVertically': true,
      'ignores': []
    }],
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/v-on-event-hyphenation': ['error', 'always', {
      'nonHandlerEvents': ['true']
    }],
    'vue/v-bind-style': ['error', 'shorthand'],
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/component-tags-order': ['error', {
      'order': ['template', 'script', 'style']
    }]
  }
}