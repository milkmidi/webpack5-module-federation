module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  plugins: [
    '@typescript-eslint',
    'react',
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  rules: {
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/no-use-before-define': ['error', { variables: false }],
    '@typescript-eslint/no-var-requires': 0,
    'arrow-body-style': 0,
    'global-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never', jsx: 'never', ts: 'never', tsx: 'never',
      },
    ],
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'no-console': 0,
    'no-use-before-define': 0,
    'react/button-has-type': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-props-no-spreading': 0,
    'react/jsx-uses-react': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'max-len': [
      'error', {
        code: 150,
        ignoreComments: true,
        ignoreUrls: true,
      },
    ],
  },
};
