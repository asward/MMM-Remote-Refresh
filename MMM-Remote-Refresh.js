Module.register("MMM-Remote-Refresh",{
    defaults: {
	},

    start: function(){
        Log.log(this.name + " STARTING UP!");
        //ESTABLISH SOCKET PATH
        this.sendSocketNotification("READY", {});
    },
	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = "";
		return wrapper;
    },
    
    socketNotificationReceived:function(notification, payload) {
        var self = this ;
        if (notification == "REFRESH_REMOTE_PAGE") {
            Log.log(this.name + " received a module notification: " + notification);
            location.reload();
        } 
    },
});