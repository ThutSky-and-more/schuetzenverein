module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("pdf");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("manifest.json");

  eleventyConfig.addFilter("datum", function(value) {
    if (!value) return "";
    return new Date(value).toLocaleDateString("de-CH");
  });

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
