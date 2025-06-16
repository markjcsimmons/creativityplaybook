module.exports = function(eleventyConfig) {
  eleventyConfig.setLibrary("md", require("markdown-it")({ html: true }));
  // Pass-through static assets
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy({ "assets": "assets" });
  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
}; 