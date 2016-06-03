ReactionCore.registerPackage({
	label: "Fresh Store",
	name: "hf",
	icon: "fa fa-vine",
	autoEnable: true,
});

layout: [{
	layout: "coreLayoutFreshstore",
	workflow: "coreWorkflow",
	collection: "Products",
	theme: "default",
	enabled: true,
	structure: {
		template: "products",
		layoutHeader: "layoutHeader",
		layoutFooter: "layoutFooter",
		notFound: "productNotFound",
		dashboardHeader: "",
		dashboardControls: "",
		adminControlsFooter: "adminControlsFooter",
	}
}]