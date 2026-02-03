// eslint.config.js
import tsPlugin from '@typescript-eslint/eslint-plugin'
import * as tsParser from '@typescript-eslint/parser'
import prettierPlugin from 'eslint-plugin-prettier'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'

export default [
  // Игнорируем node_modules и dist
  {
    ignores: [
      'node_modules',
      'dist',
      '*.json',
      '*.css',
      '*.md',
      '.prettierrc.js'
    ]
  },

  // Основная конфигурация для JS/TS/React
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tsParser.default || tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    settings: {
      react: { version: 'detect' }
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      '@typescript-eslint': tsPlugin,
      'simple-import-sort': simpleImportSort
    },
    rules: {
      // Общие JS правила
      'no-console': 'warn',
      'no-debugger': 'warn',

      // React
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/jsx-sort-props': [
        'warn',
        { callbacksLast: true, shorthandFirst: true }
      ],

      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // TypeScript
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' }
      ],
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',

      // Импорты
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error'
    }
  },

  // Prettier
  {
    files: ['**/*.{ts,tsx,js,jsx,json,css,scss,md}'],
    rules: {
      'prettier/prettier': ['error']
    },
    plugins: {
      prettier: prettierPlugin
    }
  }
]
