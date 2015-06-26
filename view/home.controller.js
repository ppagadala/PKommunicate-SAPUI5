sap.ui.controller("view.home", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf newpk.home
*/
	onInit: function() {
		sap.ui.core.UIComponent.getRouterFor(this).attachRouteMatched(this.onRouteMatched, this);
		var oModel = new sap.ui.model.json.JSONModel();
		var menuCategories = [
			                  	{"CategoryName":"Home"},
								{"CategoryName":"Post"},
								{"CategoryName":"Search"},
								{"CategoryName":"Admin"}
		                  	];
		
		oModel.setProperty("/menuCategories",menuCategories);
		//sap.ui.getCore().setModel(oModel);
		this.getView().setModel(oModel);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf newpk.home
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf newpk.home
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf newpk.home
*/
//	onExit: function() {
//
//	}
	handleCategoryListItemPress : function(oEvent){
		var selected = oEvent.getSource().getProperty("title");
		sap.ui.core.routing.Router.getRouter("appRouter").navTo(selected);
	},
	
	onRouteMatched: function(oEvent){
		//var oList = this.getView().byId("menuList");
		//var sName = oEvent.getParameter("name");
		
	}
});