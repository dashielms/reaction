Package.describe({
	name: "hf:freshstore",
	summary: "Head Fresh Custom Store",
	version: "0.1.0"
});

Package.onUse(function (api) {
	api.versionsFrom("METEOR@1.3");

	// core meteor dependencies
	api.use("meteor-base");
	api.use("mongo");
	api.use("ecmascript");
	api.use("es5-shim");
	api.use("blaze-html-templates");
	api.use("session");
	api.use("jquery");
	api.use("tracker");

	// meteor add-on packages
	api.use("underscore");
	api.use("logging");
	api.use("reload");
	api.use("random");
	api.use("ejson");
	api.use("check");
	api.use("http");
	api.use("reactive-var");
	api.use("reactive-dict");

	// reaction package dependencies
  api.use("reactioncommerce:core@0.13.0");

  // theme dependencies
	api.use("less");
	api.use("reactioncommerce:core-theme@2.0.0");

	// server files
	api.addFiles("server/register.js", "server");
  api.addFiles("server/load.js", "server");

  // private fixture data
  api.addAssets("private/data/Products.json", "server");
  api.addAssets("private/data/Shops.json", "server");
  api.addAssets("private/data/Tags.json", "server");

	// client files
	api.addFiles("client/styles/variables.less", "client", {isImport: true});
  api.addFiles("client/styles/base.less", "client", {isImport: true});
	api.addFiles("client/main.less", "client");

	// template files
	api.addFiles("client/templates/layouts/core.html", "client");
  api.addFiles("client/templates/products/productsLanding.html", "client");
  api.addFiles("client/templates/products/productsLanding.js", "client");
  api.addFiles("client/templates/products/productGrid/productGrid.html", "client");
  api.addFiles("client/templates/products/productGrid/productGrid.js", "client");
  api.addFiles("client/templates/products/productGrid/content/content.html", "client");
  api.addFiles("client/templates/products/productGrid/content/content.js", "client");
  api.addFiles("client/templates/products/productGrid/controls/controls.html", "client");
  api.addFiles("client/templates/products/productGrid/controls/controls.js", "client");
  api.addFiles("client/templates/products/productGrid/item/item.html", "client");
  api.addFiles("client/templates/products/productGrid/item/item.js", "client");
  api.addFiles("client/templates/products/productGrid/notice/notice.html", "client");
  api.addFiles("client/templates/products/productGrid/notice/notice.js", "client");
  api.addFiles("client/templates/products/productList/productList.html", "client");
  api.addFiles("client/templates/products/productList/productList.js", "client");

});
