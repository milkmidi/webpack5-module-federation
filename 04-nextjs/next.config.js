const path = require("path");
const {
  dependencies: deps,
} = require('./package.json');

module.exports = {
  future: { webpack5: true },

  webpack: (config, options) => {
    console.log('webpack version:', options.webpack.version);
    const federationConfig = {
      remoteType: "var",
      remotes: {
        app1: "app1",
        // app1: "app1@http://localhost:9527/remoteEntry.js",
      },
      shared: {
        react: {
          eager: true,
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          eager: true,
          singleton: true,
          requiredVersion: deps['react-dom'],
        }
      },
    };
    if (!options.webpack.container) {
      throw new Error("Module Federation only works with Webpack 5");
    }
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin(federationConfig)
    );

    return config;
  },
};
