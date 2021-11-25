const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const deps = require('./package.json').dependencies;

// https://github.com/nsebhastian/module-federation-react/blob/app2-complete/app2/webpack.config.js
module.exports = {
  entry: {
    hostMain: './src/index',
  },
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
        test: /\.(jsx|js|ts|tsx)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      // name: "app2",
      // remoteType: "var",
      // 這樣寫的話，html 裡 載入 script
      /* remotes: {
        app1: "app1",
      }, */
      remotes: {
        app1: 'app1@http://localhost:9527/remoteEntry.js',
      },
      // https://stackoverflow.com/questions/66123283/webpack-module-federation-is-not-working-with-eager-shared-libs
      shared: {
        // ...deps,
        react: {
          // eager: true, // host 端加不加都沒差
          // singleton: true,
          strictVersion: true,
          // requiredVersion: deps.react,
        },
        'react-dom': {
          // eager: true,
          // singleton: true,
          strictVersion: true,
          // requiredVersion: deps['react-dom'],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    port: 3000,
  },

  /* 這個不要加，不然 venders 載一次，remote 再載一次
  optimization: {
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
  },
  // */
};
