const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { VueLoaderPlugin } = require('vue-loader');
const deps = require('./package.json').dependencies;

// https://www.qiyuandi.com/zhanzhang/zonghe/12450.html
module.exports = {
  entry: {
    'remote-index': './src/index',
  },
  mode: process.env.NODE_ENV,
  devtool: false,
  output: {
    publicPath: 'http://localhost:9527/',
    chunkFilename: 'remote-[name].js',
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
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      name: 'milkmidiLibrary',
      // library: { type: "var", name: "app1" },
      // library: { type: "umd", name: "app1" },
      filename: 'remoteEntry.js',
      exposes: {
        // expose each component
        './MyHeader': './src/components/MyHeader.vue',
        './MyButton': './src/components/MyButton.vue',
        './MyModel': './src/libs/MyModel',
        './useData': './src/hooks/useData',
      },
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
    port: 9527,
    hot: true,
    host: '0.0.0.0',
  },
  // https://webpack.js.org/configuration/optimization/
  optimization: {
    minimize: process.env.NODE_ENV === 'production',
    moduleIds: 'named',
    chunkIds: 'named',

    // 為了 demo, 所以把每個 chunk 都獨立出來，production 不要這樣設定
    /* splitChunks: {
      chunks: 'all',
      cacheGroups: {
        default: {
          minChunks: 1,
          priority: -20,
          minSize: 0,
          enforce: true,
        },
      },
    }, */
  },
};
