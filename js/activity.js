
define(function (require) {
        var activity = require("sugar-web/activity/activity");
        var datastore = require("sugar-web/datastore");
        var jquery = require("jquery");
        var Mustache = require("mustache");
        var tpl = require("../js/tpl.js");
        

	// Manipulate the DOM only when it is ready.
	require(['domReady!'], function (doc) {
        var out = "";

		// Initialize the activity.
		activity.setup();
        
        $(document).ready(function(){
	    out = Mustache.render(tpl[0].tpl);
	    $('#canvas').html(out);
	    });
        
        $('#canvas').on('click','#btn_inicio',function(){
           console.log("key press"); 
        });

	});

});
