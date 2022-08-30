// eslint-disable-next-line @typescript-eslint/no-var-requires
const { HostWebpackPlugin } = require("@leanjs/webpack");
const packageJsonDeps = require("./package.json").dependencies;
const withTM = require("next-transpile-modules")([
  "@leanjs/core",
  "@leanjs/react",
  "@alicante-microfrontends/runtime-react",
  "@alicante-microfrontends/runtime-shared",
]);

module.exports = withTM({
  webpack: (config) => {
    config.plugins.push(
      new HostWebpackPlugin({
        eager: true,
      })
    );

    return config;
  },
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
});
