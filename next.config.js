const withPlugins = require("next-compose-plugins");
const withPreact = require("next-plugin-preact");
const withSvgr = require("next-svgr");
const withImages = require("next-optimized-images");

module.exports = withPlugins([
  withPreact,
  withSvgr,
  [
    withImages,
    {
      optimizeImages: true,
      optimizeImagesInDev: true,
      handleImages: ["jpeg", "png", "webp"],
      responsive: {
        // eslint-disable-next-line import/no-extraneous-dependencies
        adapter: require("responsive-loader/sharp"),
      },
    },
  ],
]);
