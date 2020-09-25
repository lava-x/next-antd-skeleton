const fs = require("fs");
const path = require("path");
const lessToJS = require("less-vars-to-js");
const withImages = require("next-images");
const withLess = require("@zeit/next-less");
const withPlugins = require("next-compose-plugins");
const { nextI18NextRewrites } = require("next-i18next/rewrites");

const localeSubpaths = {};

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, "./styles/custom.less"), "utf8")
);

// https://nextjs.org/docs/api-reference/next.config.js/introduction
const nextConfig = {
  publicRuntimeConfig: {
    localeSubpaths
  },
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  poweredByHeader: false
};

module.exports = withPlugins(
  [
    [
      withLess,
      {
        lessLoaderOptions: {
          javascriptEnabled: true,
          modifyVars: themeVariables // make your antd custom effective
        },
        webpack: (config, { isServer }) => {
          if (isServer) {
            const antStyles = /antd\/.*?\/style.*?/;
            const origExternals = [...config.externals];
            config.externals = [
              (context, request, callback) => {
                if (request.match(antStyles)) return callback();
                if (typeof origExternals[0] === "function") {
                  origExternals[0](context, request, callback);
                } else {
                  callback();
                }
              },
              ...(typeof origExternals[0] === "function" ? [] : origExternals)
            ];

            config.module.rules.unshift({
              test: antStyles,
              use: "null-loader"
            });
          }
          return config;
        }
      }
    ],
    withImages
  ],
  nextConfig
);
