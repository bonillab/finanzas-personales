define(function (require) {
    return [
        {'tpl' : '<div class="inter_size" id="int_1"><button class="button" id="btn_inicio" type="button"></button></div>'},
        {'tpl' : '<div class="inter_size" id="int_2"><button class="button" id="btn_historia"></button><button class="button" id="btn_jugar"></button></div>'},
        {'tpl' : '<div class="inter_size" id="int_nyd"><div class="table"><table id="tb1"><tr class="tr_indice"><th><h1>Necesidad</h1></th><th><h1>Costo</h1></th><th><h1>Deseo</h1></th><th><h1>Costo</h1></th></tr></table></div><button class="btn_acep" id="btn_calc_nyd">Aceptar</button></div>'},
        {'tpl' : '<tr><td><input type="text"></td><td><input id="nec{{text}}" type="text"></td><td><input type="text"></td><td><input id="des{{text}}" type="text"></td></tr>'},
        {'tpl' : '<tr><td><h1>Total</h1></td><td><div id="tot_nec"></div></td><td><h1>Total</h1></td><td><div id="tot_des"></div></td></tr>'}
    ];
});
