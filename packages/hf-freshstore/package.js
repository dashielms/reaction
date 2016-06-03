Package.describe({
	name: "hf:freshstore",
	summary: "Head Fresh Custom Store",
	version: "0.1.0"
});

Package.onUse(function (api) {
	api.versionsFrom("METEOR@1.3");

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

	api.addFiles("server/register.js", "server");

	// Tells meteor to use the LESS precompiler.
	// Any included LESS files must appear below this use() call in order to be compiled.  
	api.use("less");

	// Tells meteor to use styles defined in rc:core-theme (identical to rc:default-theme)
	api.use("reactioncommerce:core-theme@2.0.0");

	// TODO: Paths should be only on the client (i.e. client/styles/variables.less, etc)
	api.addFiles("styles/variables.less", "client", {isImport: true});
  api.addFiles("styles/base.less", "client", {isImport: true});
	api.addFiles("main.less", "client");

});
