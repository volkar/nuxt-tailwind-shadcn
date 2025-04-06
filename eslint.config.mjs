import antfu from '@antfu/eslint-config'

export default antfu({
    stylistic: {
        indent: 4,
        quotes: 'single',
    },
    typescript: true,
    vue: true,
    ignores: ['**/fixtures'],
})
