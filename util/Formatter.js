jQuery.sap.declare("my.Formatter");

my.Formatter = {
	
	link: function(id){
		return "#post/"+id;
	},
	postedBy : function(name){
		
		return "Here comes "+name+"'s post...!!!"
	}
		
};