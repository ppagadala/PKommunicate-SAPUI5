sap.ui.controller("view.post", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.post
*/
	onInit: function() {
		// Create JSON data model
		this.oModel = new sap.ui.model.json.JSONModel();
		this.oModel.setData({
			questionCategories:[
			    {category:"Select Category", enabled:false},
				{category:"Food", enabled:true},
				{category:"Fun Activities", enabled:true},
				{category:"House Rental", enabled:true},
				{category:"Gadgets", enabled:true},
				{category:"Vehicle Polling", enabled:true}],
			images:[{src:"img/Shout-Out.png"},{src:"img/t-mobile-mytouch-4g.0.jpg"}]
		}),
		this.getView().setModel(this.oModel);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.post
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.post
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.post
*/
//	onExit: function() {
//
//	}

});