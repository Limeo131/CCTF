module.exports = function(eleventyConfig) {
  // Copy pictures directory to output
  eleventyConfig.addPassthroughCopy("src/pictures");
  eleventyConfig.addPassthroughCopy("src/css");

  // Process .html files as Nunjucks
  return {
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
