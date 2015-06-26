sap.ui.controller("view.postDetail", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.postDetail
*/
	onInit: function() {
		
		sap.ui.core.routing.Router.getRouter("appRouter").attachRoutePatternMatched(this.handleRouteMatched, this);
},

handleRouteMatched : function(evt) {
	var item = evt.getParameter("arguments").postId;
	// Create JSON data model
	this.oModel = new sap.ui.model.json.JSONModel();
	this.oModel.loadData("posts/"+item+".json");
	this.getView().setModel(this.oModel);
},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.postDetail
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.postDetail
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.postDetail
*/
//	onExit: function() {
//
//	}
handleCancelPress : function(){
	
	sap.ui.core.routing.Router.getRouter("appRouter").navTo("Search");
}
});