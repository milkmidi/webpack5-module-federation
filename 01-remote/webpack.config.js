const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
  ModuleFederationPlugin
} = require("webpack").container;
const path = require("path");
const deps = require('./package.json').dependencies;

module.exports = {
  entry: {
    app: "./src/index",
  },
  mode: "development",
  devtool: false,
  output: {
    publicPath: "http://localhost:9527/",
  },
  module: {
    rules: [{
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"]
        },
      },
      {
        test: /\.css?$/,
        use: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
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
      name: "app1",
      // library: { type: "var", name: "app1" },
      /* library: {
        type: "umd",
        name: "app1"
      }, */
      filename: "remoteEntry.js",
      exposes: {
        // expose each component
        "./Header": "./src/components/Header",
        "./Footer": "./src/components/Footer",
        "./MyModel": "./src/libs/MyModel",
        "./useCounter": "./src/hooks/useCounter",
        "./NameContextProvider": "./src/context/NameContextProvider",
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
        ...deps,
        react: {
          // eager: true, // 加了這個其他的都不好載入，但本機就不需要 bootstrap.jsx
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          // eager: true,
          singleton: true,
          requiredVersion: deps['react-dom'],
        }
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      chunks: ['vendors', 'app']
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9527,
  },
  // https://webpack.js.org/configuration/optimization/
  optimization: {
    minimize: false,
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