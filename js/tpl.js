define(function (require) {
    return [
        {
            /*Menu*/
            'template':[
                {'tpl' : '<div class="inter_size" id="int_1"><div class="flecha" style="top: 400px; left: 565px;"></div><button class="button" id="btn_inicio" type="button"></button></div>'},
        
                {'tpl' : '<div class="inter_size" id="int_2" data="2"><div class="flecha" style="top: 250px; left: 250px;"></div><button class="button" id="btn_historia"></button><div class="flecha" style="top: 250px; left: 890px;"></div><button class="button" id="btn_jugar"></button></div>'},
        
                {'tpl' : '<div class="inter_size" id="fondo"><div class="flecha" style="top: 130px; left: 310px;"></div><div class="flecha" style="top: 130px; left: 860px;"></div><h1 style = "position: absolute; top: 300px; left: 235px;">Necesidad o Deseo</h1><h1 style = "position: absolute; top: 300px; left: 840px;">El ahorro</h1><button class="boton" id="btn_nd"></button><button class="boton" id="btn_ahorro"></button><button class="boton btn_atras" id="btn_menu_atras"></button></div>'}
                    
            ]
        },
        {
            /*Historia*/
            'template': [
                {'tpl' : '<div class="inter_size" data="{{data}}"id="int_his" style="background : url({{bg}})"><button class="boton btn_atras_h"></button><button class="boton btn_sig_h"></button></div>'},
                
                {'tpl': '<div class="inter_size" id="int_hc"><button class="btn_hc" id="btn_trueque" data="0"></button><button class="btn_hc" id="btn_diamante" data="1"></button><button class="btn_hc" id="btn_banco" data="2"></button><button class="btn_hc" id="btn_barco" data="3"></button><button class="btn_hc" id="btn_trasatlantico" data="4"></button><button class="btn_hc" id="btn_tren" data="5"></button><button class="btn_hc" id="btn_planeta" data="5"></button><button class="btn_hc" id="btn_shop" data="6"></button><button class="boton btn_atras_h"></button><button class="boton btn_sig_h"></button></div>'},
                
                {'tpl': '<div class="inter_size" id="fondo"><div id="tru_cont"><h1 style="font-size : 50px">{{text}}</h1></div><div class="tru" id="tru1" style="left : 150px"></div><div class="tru" style="left : 500px"><picture><img src="../img/cambio.png"></picture></div><div><input type="number" id="tru_inp"><div><button class="boton" id="btn_tru">Aceptar</button><div class="tru" id="tru2" style="left : 750px"></div><button class="boton btn_atras_h"></button><button class="boton btn_sig_h"></button></div>'},
                
                {'tpl' : '<div class="inter_size" id="int_debcred"><h2 id="cyd_cont">{{text}}</h2><button class="boton" id="btn_cred">Crédito</button><button class="boton" id="btn_deb">Débito</button><button class="boton btn_atras_h"></button><button class="boton btn_sig_h"></button></div>', 'title' : "Tarjetas de Débito y Crédito", 'deb' : "Tarjeta de débito: vinculada directamente a la cuenta (ahorro o comprobación). Cuando se utiliza el dinero se toma directamente de la cuenta.", 'cred' : "Tarjeta de crédito: es un medio de pago que le permite hacer compras que puede pagar posteriormente (una semana después, un mes después, un año después, etc). Son llamadas “de crédito” porque cuando paga cualquier mercancía con ella, el banco que se la otorgó te está concediendo un préstamo que debe pagar de acuerdo al período que elija según los plazos negociados con la entidad."}
            ],
            
            'img' : [
                "../img/historia/El_dinero.png", "../img/historia/intercambio.png", "../img/historia/historia_del_dinero.png", "../img/historia/el_trueque.png","", "../img/historia/primeros_medios_de_intercambio.png","","../img/historia/el_dinero_de_hoy.png","../img/historia/funciones.png","../img/historia/Monedas_del_mundo.png", "../img/historia/nyd.png", "../img/historia/gastar_ahorrar.png", "../img/historia/sistema_sancario.png","","../img/historia/cuentas_bancarias.png","../img/historia/bancos_economia.png"
            ]
            
        },
        
        {
            /*Actividades*/
            'template' : [
                {'tpl': '<div class="inter_size" id="menu_coin"><h1 style="position : absolute; top : 250px; left: 260px;">Córdoba</h1><button class="boton coin" id="btn_cordoba" data="C$ "></button><h1 style="position : absolute; top : 250px; left: 870px;">Dolar</h1><button class="boton coin" id="btn_dolar" data="$ "></button><button class="boton btn_atras"></button></div>'},
                
                {'tpl' : '<div class="inter_size" id="int_nyd"><h1 class="tuto">Con ayuda de tus padres utiliza recibos de compra y clasificalos en la columna segun corresponda. Al final agrega los precios para obtener un total de gastos.</h1><div class="table"><table id="tb1"><tr class="tr_indice"><th><h1>Necesidad</h1></th><th><h1>Costo</h1></th><th><h1>Deseo</h1></th><th><h1>Costo</h1></th></tr></table></div><button class="btn_acep boton" id="btn_calc_nyd">Aceptar</button><button class="boton btn_atras"></button><audio id="player" src="../sound/error.ogg"></audio></div>'},
        
                {'tpl' : '<tr><td><input type="text"></td><td><input class="inp_nyd" placeholder="{{coin}}" id="nec{{text}}" type="text"></td><td><input type="text"></td><td><input class="inp_nyd" placeholder="{{coin}}" id="des{{text}}" type="text"></td></tr>'},
        
                {'tpl' : '<tr><td><h1>Total</h1></td><td><div id="tot_nec"></div></td><td><h1>Total</h1></td><td><div id="tot_des"></div></td></tr>'},
        
                {'tpl' : '<div class="inter_size" id="int_ahorro"><h1 class="tuto">¡Ahora aprenderemos a AHORRAR! En la tabla ubica el costo de lo que deseas comprar y sabrás cuanto debes ahorrar para obtenerlo.</h1><div class="table"><h1>Agenda de Ahorro</h1><table id="bl2"><tr><th><h1>Que quieres comprar</h1></th><th><input type="text" id="inp_obj"></th></tr><tr><th><h1>Cuanto Cuesta</h1></th><th><input type="text" id="inp_val"></th></tr><tr><th><h1>Cuanto puedes ahorrar cada semana</h1></th><th><input type="text" id="inp_sem"></th></tr></table><h1 id="tot_ahorro"></h1></div><button class="btn_acep boton" id="btn_calc_ahorro">Calcular</button><button class="boton btn_atras"></button></div>'}
              
          ]
        },
        {
          'content' : [
              {'title':'Neolítico 9,000 a.C - 4,000 a.C','hc' : 'El trueque permite a las antiguas civilizaciones empezar a comerciar a través del intercambio de unas mercancías por otras de igual valor.', 'img' : '../img/hc/trueque.png'},
              {'title': 'Edad Antigua 3,000 a.C finales siglo V d.C', 'hc' : 'Mercancías, objetos o metales preciosos (ladrillos, arcos, placas, navajas, dientes de ballena, oro, cacao, conchas)', 'img' : '../img/hc/diamante.png'},
              {'title': 'Edad Media Siglo V d.C - XV d.C','hc' : 'Surge la banca como establecimiento monetario que presta una serie de servicios.', 'img' : '../img/hc/banco.png'},
              {'title': 'La era de los descubrimientos Siglo XV d.C','hc' : 'Búsqueda de nuevas rutas comerciales, lo que propició el flujo de oro, crecimiento de la banca y surgimiento de grandes bancos.', 'img' : '../img/hc/barco.png'},
              {'title': 'Comercio Transatlántico Siglo XVII','hc': 'Las travesías mejoran con el paso del barco de vela al barco de vapor, mucho más rápido y seguro.', 'img': '../img/hc/trasatlantico.png'},
              {'title': 'Innovaciones en el transporte Siglo XIX','hc': 'Las innovaciones en el transporte revitalizan notablemente el comercio, ya que con la mejora del transporte de mercancías, éstas pueden ser manufacturadas en cualquier lugar y ser transportadas de forma barata a todos los puntos de consumo.','img': '../img/hc/tren.png'},
              {'title': 'Globalización Siglo XX - XXI','hc': 'Creación de zonas de libre comercio a nivel internacional.','img': '../img/hc/planeta-hover.png'},
              {'title': 'Era Tecnológica/ e-commerce Siglo XXI','hc': 'Tendencia a la compra-venta de productos y servicios a través d e medios electrónicos e informáticos.','img': '../img/hc/shop.png'},
              ],
            
            /*Contenido del trueque*/
            'tru_cont' : [
                {'title' : '¿Cuántos pollos vale una vaca?', 'cont' : 'Esa es una buena suposición. Pero, ¿qué pasa si la vaca es vieja o insalubre? Esto podría cambiar el número de pollos que vale la vaca. Esta es la razón por la que el trueque terminó.', 'img1' : '../img/pollo.png', 'img2' : '../img/vaca.png'},
                
                {'title' : '¿Cuántas mochilas vale una computadora?', 'cont' : 'Esa es una buena suposición. Pero, ¿qué paso si la computadora es vieja, no tiene cargador, el audio no funciona muy bien? Esto podría cambiar el número de mochilas que vale la computadora.', 'img1' : '../img/mochila.png', 'img2' : '../img/compu.png'},
                
                {'title' : '¿Cuántos zapatos vale una chaqueta?', 'cont' : 'Muy buena suposición. ¿Pero qué si los zapatos son el tamaño incorrecto, o dañado? Esto podría cambiar cuántos zapatos de la chaqueta vale la pena.', 'img1' : '../img/zapato.png', 'img2' : '../img/chaqueta.png'},
                
                {'title' : '¿Cuántos plátanos vale un melón?', 'cont' : '¡Buen intento! ¿Y si te dijera que los plátanos no están maduros y son pequeños, esto cambiaría cuántos plátanos vale el melón?', 'img1' : '../img/banano.png', 'img2' : '../img/melon.png'},
                
                {'title' : '¿Cuántas sillas vale una cama?', 'cont' : '¡Muy Bien! Pero, más sillas podrían ser necesaria para un comedor grande, o si las sillas no están en buenas condiciones.', 'img1' : '../img/silla.png', 'img2' : '../img/cama.png'},
                
            ]
            
        },
        
            
        
    ];
});