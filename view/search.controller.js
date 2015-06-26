jQuery.sap.require("pk.util.Formatter");
jQuery.sap.require("routing.Component");
sap.ui.controller("view.search", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.search
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
			images:[{src:"img/Shout-Out.png"},{src:"img/t-mobile-mytouch-4g.0.jpg"}],
			submit: false
		});
		var posts = [
						{
					        "id": "01", 
							"title": "Suggest a good place for team lunch",
					        "category": "1", 
					        "description": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).",
							"name" : "Pradeep",
							"email" : "ppagadala@prokarma.com",
							"phone": "8008216958",
							"imageUrl": ["img/phones/motorola-xoom-with-wi-fi.0.jpg","img/phones/motorola-xoom.0.jpg"],
							"date": "10/04/2015",
							"NbrOfReplies": 34
					    }, 
					    {
					        "id": "02", 
							"title": "Suggest a good place for team outing",
					        "category": "2", 
					        "description": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).",
							"name" : "Pradeep",
							"email" : "ppagadala@prokarma.com",
							"phone": "8008216958",
							"imageUrl": ["img/phones/motorola-xoom-with-wi-fi.0.jpg","img/phones/motorola-xoom.0.jpg"],
							"date": "10/04/2015",
							"NbrOfReplies": 67
					    }, 
					    {
					        "id": "03", 
							"title": "Suggest a good place for team outing",
					        "category": "2", 
					        "description": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).",
							"name" : "Pradeep",
							"email" : "ppagadala@prokarma.com",
							"phone": "8008216958",
							"imageUrl": ["img/phones/motorola-xoom-with-wi-fi.0.jpg","img/phones/motorola-xoom.0.jpg"],
							"date": "10/04/2015",
							"NbrOfReplies": 90
					    }, 
					    {
					        "id": "04", 
							"title": "Suggest a good place for team outing",
					        "category": "2", 
					        "description": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).",
							"name" : "Pradeep",
							"email" : "ppagadala@prokarma.com",
							"phone": "8008216958",
							"imageUrl": ["img/phones/motorola-xoom-with-wi-fi.0.jpg","img/phones/motorola-xoom.0.jpg"],
							"date": "09/04/2015",
							"NbrOfReplies": 65
					    }, 
					    {
					        "id": "05", 
							"title": "Suggest a good place for team outing",
					        "category": "2", 
					        "description": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).",
							"name" : "Pradeep",
							"email" : "ppagadala@prokarma.com",
							"phone": "8008216958",
							"imageUrl": ["img/phones/motorola-xoom-with-wi-fi.0.jpg","img/phones/motorola-xoom.0.jpg"],
							"date": "09/04/2015",
							"NbrOfReplies": 45
					    }, 
					    {
					        "id": "06", 
							"title": "Suggest a good place for team outing",
					        "category": "2", 
					        "description": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).",
							"name" : "Pradeep",
							"email" : "ppagadala@prokarma.com",
							"phone": "8008216958",
							"imageUrl": ["img/phones/motorola-xoom-with-wi-fi.0.jpg","img/phones/motorola-xoom.0.jpg"],
							"date": "09/04/2015",
							"NbrOfReplies": 77
					    }, 
					    {
					        "id": "07", 
							"title": "Suggest a good place for team outing",
					        "category": "2", 
					        "description": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).",
							"name" : "Pradeep",
							"email" : "ppagadala@prokarma.com",
							"phone": "8008216958",
							"imageUrl": ["img/phones/motorola-xoom-with-wi-fi.0.jpg","img/phones/motorola-xoom.0.jpg"],
							"date": "09/04/2015",
							"NbrOfReplies": 65
					    }, 
					    {
					        "id": "08", 
							"title": "Suggest a good place for team outing",
					        "category": "2", 
					        "description": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).",
							"name" : "Pradeep",
							"email" : "ppagadala@prokarma.com",
							"phone": "8008216958",
							"imageUrl": ["img/phones/motorola-xoom-with-wi-fi.0.jpg","img/phones/motorola-xoom.0.jpg"],
							"date": "09/04/2015",
							"NbrOfReplies": 43
					    }, 
					    {
					        "id": "09", 
							"title": "Suggest a good place for team outing",
					        "category": "2", 
					        "description": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).",
							"name" : "Pradeep",
							"email" : "ppagadala@prokarma.com",
							"phone": "8008216958",
							"imageUrl": ["img/phones/motorola-xoom-with-wi-fi.0.jpg","img/phones/motorola-xoom.0.jpg"],
							"date": "09/04/2015",
							"NbrOfReplies": 25
					    }, 
					    {
					        "id": "10", 
							"title": "Suggest a good place for team outing",
					        "category": "2", 
					        "description": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).",
							"name" : "Pradeep",
							"email" : "ppagadala@prokarma.com",
							"phone": "8008216958",
							"imageUrl": ["img/phones/motorola-xoom-with-wi-fi.0.jpg","img/phones/motorola-xoom.0.jpg"],
							"date": "13/04/2015",
							"NbrOfReplies": 24
					    }, 
					    {
					        "id": "11", 
							"title": "Suggest a good place for team outing",
					        "category": "2", 
					        "description": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).",
							"name" : "Pradeep",
							"email" : "ppagadala@prokarma.com",
							"phone": "8008216958",
							"imageUrl": ["img/phones/motorola-xoom-with-wi-fi.0.jpg","img/phones/motorola-xoom.0.jpg"],
							"date": "13/04/2015",
							"NbrOfReplies": 32
					    }, 
					    {
					        "id": "12", 
							"title": "Suggest a good place for team outing",
					        "category": "2", 
					        "description": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).",
							"name" : "Pradeep",
							"email" : "ppagadala@prokarma.com",
							"phone": "8008216958",
							"imageUrl": ["img/phones/motorola-xoom-with-wi-fi.0.jpg","img/phones/motorola-xoom.0.jpg"],
							"date": "13/04/2015",
							"NbrOfReplies": 30
					    }, 
					    {
					        "id": "13", 
							"title": "Suggest a good place for team outing",
					        "category": "2", 
					        "description": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).",
							"name" : "Pradeep",
							"email" : "ppagadala@prokarma.com",
							"phone": "8008216958",
							"imageUrl": ["img/phones/motorola-xoom-with-wi-fi.0.jpg","img/phones/motorola-xoom.0.jpg"],
							"date": "13/04/2015",
							"NbrOfReplies": 10
					    }, 
					    {
					        "id": "14", 
							"title": "Suggest a good place for team outing",
					        "category": "2", 
					        "description": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).",
							"name" : "Pradeep",
							"email" : "ppagadala@prokarma.com",
							"phone": "8008216958",
							"imageUrl": ["img/phones/motorola-xoom-with-wi-fi.0.jpg","img/phones/motorola-xoom.0.jpg"],
							"date": "13/04/2015",
							"NbrOfReplies": 11
					    }, 
					    {
					        "id": "15", 
							"title": "Suggest a good place for team outing",
					        "category": "2", 
					        "description": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).",
							"name" : "Pradeep",
							"email" : "ppagadala@prokarma.com",
							"phone": "8008216958",
							"imageUrl": ["img/phones/motorola-xoom-with-wi-fi.0.jpg","img/phones/motorola-xoom.0.jpg"],
							"date": "13/04/2015",
							"NbrOfReplies": 15
					    }, 
					    {
					        "id": "16", 
							"title": "Suggest a good place for team outing",
					        "category": "2", 
					        "description": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).",
							"name" : "Pradeep",
							"email" : "ppagadala@prokarma.com",
							"phone": "8008216958",
							"imageUrl": ["img/phones/motorola-xoom-with-wi-fi.0.jpg","img/phones/motorola-xoom.0.jpg"],
							"date": "13/04/2015",
							"NbrOfReplies": 12
					    }, 
					    {
					        "id": "17", 
							"title": "Suggest a good place for team outing",
					        "category": "2", 
					        "description": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).",
							"name" : "Pradeep",
							"email" : "ppagadala@prokarma.com",
							"phone": "8008216958",
							"imageUrl": ["img/phones/motorola-xoom-with-wi-fi.0.jpg","img/phones/motorola-xoom.0.jpg"],
							"date": "13/04/2015",
							"NbrOfReplies": 13
					    }, 
					    {
					        "id": "18", 
							"title": "Suggest a good place for team outing",
					        "category": "2", 
					        "description": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).",
							"name" : "Pradeep",
							"email" : "ppagadala@prokarma.com",
							"phone": "8008216958",
							"imageUrl": ["img/phones/motorola-xoom-with-wi-fi.0.jpg","img/phones/motorola-xoom.0.jpg"],
							"date": "13/04/2015",
							"NbrOfReplies": 13
					    }, 
					    {
					        "id": "19", 
							"title": "Suggest a good place for team outing",
					        "category": "2", 
					        "description": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).",
							"name" : "Pradeep",
							"email" : "ppagadala@prokarma.com",
							"phone": "8008216958",
							"imageUrl": ["img/phones/motorola-xoom-with-wi-fi.0.jpg","img/phones/motorola-xoom.0.jpg"],
							"date": "13/04/2015",
							"NbrOfReplies": 13
					    }, 
					    {
					        "id": "20", 
							"title": "Suggest a good place for team outing",
					        "category": "2", 
					        "description": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).",
							"name" : "Pradeep",
							"email" : "ppagadala@prokarma.com",
							"phone": "8008216958",
							"imageUrl": ["img/phones/motorola-xoom-with-wi-fi.0.jpg","img/phones/motorola-xoom.0.jpg"],
							"date": "13/04/2015",
							"NbrOfReplies": 13
					    }];
				this.oModel.setProperty("/posts",posts);
				this.getView().setModel(this.oModel);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.search
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.search
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.search
*/
//	onExit: function() {
//
//	}
	
	handleHelpPress : function(){
		this.oModel.setProperty("/submit",true);
        console.log(sap.ui.xmlview("view/search").byId("idPostsTable").getMetadata());
        console.log(routing.Component.getMetadata());
	},
	handleClearPress: function(){
		this.oModel.setProperty("/submit",false);
	},
	handleCancelPress: function(){
		sap.ui.core.routing.Router.getRouter("appRouter").navTo("Post");
	}
});