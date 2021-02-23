// ======================================================
//  Variables 
var
    select =
    document.querySelectorAll('select'),

    controles =
    document.querySelectorAll('.controles>div'),

    input_radio =
    document.querySelectorAll('[type="radio"]'),

    option_font_face = [],
    option_css_fonts_guide = [],
    option_css_fonts = [],
    controles_activos = [],
    caja_control_en_curso,
    head = document.head,
    pantalla = document.querySelector(".display .reglas"),
    enlace = document.querySelectorAll("a"),
    panel = document.querySelector(".display .w3-panel");

panel.style.display = "none";

for (var i = 0; i < enlace.length; i++) {

    enlace[i].setAttribute("target", "_blank");

}

for (var i = 0; i < controles.length; i++) {
    controles[i].style.display = "none";
}

// console.log(pantalla);

// console.log(head);
// ======================================================

// ===============================================
//  Mirar el valor de los input
muestra_valor_rdio_input();

// ===========================================================
//  Aplica como valor el valor dentro de la etiqueta option correspondiente 
aplicaValoresaOptions();

//  Concadenamos todas las opciones en una sola matriz
var
    opciones_todas =
    option_font_face.concat(
        option_css_fonts_guide,
        option_css_fonts
    );

// ===================================================
//  Mostrar caja de controles corespondiente 

for (var i = 0; i < select.length; i++) {

    select[i].addEventListener('input', selecciona_caja_control);

}

// ============

// function crea_elemento(argument) {

//     return document.createElement(argument);
// }