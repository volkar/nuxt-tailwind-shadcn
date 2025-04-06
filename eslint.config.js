import { createConfigForNuxt } from '@nuxt/eslint-config'
import globals from 'globals'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'

export default createConfigForNuxt([
    { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
    {
        files: ['**/*.{js,mjs,cjs,ts,vue}'],
        languageOptions: { globals: { ...globals.browser, ...globals.node } }
    },
    {
        files: ['**/*.{js,mjs,cjs,ts,vue}'],
        plugins: { js },
        extends: ['js/recommended']
    },
    tseslint.configs.recommended,
    pluginVue.configs['flat/essential'],
    {
        files: ['**/*.vue'],
        languageOptions: { parserOptions: { parser: tseslint.parser } }
    },
    {
        ignores: ['node_modules', 'dist', '.nuxt', '.output']
    },
    eslintConfigPrettier
])
