define(function (require) {
        var activity = require("sugar-web/activity/activity");
        var datastore = require("sugar-web/datastore");
        var jquery = require("jquery");
        var sweetalert = require("sweetalert");
        var Mustache = require("mustache");
        var tpl = require("../js/tpl.js");
    
    function nulo(num){
        if(isNaN(num)) return 0;
        else return num;
    }
    
    function suma(valor){
        var list = new Array();
        var suma = 0;
        for(var i=0;i<10;i++){
            var val = nulo(parseFloat($('#'+valor+(i+1)).val()));
            list.push(val);
            suma += list[i];
        }
        return suma;
    }
    
// Manipulate the DOM only when it is ready.
	require(['domReady!'], function (doc) {
        var out = "";
        
        function mustache(id,ind){
        out = Mustache.render(tpl[ind].tpl);
	    $(id).append(out);
        }

		// Initialize the activity.
		activity.setup();
        $('.reload-button').on('click', function() {
            location.reload();
        });
        
        function table(){
            mustache('#canvas',2);
            for(var i=0; i<10; i++){
                output = Mustache.render(tpl[3].tpl,{text : (i+1)});
                $('#tb1').append(output);
            }
            mustache('#tb1',4);
        }
        
        

        $(document).ready(function(){
            table();
            /*mustache(0);*/
        });

        $('#canvas').on('click','#btn_inicio',function(){
            mustache(1);
            });
        
        /*$('#canvas').on('click','#btn_jugar'); 
        
        });*/
        
        
        
        /*Pintar en juego 1*/
        $('#canvas').on('click','#btn_acep',function(){
            var total_nec = suma('nec');
            var total_des = suma('des');
            if(total_des > total_nec){
                swal({  title : "¿Realmente tus deseos son más importantes que tus necesidades?",
                        type: "warning"            
                    });
               }
            $('#tot_nec').html('<h1>'+total_nec+'</h1>');
            $('#tot_des').html('<h1>'+total_des+'</h1>');
        });

	});
});
