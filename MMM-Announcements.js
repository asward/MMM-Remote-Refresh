Module.register("MMM-Announcements",{

    text: "",
    announcements: {},
    interval: {} ,
    index: 0,
	// Default module config.
	defaults: {
        announcements: [{"text":" ˁ˚ᴥ˚ˀ ","duration":20}],
	},

    getFilteredAnnouncements: function(){
        //FILTER ANNOUNCEMENTS TO THOSE APPLICABLE TO CURRENT STATE
        var self = this ;
        var fa ;
        if(Array.isArray(self.announcements.announcements)){
            fa = self.announcements.announcements.slice();
            // //DATE
            // fa = fa.map(x=>moment().range(new Date(x.date_start),new Date(date_end)).contains(moment()) ) ;
            // //DOW
            // fa = fa.map(x=>x ) ;
            // //TIME
            // fa = fa.map(x=>x ) ;
            // //WEATHER
            // fa = fa.map(x=>x ) ;

            
        }
        if (fa === undefined || fa.length == 0) {
            fa = self.defaults.announcements;
        } 
        return fa ;
    },

    updateAnnouncement: function(){
        var self = this ;
        var filteredAnnouncements = self.getFilteredAnnouncements() ;
        var maxIndex = filteredAnnouncements.length-1 ;

        if(++self.index > maxIndex){
            self.index = 0 ;
        }
        self.current_announcement = filteredAnnouncements[self.index] ;
    },

	// Override dom generator.
	getDom: function() {
        var self = this ;

        if(null==self.timeout){
            self.updateAnnouncement() ;

            self.timeout = setTimeout(()=>{
                self.timeout=null ;
                self.updateDom(parseInt(self.current_announcement.duration*.05, 10));
            },self.current_announcement.duration*1000) ;
        }

        var wrapper = document.createElement("div");
        wrapper.innerHTML = self.current_announcement.text; 
        

        return wrapper;
    },

    start: function() {
        var self = this ;
        this.config.initialized = false ;
        this.sendSocketNotification('GET_ANNOUNCEMENTS', "");
        Log.log(this.name + ' is started!');        

        self.updateDom(0);
    },

    socketNotificationReceived:function(notification, payload) {
        var self = this ;
        if (notification == "UPDATE_ANNOUNCEMENTS") {
            
            Log.log(this.name + " received a module notification: " + notification);
            self.announcements = payload;
            self.updateDom(0);
        } 
    },

    notificationReceived: function(notification, payload, sender) {
        var self = this ;
        if (notification == "CURRENTWEATHER_DATA") {
			this.setCurrentWeatherType(payload.data);
		}
    },
    
	// From data currentweather set weather type
	setCurrentWeatherType: function(data) {
		var weatherIconTable = {
			"01d": "day_sunny",
			"02d": "day_cloudy",
			"03d": "cloudy",
			"04d": "cloudy_windy",
			"09d": "showers",
			"10d": "rain",
			"11d": "thunderstorm",
			"13d": "snow",
			"50d": "fog",
			"01n": "night_clear",
			"02n": "night_cloudy",
			"03n": "night_cloudy",
			"04n": "night_cloudy",
			"09n": "night_showers",
			"10n": "night_rain",
			"11n": "night_thunderstorm",
			"13n": "night_snow",
			"50n": "night_alt_cloudy_windy"
		};
		this.currentWeatherType = weatherIconTable[data.weather[0].icon];
    },
    
	getScripts: function() {
        return ["moment.js"];
	},
});