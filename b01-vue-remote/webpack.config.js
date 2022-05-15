const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { VueLoaderPlugin } = require('vue-loader');
const deps = require('./package.json').dependencies;

module.exports = {
  entry: {
    'PROVIDER-index': './src/index',
  },
  mode: process.env.NODE_ENV,
  devtool: false,
  output: {
    // TODO 3
    publicPath: 'http://localhost:9527/',
    chunkFilename: 'PROVIDER-[name].js',
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
      {
        // https://webpack.js.org/guides/asset-modules/
        // https://webpack.docschina.org/guides/asset-modules/
        test: /\.(png|jpg|gif|svg|ico)$/,
        oneOf: [
          {
            type: 'asset/inline',
            resourceQuery: /inline/,
            parser: {
              dataUrlCondition: {
                maxSize: 99999999,
              },
            },
          },
          {
            type: 'asset/resource',
            parser: {
              dataUrlCondition: {
                maxSize: 1024 * 2, // 2kb
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      // TODO-----------------------  1 {
      name: 'milkmidiLibrary',
      filename: 'remoteEntry.js',
      exposes: {
        // expose each component
        './MyButton': './src/components/MyButton.vue',
        './MyModel': './src/libs/MyModel',
        './useDataWithLodash': './src/hooks/useDataWithLodash',
      },
      // TODO-----------------------  1 }
      shared: {
        // TODO-----------------------  2 {
        ...deps, // 這個加了比較好
        lodash: {
          eager: true,
        },
        vue: {
          // 這個參數是重點。ture 的話，會先把有用到的 node_modules 都先包裡來
          eager: true, // 奶綠覺得不要打開
          // only a single version of the shared module is allowed
          singleton: true,
          // strictVersion: true, // 開了 host 和 remote 就會需要一樣的版本
          requiredVersion: deps.vue,
        },
        // TODO-----------------------  2 }
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
    //*
    splitChunks: {
      // chunks: 'all',
      cacheGroups: {
        default: {
          minChunks: 1,
          // priority: -20,
          // minSize: 0,
          enforce: true,
        },
      },
    },
    // */
  },
};
