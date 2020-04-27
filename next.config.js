const withimages = require("next-images");
const withCss = require("@zeit/next-css");
const withVideos = require("next-videos");


module.exports = withCss(withimages(withVideos()));
