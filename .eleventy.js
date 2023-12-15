module.exports = function(eleventyConfig) {

	// Výchozí výstupní složka: _site

	// Zkopírovat images/ do _site/images
	eleventyConfig.addPassthroughCopy("image");
  eleventyConfig.addPassthroughCopy("movie");
  eleventyConfig.addPassthroughCopy("_includes");

	// Zkopírovat css/ to _site/css/
	eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("scss");

  // toto přidej, abys viděla i druhou adresu serveru v lokální síti
    eleventyConfig.setServerOptions({showAllHosts: true,});

  
  return {
    // možné formáty šablon
    templateFormats: ["njk", "html", "md", "liquid"],

    // jako šablonovací jazyk zvolíme Nunjucks
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }

};