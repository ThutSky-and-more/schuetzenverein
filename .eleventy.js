module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("pdf");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("manifest.json");

  eleventyConfig.addFilter("datum", function(value) {
    if (!value) return "";
    return new Date(value).toLocaleDateString("de-CH");
  });

  eleventyConfig.addCollection("news", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/news/*.md").reverse();
  });

  eleventyConfig.addCollection("ranglisten", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/ranglisten/*.md").reverse();
  });

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
