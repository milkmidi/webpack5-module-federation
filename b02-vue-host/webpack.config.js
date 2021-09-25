const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { VueLoaderPlugin } = require('vue-loader');
const deps = require('./package.json').dependencies;
// https://www.qiyuandi.com/zhanzhang/zonghe/12450.html

module.exports = {
  entry: {
    'host-index': './src/index',
  },
  mode: process.env.NODE_ENV,
  devtool: false,
  output: {
    publicPath: '/',
    chunkFilename: 'host-[name].js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          { loader: 'vue-loader' },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: { },
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
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
  },
  plugins: [
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      remotes: {
        milkmidiLibrary: 'milkmidiLibrary@http://localhost:9527/remoteEntry.js',
      },
      shared: {
        // ...deps, // 這個加了比較好
        vue: {
          // eager: true, // 開了，就會先把 vue 包進 host-index 裡
          singleton: true,
          // strictVersion: true, // 開了 host 和 remote 就會需要一樣的版本
          requiredVersion: deps.vue,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    port: 3000,
    hot: true,
    host: '0.0.0.0',
  },
  optimization: {
    // minimize: false,
    moduleIds: 'named',
    chunkIds: 'named',
    /* splitChunks: { // 不能包 vendor, 不然 remote 會載一次，這裡也會載一次
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
    }, */
  },
};
