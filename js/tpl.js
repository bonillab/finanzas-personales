define(function (require) {
    return [
        {
          'contenido' : [
              {'title':'Neolítico 9,000 a.C - 4,000 a.C','hc' : 'El trueque permite a las antiguas civilizaciones empezar a comerciar a través del intercambio de unas mercancías por otras de igual valor.', 'img' : '../img/hc/trueque.png'},
              {'title': 'Edad Antigua 3,000 a.C finales siglo V d.C', 'hc' : 'Mercancías, objetos o metales preciosos (ladrillos, arcos, placas, navajas, dientes de ballena, oro, cacao, conchas)', 'img' : '../img/hc/diamante.png'},
              {'title': 'Edad Media Siglo V d.C - XV d.C','hc' : 'Surge la banca como establecimiento monetario que presta una serie de servicios.', 'img' : '../img/hc/banco.png'},
              {'title': 'La era de los descubrimientos Siglo XV d.C','hc' : 'Búsqueda de nuevas rutas comerciales, lo que propició el flujo de oro, crecimiento de la banca y surgimiento de grandes bancos.', 'img' : '../img/hc/barco.png'},
              {'title': 'Comercio Transatlántico Siglo XVII','hc': 'Las travesías mejoran con el paso del barco de vela al barco de vapor, mucho más rápido y seguro.', 'img': '../img/hc/trasatlantico.png'},
              {'title': 'Innovaciones en el transporte Siglo XIX','hc': 'Las innovaciones en el transporte revitalizan notablemente el comercio, ya que con la mejora del transporte de mercancías, éstas pueden ser manufacturadas en cualquier lugar y ser transportadas de forma barata a todos los puntos de consumo.','img': '../img/hc/tren.png'},
              {'title': 'Globalización Siglo XX - XXI','hc': 'Creación de zonas de libre comercio a nivel internacional.','img': '../img/hc/planeta-hover.png'},
              {'title': 'Era Tecnológica/ e-commerce Siglo XXI','hc': 'Tendencia a la compra-venta de productos y servicios a través d e medios electrónicos e informáticos.','img': '../img/hc/shop.png'}
          ]  
        },
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