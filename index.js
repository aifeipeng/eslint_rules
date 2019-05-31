module.exports = {
    env: {
        es6: true,
        jest: true
    },
    extends: 'eslint-config-strongloop',
    rules: {
        'indent': ['error', 4],
        'max-len': 'off',
        'prefer-const':'error',
        'no-var':'error' ,
        'quotes': ["error", "single"]
    },
    parserOptions: {
        ecmaVersion: 9
    }
  };