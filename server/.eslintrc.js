module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        node: true
    },
    extends: [
        'plugin:vue/essential',
        'standard'
    ],
    parserOptions: {
        ecmaVersion: 13
    },
    plugins: [
        'vue'
    ],
    rules: {
        indent: 'off',
        'no-tabs': 0
    }
}
