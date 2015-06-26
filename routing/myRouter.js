
jQuery.sap.require("sap.ui.core.routing.History");
jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
jQuery.sap.require("sap.ui.core.routing.Router");
jQuery.sap.declare("routing.myRouter");

sap.ui.core.routing.Router.extend("routing.myRouter", {

	constructor : function() {
	    sap.ui.core.routing.Router.apply(this, arguments);
	    this.register("appRouter");
		this.routeHandler = new sap.m.routing.RouteMatchedHandler(this);
	},

	destroy : function() {
		sap.ui.core.routing.Router.prototype.destroy.apply(this, arguments);
		if (this.routeHandler) {
	        this.routeHandler.destroy();
	      }
	}
	

});