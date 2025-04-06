import nuxt from '@nuxt/eslint-config/flat'
import tsParser from '@typescript-eslint/parser'
import globals from 'globals'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
    {
        files: ['**/*.{js,ts,vue}'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2021
            },
            parser: tsParser,
            parserOptions: {
                project: './tsconfig.json',
                extraFileExtensions: ['.vue'],
                sourceType: 'module'
            }
        },
        plugins: {
            '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
            nuxt: require('eslint-plugin-nuxt')
        },
        rules: {
            // ...
        }
    },
    ...nuxt({
        features: {
            tooling: true,
            typeChecking: true
        }
    }),
    eslintConfigPrettier
]
