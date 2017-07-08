
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
        $('.reload-button').on('click', function() {
            location.reload();
        });
        
        function mustache(ind){
        out = Mustache.render(tpl[ind].tpl);
	    $('#canvas').html(out);
        }

        $(document).ready(function(){
            /*mustache(0);*/
        });

        $('#canvas').on('click','#btn_inicio',function(){
            mustache(1);
            });
        
        $('#canvas').on('click','#btn_jugar',function(){
           mustache(2); 
        });

	});

});
