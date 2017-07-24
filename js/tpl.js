define(function (require) {
    return [
        {
            'activities' : [
                {'tpl' : '<div class="inter_size" id="int_nyd"><div class="table"><table id="tb1"><tr class="tr_indice"><th><h1>Necesidad</h1></th><th><h1>Costo</h1></th><th><h1>Deseo</h1></th><th><h1>Costo</h1></th></tr></table></div><button class="btn_acep boton" id="btn_calc_nyd">Aceptar</button><button class="boton btn_atras">Atras</button></div>'},
        
                {'tpl' : '<tr><td><input type="text"></td><td><input id="nec{{text}}" type="text"></td><td><input type="text"></td><td><input id="des{{text}}" type="text"></td></tr>'},
        
                {'tpl' : '<tr><td><h1>Total</h1></td><td><div id="tot_nec"></div></td><td><h1>Total</h1></td><td><div id="tot_des"></div></td></tr>'},
        
                {'tpl' : '<div class="inter_size" id="int_ahorro"><div class="table"><h1>Agenda de Ahorro</h1><table id="bl2"><tr><th><h1>Que quieres comprar</h1></th><th><input type="text" id="inp_obj"></th></tr><tr><th><h1>Cuanto Cuesta</h1></th><th><input type="text" id="inp_val"></th></tr><tr><th><h1>Cuanto puedes ahorrar cada semana</h1></th><th><input type="text" id="inp_sem"></th></tr></table><h1 id="tot_ahorro"></h1><button class="btn_acep boton" id="btn_calc_ahorro">Calcular</button><button class="boton btn_atras">Atras</button></div></div>'}
              
          ]
                    
          
        },
        {'tpl' : '<div class="inter_size" id="int_1"><button class="button" id="btn_inicio" type="button"></button></div>'},
        
        {'tpl' : '<div class="inter_size" id="int_2" data="2"><button class="button" id="btn_historia"></button><button class="button" id="btn_jugar"></button></div>'},
        
        {'tpl' : '<div class="inter_size" id="fondo"><button class="boton" id="btn_nd">Necesidad o Deseo</button><button class="boton" id="btn_ahorro">El ahorro</button><button class="boton btn_atras">Atras</button></div>'}
        
    ];
});