module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
        browser: true
    },
    extends: ['hfe'],
    plugins: [
        'html'
    ],
    globals: {
        'echarts': true
    },
    parserOptions: {
        'sourceType': 'module',
         'ecmaFeatures': {
            'experimentalObjectRestSpread': true,
            'jsx': true
        }
    },
    'rules': {
        'no-console': 2,
        'space-before-function-paren': 0,
        'no-shadow': 0,
        'no-unused-expressions': 0,
        'no-invalid-this': 0,
        'no-empty-function': 0,
        'comma-dangle': 0,
        'no-param-reassign': 0,
        'no-else-return': 0,
        'padded-blocks': 0,
        'no-implicit-coercion': 0,
        'no-empty': 0
    }
};