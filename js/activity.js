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
        var data = $('.inp_nyd').attr('value');
        for(var i=0;i<10;i++){
            var val_str = $('#'+valor+(i+1)).val();
            var val = nulo(parseFloat(val_str.replace(/[C $]+/g,"")));
            list.push(val);
            suma += list[i];
        }
        return {suma : suma, data : data};
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
        
        function mustache(ind,temp){
            out = Mustache.render(tpl[ind].template[temp].tpl);
            $('#canvas').html(out);
            
        
        }

		// Initialize the activity.
		activity.setup();
        $('.reload-button').on('click', function() {
            location.reload();
        });
       
        function table(coin){
            mustache(2,1);
            for(var i=0; i<10; i++){
                output = Mustache.render(tpl[2].template[2].tpl,{text : (i+1), coin : coin});
                $('#tb1').append(output);
            }
            output = Mustache.render(tpl[2].template[3].tpl);
            $('#tb1').append(output);        
        }

        
        $(document).ready(function(){
            /*mustache(0,0);*/
            mustache(2,0);
        });

        $('#canvas').on('click','#btn_inicio',function(){
            pos = 0;
            mustache(0,1);
            });
        
        $('#canvas').on('click','#btn_jugar',function(){
            pos = 1;
            mustache(0,2);    
        });
        
        $('#canvas').on('click','#btn_nd',function(){
            pos = 2;
            table();
        });
        
        $('#canvas').on('click','.coin',function(){
            var btn = $(this).attr('data');
            table(btn);
        });
        
        $('#canvas').on('click','#btn_ahorro',function(){
            pos = 2;            
            mustache(2,3);
        })
        
        $('#canvas').on('click','.btn_atras',function(){
            mustache(pos);
        })
        
        $('#canvas').on('click','.btn_hc',function(){
            var btn = $(this).attr('data');
            var title = tpl[3].content[btn].title;
            var txt = tpl[3].content[btn].hc;
            var img = tpl[3].content[btn].img;
            swal({  title: title,
                    text: txt,
                    imageUrl: img,
                    imageWidth: 400,
                    imageHeight: 335
                    });
        });
        
        /*Pintar en juego 1*/
        $('#canvas').on('click','#btn_calc_nyd',function(){
            var nec = suma('nec');
            var des = suma('des');
            if(nec.suma < des.suma){
                swal({  title : "¿Realmente tus deseos son más importantes que tus necesidades?",         
                        type: "warning"  
                    });
               }
            else{
                swal({  title : "Felicidades, buen trabajo",         
                        type: "success"  
                    });
            }
            $('#tot_nec').html('<h1>'+nec.data+nec.suma+'</h1>');
            $('#tot_des').html('<h1>'+des.data+des.suma+'</h1>');
        });
        
        /*Pintar juego 2*/
        $('#canvas').on('click','#btn_calc_ahorro',function(){
            $('#tot_ahorro').html(divicion());
        });

	});
});
