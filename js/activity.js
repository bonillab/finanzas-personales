define(function (require) {
        var activity = require("sugar-web/activity/activity");
        var datastore = require("sugar-web/datastore");
        var jquery = require("jquery");
        var sweetalert = require("sweetalert");
        var Mustache = require("mustache");
        var tpl = require("../js/tpl.js");
    
        var pos = NaN;
    
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
    
    function divicion(){
        var val1 = nulo(parseFloat($('#inp_val').val()));
        var val2 = nulo(parseFloat($('#inp_sem').val()));
        var total = Math.round(val1 / val2);
        if(total == Infinity || isNaN(total)) total = "No se puede dividir entre 0";
        else total = 'Puedes comprar lo que necesitas en: '+total+' semanas'; 
        console.log(val1,val2);
        return total;
    }
    
// Manipulate the DOM only when it is ready.
	require(['domReady!'], function (doc) {
        var out = "";
        
        function mustache(ind,isgame,temp){
            if(isgame){
                out = Mustache.render(tpl[ind].activities[temp].tpl);
	            $('#canvas').html(out);
            }
            else{
                out = Mustache.render(tpl[ind].tpl);
	            $('#canvas').html(out);
            }
        }

		// Initialize the activity.
		activity.setup();
        $('.reload-button').on('click', function() {
            location.reload();
        });
        function table(){
            mustache(0,true,0);
            for(var i=0; i<10; i++){
                output = Mustache.render(tpl[0].activities[1].tpl,{text : (i+1)});
                $('#tb1').append(output);
            }
            output = Mustache.render(tpl[0].activities[2].tpl);
            $('#tb1').append(output);
        }
        
        $(document).ready(function(){
            /*mustache(1);*/
        });

        $('#canvas').on('click','#btn_inicio',function(){
            pos = 0;
            mustache(2);
            });
        
        $('#canvas').on('click','#btn_jugar',function(){
            pos = 1;
            mustache(3);    
        });
        
        $('#canvas').on('click','#btn_nd',function(){
            pos = 2;
            table();
        });
        
        $('#canvas').on('click','#btn_ahorro',function(){
            pos = 2;            
            mustache(0,true,3);
        })
        
        $('#canvas').on('click','.btn_atras',function(){
            mustache(pos);
        })
        
        /*Pintar en juego 1*/
        $('#canvas').on('click','#btn_calc_nyd',function(){
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
        
        /*Pintar juego 2*/
        $('#canvas').on('click','#btn_calc_ahorro',function(){
            $('#tot_ahorro').html(divicion());
        });

	});
});
