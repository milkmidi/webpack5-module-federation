const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const deps = require('./package.json').dependencies;
// https://www.qiyuandi.com/zhanzhang/zonghe/12450.html

module.exports = {
  entry: {
    app: './src/index',
  },
  // mode: "production",
  mode: 'development',
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
        options: {
          presets: [
            ['@babel/preset-react', {
              // "runtime": "automatic"
            }],
          ],
        },
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
        app1: 'app1@http://localhost:9527/remoteEntry.js',
      },
      shared: {
        ...deps, // 這個加了比較好
        vue: {
          // eager: true, // 這不要開，因為設定 ture 的話，會先把有用到的 node_modules 都先包裡來
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
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    hot: true,
    host: '0.0.0.0',
  },
  optimization: {
    // minimize: false,
    moduleIds: 'named',
    chunkIds: 'named',
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
};
