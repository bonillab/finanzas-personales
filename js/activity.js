define(function (require) {
        var activity = require("sugar-web/activity/activity");
        var datastore = require("sugar-web/datastore");
        var jquery = require("jquery");
        var sweetalert = require("sweetalert");
        var Mustache = require("mustache");
        var tpl = require("../js/tpl.js");
        var pos = 0;
    
    function nulo(num){
        if(isNaN(num) || num === undefined) return 0;
        else return num;
    }
    
    function animateArrow(){
        for(var x=0; x<=100; x++){
            $(".flecha").animate({top: "+=50"}, 1000);
            $(".flecha").animate({top: "-=50"}, 1000);
           }
    }
    function suma(valor){
        var list = new Array();
        var suma = 0;   
        var data = $('.inp_nyd').attr('placeholder');
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
        if(total == Infinity || isNaN(total)) total = "Datos no validos";
        else total = 'Puedes comprar lo que necesitas en: '+total+' semanas'; 
        return total;
    }
    
    function random(array) {
        // La funcion retorna un numero al azar
        return Math.floor(Math.random() * array.length);
	}
    
// Manipulate the DOM only when it is ready.
	require(['domReady!'], function (doc) {
        var out = "";
        var ran = NaN;
       
        function mustache(ind,temp){
            out = Mustache.render(tpl[ind].template[temp].tpl);
            $('#canvas').html(out);
        }

		// Initialize the activity.
		activity.setup();
        $('.reload-button').on('click', function() {
            location.reload();
        });
        
        function historia(){
            if(pos==4) tru_img();
            
            else if(pos == 6) {mustache(1,1); animateArrow();}
            else if(pos == 13) cred_deb()
            else if(pos<0 || pos == 16){
                mustache(0,1);
                pos = 0;
                animateArrow();
            }
            else{
                output = Mustache.render(tpl[1].template[0].tpl, {bg : tpl[1].img[pos]});
                $('#canvas').html(output);
            }
        }
        
       function table(coin){
            mustache(2,1);
            for(var i=0; i<10; i++){
                output = Mustache.render(tpl[2].template[2].tpl,{text : (i+1), coin : coin});
                $('#tb1').append(output);
            }
            output = Mustache.render(tpl[2].template[3].tpl);
            $('#tb1').append(output);        
        }
        
        function tru_img(){
            ran = random(tpl[3].tru_cont);
            output = Mustache.render(tpl[1].template[2].tpl, {text : tpl[3].tru_cont[ran].title});
            $('#canvas').html(output);
            
            var img = [tpl[3].tru_cont[ran].img1, tpl[3].tru_cont[ran].img2];
            
            for(var i=0; i<2; i++){
                $('#tru'+(i+1)).css({"background" : "url("+img[i]+") 0 0 no-repeat"});
            }
        }
        function cred_deb(){
            output = Mustache.render(tpl[1].template[3].tpl, {text : tpl[1].template[3].title});
            $('#canvas').html(output);
        }

        $(document).ready(function(){
            mustache(0,0);
            animateArrow();
        });


        $('#canvas').on('click','#btn_inicio',function(){
            mustache(0,1);
            animateArrow();
            });
        
        $('#canvas').on('click','#btn_historia',function(){
            historia();    
        });
        
        
        $('#canvas').on('click','#btn_jugar',function(){
            mustache(0,2);   
            animateArrow();
        });
        
        $('#canvas').on('click','#btn_nd',function(){
            mustache(2,0);
        });
        
        $('#canvas').on('click','.coin',function(){
            var btn = $(this).attr('data');
            table(btn);
        });
        
        $('#canvas').on('click','#btn_ahorro',function(){
            mustache(2,4);
        });
        
        $('#canvas').on('click','.btn_atras',function(){
            mustache(0,2);
            animateArrow();
        });
        
        $('#canvas').on('click','.btn_sig_h',function(){
            pos += 1;
            historia();
            });
        
        $('#canvas').on('click','.btn_atras_h',function(){
            pos-= 1;
            historia();
            animateArrow();
        });
        
        $('#canvas').on('click','#btn_menu_atras',function(){
            mustache(0,1);
            animateArrow();
        });
       
        $('#canvas').on('click','#btn_cred', function(){
            output = Mustache.render(tpl[1].template[3].tpl, {text : tpl[1].template[3].cred});
            $('#canvas').html(output);
        });
        
        
        $('#canvas').on('click','#btn_deb', function(){
            output = Mustache.render(tpl[1].template[3].tpl, {text : tpl[1].template[3].deb});
            $('#canvas').html(output);
        });
        
        $('#canvas').on('click','#btn_tru',function(){
            var txt = $('#tru_inp').val();
            var img = tpl[3].tru_cont[ran].cont
            if(txt == ""){
                swal({  title : "Campos vacios",         
                        type: "error" 
                 });
            }
            else{
                swal({  title : img,         
                        type: "success" 
                 });
            }
        });
        
        $('#canvas').on('click','.btn_hc',function(){
            $('.flecha').css("visibility","hidden");
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
                document.getElementById('player').play();
                swal({  title : "¿Realmente tus deseos son más importantes que tus necesidades?",         
                        type: "warning"  
                    });
               }
            else if(typeof(nec) === "string" || typeof(des) === "string"){
                swal({  title : "Datos no validos",         
                        type: "success"  
                    });
            }
            else{
                swal({  title : "¡MUY BIEN!",
                        text : 'Estas priorizando lo que realmente necesitas.',
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
