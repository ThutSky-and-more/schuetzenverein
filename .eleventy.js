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
    return collectionApi.getFilteredByGlob("./content/news/*.md").reverse();
  });

  eleventyConfig.addCollection("ranglisten", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./content/ranglisten/*.md").reverse();
  });

  eleventyConfig.addCollection("galerie", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./content/galerie/*.md").reverse();
  });

  eleventyConfig.addCollection("vorstand", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./content/vorstand/*.md");
  });

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
