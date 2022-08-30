/* eslint-disable @typescript-eslint/no-var-requires */
const { createReactWebpackConfig } = require("@leanjs/webpack-react");

module.exports = {
  devServer: { port: 33000 },
  selfHosted: {
    createRuntimePackage: "@alicante-microfrontends/runtime-shared",
  },
  webpack: {
    react: createReactWebpackConfig()
  },
};
