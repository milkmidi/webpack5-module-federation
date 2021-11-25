const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const deps = require('./package.json').dependencies;
// const federationConfig = require('./federation.config.json');
// https://www.qiyuandi.com/zhanzhang/zonghe/12450.html

module.exports = {
  entry: process.env.APP_ENV === 'production' ? {} : {
    remoteIndex: './src/index',
  },
  mode: process.env.NODE_ENV,
  devtool: false,
  output: {
    publicPath: 'http://localhost:9527/',
    chunkFilename: 'remote-[name].js',
  },
  module: {
    rules: [{
      test: /\.(jsx|js|ts|tsx)?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.css?$/,
      use: [{
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      ],
      exclude: /node_modules/,
    },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app1',
      exposes: {
        './Header': './src/components/Header',
        './Footer': './src/components/Footer',
        './MyModel': './src/libs/MyModel',
        './SimpleModel': './src/libs/SimpleModel',
        // './useCounter': './src/hooks/useCounter',
      },
      filename: 'remoteEntry.js',
      /* shared: {
        react: {
          requiredVersion: deps.react,
          import: 'react', // the "react" package will be used a provided and fallback module
          shareKey: 'react', // under this name the shared module will be placed in the share scope
          shareScope: 'default', // share scope with this name will be used
          singleton: true, // only a single version of the shared module is allowed
        },
        'react-dom': {
          requiredVersion: deps['react-dom'],
          singleton: true, // only a single version of the shared module is allowed
        },
      } */
      shared: {
        ...deps, // 這個加了比較好
        // '@emotion/css': {},
        /* '@emotion/css': {
          eager: true,
          singleton: true,
          strictVersion: true,
        },
        lodash: {
          eager: true,
          singleton: true,
          strictVersion: true,
        }, */
        react: {
          // eager: true, // 這不要開，因為設定 ture 的話，會先把有用到的 node_modules 都先包裡來
          singleton: true,
          // strictVersion: true, // 開了 host 和 remote 就會需要一樣的版本
          // requiredVersion: deps.react,
        },
        'react-dom': {
          // eager: true,
          singleton: true,
          // strictVersion: true,
          // requiredVersion: deps['react-dom'],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      // chunks: ['vendors', 'app']
    }),
  ],
  devServer: {
    port: 9527,
  },
  // https://webpack.js.org/configuration/optimization/

  // 不要把 vendors 起成一包，不然 remoteEntry 會再整包載入
  optimization: {
    // minimize: false,
    moduleIds: 'named',
    chunkIds: 'named',
    /*
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
    // */
  },
};
