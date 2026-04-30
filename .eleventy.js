module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/pictures");
  eleventyConfig.addPassthroughCopy("src/css");

  return {
    pathPrefix: "/CCTF/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};