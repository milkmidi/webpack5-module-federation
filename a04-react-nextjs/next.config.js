const path = require("path");
const {
  dependencies: deps,
} = require('./package.json');

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  webpack5: true,
  webpack: (config, options) => {
    const { webpack, isServer } = options;
    config.experiments = { topLevelAwait: true };

    const federationConfig = {
      remoteType: "var",
      remotes: {
        app1: "app1",
        // app1: "app1@http://localhost:9527/remoteEntry.js",
      },
      shared: {
        lodash: {
          eager: true,
        },
        react: {
          eager: true,
          // singleton: true,
          // requiredVersion: deps.react,
        },
        'react-dom': {
          eager: true,
          // singleton: true,
          // requiredVersion: deps['react-dom'],
        }
      },
    };
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin(federationConfig)
    );
    
    if (!options.webpack.container) {
      throw new Error("Module Federation only works with Webpack 5");
    }
    return config;
  },
};
