jQuery.sap.require("routing.myRouter");
jQuery.sap.declare("routing.Component");

sap.ui.core.UIComponent.extend("routing.Component", {
	metadata: {
        config:{
            config1:{
                "test": "01",
                "test1": "02"
            },
            config2:{
                "test3": "01",
                "test4": "02"
            }
        },
		routing: {
			config: {
				routerClass : routing.myRouter,
				viewType: "XML",
				viewPath: "view",
				targetControl: "splitApp",
				clearTarget: false
			},
			routes: [
				{	pattern: "",
					name : "Home",
					view : "home",
					targetAggregation : "masterPages",
				},
				{	pattern: "post",
					name : "Post",
					view : "post",
					targetAggregation : "detailPages",
				},
				{	pattern: "search",
					name : "Search",
					view : "search",
					targetAggregation : "detailPages",
				},
				{
					pattern : "post/{postId}",
					name : "PostDetail",
					view : "postDetail",
					targetAggregation: "detailPages"
				}  
				
			]
		}
	},

	init : function () {

		// call overwritten init (calls createContent)
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
		
		return sap.ui.core.routing.Router.getRouter("appRouter").initialize();
		
		

	},

	createContent : function () {
		
		var oView = sap.ui.view({
			id : "app",
			viewName : "view.App",
			type : "XML",
			viewData : { component : this }
		});

		// done
		return oView;
	}

});