const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  // Static assets copied as-is into the build output
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  eleventyConfig.addPlugin(pluginRss);

  // Blog posts, newest first
  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/content/blog/*.md").sort((a, b) => b.date - a.date);
  });

  // Front-matter dates parse as UTC midnight; format in UTC too, or a
  // negative-offset timezone rolls the displayed date back a day/month.
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-US", { year: "numeric", month: "short", timeZone: "UTC" });
  });

  eleventyConfig.addFilter("dateMonth", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-US", { month: "short", timeZone: "UTC" });
  });

  eleventyConfig.addFilter("dateYear", (dateObj) => {
    return new Date(dateObj).getUTCFullYear();
  });

  eleventyConfig.addFilter("isoDate", (dateObj) => {
    return new Date(dateObj).toISOString();
  });

  eleventyConfig.addFilter("slugifyTag", (tag) => {
    return String(tag).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  });

  eleventyConfig.addFilter("statusGroup", (status) => {
    return String(status).split("-")[0].trim();
  });

  eleventyConfig.addFilter("pad2", (num) => {
    return String(num).padStart(2, "0");
  });

  eleventyConfig.addFilter("uniqueTags", (posts) => {
    const seen = new Set();
    posts.forEach((p) => (p.data.tags || []).forEach((t) => seen.add(t)));
    return [...seen].sort();
  });

  eleventyConfig.addFilter("uniqueYearsDesc", (items) => {
    return [...new Set(items.map((i) => i.year))].sort((a, b) => b - a);
  });

  eleventyConfig.setServerOptions({
    domDiff: false,
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "11ty.js"],
  };
};
