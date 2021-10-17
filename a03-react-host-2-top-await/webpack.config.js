const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const deps = require('./package.json').dependencies;
// https://github.com/nsebhastian/module-federation-react/blob/app2-complete/app2/webpack.config.js
module.exports = {
  entry: './src/index',
  mode: 'development',
  devtool: false,
  output: {
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve('src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js|tsx|jsx)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      remoteType: 'var',
      remotes: {
        app1: 'app1',
        // app1: 'app@window.app1'
      },
      shared: {
        /* ...Object.keys(deps).reduce((prev, key) => {
          // eslint-disable-next-line no-param-reassign
          prev[key] = {
            eager: true,
            singleton: true,
          };
          return prev;
        }, {}), */
        /* '@emotion/css' :{ // 如果這裡有用到，然後 remote 也有用，就不會再載入 remote 的 emotion/css package
          eager: true,
          singleton: true,
          strictVersion: true,
        },
        '@emotion/react' :{
          eager: true,
          // singleton: true,
          // strictVersion: true,
        }, */
        /* lodash: {
          eager: true,
          // singleton: true,
          // strictVersion: true,
        }, */
        react: {
          eager: true, // 如果有用 import('bootstrap'), 就不需要 eager: true
          singleton: true,
          // requiredVersion: deps.react,
        },
        'react-dom': {
          eager: true,
          singleton: true,
          // requiredVersion: deps['react-dom'],
        },
      },
    }),
  ],
  /* optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          enforce: true,
        },
      },
    },
  }, */
  devServer: {
    port: 3000,
  },
  experiments: {
    topLevelAwait: true,
  },
};
