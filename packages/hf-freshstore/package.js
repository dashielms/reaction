Package.describe({
	name: "hf:freshstore",
	summary: "Head Fresh Custom Store",
	version: "0.1.0"
});

Package.onUse(function (api) {
	api.versionsFrom("METEOR@1.3");

	// Tells meteor to use the LESS precompiler.
	// Any included LESS files must appear below this use() call in order to be compiled.  
	api.use("less");

	// Tells meteor to use styles defined in rc:core-theme (identical to rc:default-theme)
	api.use("reactioncommerce:core-theme@2.0.0");

	api.addFiles("client/main.less", "client");
	api.addFiles("client/styles/variables.less", "client", {isImport: true});
  api.addFiles("client/styles/base.less", "client", {isImport: true});

});
