
const NodeHelper = require("node_helper");

Module = {
	configDefaults: {},
	register: function (name, moduleDefinition) {
		// console.log("Module config loaded: " + name);
		Module.configDefaults[name] = moduleDefinition.defaults;
	}
};

module.exports = NodeHelper.create({
	// Subclass start method.
	start: function() {
        var self = this;
        
        console.log("Starting node helper for: " + self.name);
        
        this.createRoutes();    
    },

    createRoutes: function(){
        var self = this ;
        this.expressApp.route('/refresh')
        .get(function (req, res) {
            console.log("GOT REFRESH") ;
            self.sendSocketNotification("REFRESH_REMOTE_PAGE",{});
            res.send(200); 
            console.log("SENT REFRESH") ;
        });
    },
});