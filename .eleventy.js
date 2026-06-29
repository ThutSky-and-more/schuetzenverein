module.exports = function(eleventyConfig) {
  eleventyConfig.ignores.add(".netlify/**");

  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("pdf");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("manifest.json");

  eleventyConfig.addFilter("date", function(value, format = "%d.%m.%Y") {
    const date = value instanceof Date ? value : new Date(value);

    if (Number.isNaN(date.getTime())) {
      return value;
    }

    const parts = {
      "%d": String(date.getDate()).padStart(2, "0"),
      "%m": String(date.getMonth() + 1).padStart(2, "0"),
      "%Y": String(date.getFullYear())
    };

    return Object.entries(parts).reduce(
      (formattedDate, [token, replacement]) => formattedDate.replaceAll(token, replacement),
      format
    );
  });

  eleventyConfig.addCollection("news", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/news/*.md").reverse();
  });
