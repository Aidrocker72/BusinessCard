import js from '@eslint/js'
import vuePlugin from 'eslint-plugin-vue'

export default [
  js.configs.recommended,
  ...vuePlugin.configs['flat/recommended'],
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        IntersectionObserver: 'readonly',
        defineProps: 'readonly',
        defineOptions: 'readonly',
        ref: 'readonly',
        onMounted: 'readonly',
        onBeforeUnmount: 'readonly'
      },
      parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      vue: vuePlugin
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-unused-vars': 'error',
      'no-unused-vars': ['error', { 'varsIgnorePattern': '^props$' }],
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
        multiline: 2
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
      'vue/v-on-event-hyphenation': ['error', 'always'],
      'vue/v-bind-style': ['error', 'shorthand'],
      'vue/v-on-style': ['error', 'shorthand'],
      'vue/component-options-name-casing': ['error', 'PascalCase']
    }
  }
]