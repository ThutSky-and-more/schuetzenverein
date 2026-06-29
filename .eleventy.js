module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("pdf");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("manifest.json");

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
