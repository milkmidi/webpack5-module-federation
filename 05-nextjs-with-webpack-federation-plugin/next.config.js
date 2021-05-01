/* eslint-disable max-len */
const {
  dependencies: deps,
} = require('./package.json');

module.exports = {
  future: {
    webpack5: true,
  },
  
  webpack: (config, options) => {
    /** Webpack 5 */
    console.log('webpack version:', options.webpack.version); // 5.35.0

    const { ModuleFederationPlugin } = options.webpack.container;

    config.plugins.push(
      new ModuleFederationPlugin({
        name: 'host',
        remotes: {
          app1: 'app1',
          // app1: 'app1@http://localhost:9527/remoteEntry.js',
        },
        shared: {
          // ...deps,
          react: {
            eager: true,
            singleton: true,
            requiredVersion: deps.react,
          },
          'react-dom': {
            eager: true,
            singleton: true,
            requiredVersion: deps['react-dom'],
          },
        },
      }),
    );
    return config;
  },
};
