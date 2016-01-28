var dev = dev || {};

dev.console = {
	show: ['default'], //modify with dev.console.show = ["context1", "context2"];
	addGroup: function(text){
		if(_.isString(text)){
			dev.console.show.push(text);
		} else {
			throw("You must provide a string to add a watching group.");	
		};
	},
	removeGroup: function(text){
		if(_.isString(text)){
			_.remove(dev.console.show, function(el){
				return el == text;
			});
		} else {
			throw("You must provide a string to remove a watching group.");	
		}
	},
	run: function(consoleObj, context, type){
		if(context == undefined){
			var context = "default";
		}
		//dev.console.log(consoleObj, "myContext", type);
		if(_.indexOf(this.show, context) != -1){
			switch(type){
				case "warn":
					console.warn(consoleObj);
					break;
				default:
					console.log(consoleObj);
			}
		}
	},
	warn: function(consoleObj, context){
		dev.console.run(consoleObj, context, 'warn');
	},
	log: function(consoleObj, context){
		dev.console.run(consoleObj, context, 'log');
	}
};
