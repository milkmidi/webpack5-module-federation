module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
  plugins: [
    'vue',
  ],
  rules: {
    'global-require': 0,
    'no-console': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never', jsx: 'never', ts: 'never', tsx: 'never',
    }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  },
};
