const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");
const cache = require("./cache")

module.exports = withPlugins([
    withPWA,
    {
      pwa: {
        disable: process.env.NODE_ENV === 'development',
        dest: "public",
        runtimeCaching: cache
      },
    },
], {
    future: {webpack5: true},
    compress: true,
    target: "serverless"
})