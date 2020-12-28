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
    _pantalla = document.querySelector(".display .reglas"),
    enlace = document.querySelectorAll("a"),
    panel = document.querySelector(".display .w3-panel");

panel.style.display = "none";

for (var i = 0; i < enlace.length; i++) {

    enlace[i].setAttribute("target", "_blank");

}

for (var i = 0; i < controles.length; i++) {
    controles[i].style.display = "none";
}

// console.log(_pantalla);

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
function muestra_valor_rdio_input(argument) {

    for (var i = 0; i < input_radio.length; i++) {

        input_radio[i].
        addEventListener('input', function(argument) {

            // console.log(this.value);

        });
    }
}

function aplicaValoresaOptions(argument) {

    for (var i = 0; i < select.length; i++) {

        select[i].value = "";

        // ===============================
        // Aplica el valor  de texto del nodo de la
        // etiqueta como atributo de valor a la misma etiqueta 
        for (var j = 0; j < select[i].children.length; j++) {

            select[i].children[j].value =
                select[i].children[j].textContent.trim();

        }
        // ===============================
        // =================
        //  Introduce en matrices los valores  de solo los tres primeros select 
        if (i == 0) {

            for (let i = 0; i < select[0].children.length; i++) {

                if (i != 0) {

                    option_font_face.push(
                        select[0].children[i].textContent.trim());

                }

            }

        } else if (i == 1) {

            for (let i = 0; i < select[1].children.length; i++) {

                if (i != 0) {

                    option_css_fonts_guide.push(
                        select[1].children[i].textContent.trim());
                }

            }

        } else if (i == 2) {

            for (let i = 0; i < select[2].children.length; i++) {

                if (i != 0) {

                    option_css_fonts.push(
                        select[2].children[i].textContent.trim());
                }

            }

        }
        // =================
    }
}

function selecciona_caja_control(argument) {

    // ====================================================================
    //  hace que los demás controles se coloquen 
    // en la opción en blanco cuando uno de ellos cambia de valor
    for (var i = 0; i < select.length; i++) {

        if ((this == select[0] || this == select[1] || this == select[2])) {

            if (this != select[i]) {

                select[i].value = "";

            }
        }

    }
    // ====================================================================

    // =================================================================
    //  Muestra la caja correspondiente  de acuerdo a la opción seleccionada 
    if ((this == select[0] || this == select[1] || this == select[2])) {

        for (var i = 0; i < controles.length; i++) {

            if (i == opciones_todas.indexOf(this.value)) {

                controles[i].style.display = "block";

                caja_control_en_curso = controles[i];
                // seleccionaControles(i, caja_control_en_curso);
                gestiona_controles(i, caja_control_en_curso);

            } else {

                controles[i].style.display = "none";
            }
        }

    }
    // =================================================================

    // =======================================================
}

function crea_elemento(argument) {

    return document.createElement(argument);
}

function gestiona_controles(indice, control) {

    var todos_los_controles = [],
        t_input_select = [],
        t_input_checkbox = [],
        t_input_text = [],
        t_input_radio = [],
        t_label = [];

    var mensaje = "";

    control = control.childNodes;

    // =======================================
    //  BUcle que pretende seleccionar y dividios 
    //  los controles por  tipo de etiqueta  y agregarlos a una matriz
    //  para luego pasarla parámetro para ser usados en el programa 
    for (var i = 0; i < control.length; i++) {

        if (control[i].nodeName == "SELECT") {

            t_input_select.push(control[i]);

        } else if (control[i].type == "checkbox") {

            t_input_checkbox.push(control[i]);

        } else if (control[i].type == "text") {

            t_input_text.push(control[i]);

        } else if (control[i].type == "radio") {

            t_input_radio.push(control[i]);
        } else if (control[i].nodeName == "LABEL") {

            t_label.push(control[i]);
        }
        // =============================================
        //  Posibilidad de pasar todos los controles 
        //  Le falta separar los nodos de texto para limpiar
        //  de nodos no deseados 
        todos_los_controles.push(control[i]);
        // =============================================
    }

    mensaje = "Estas trabajando con el indice " + (indice + 1);

    console.log(mensaje);

    aplicafuncion(
        indice,
        t_input_select,
        t_input_checkbox,
        t_input_text,
        t_input_radio,
        t_label
    );
    // =======================================

}

function aplicafuncion(index, select, checkbox, text, radio, label) {

    funcion_Control[index](index, select, checkbox, text, radio, label);

    // ==================================
    //  Solo para pruebas 
    for (var i = 0; i < select.length; i++) {

        select[i].addEventListener("input", function(argument) {

            if (this.value == "" || this == select[6]) {

            } else {

                console.log(this.value);
            }

        });

    }
    // ==================================

}

// ================================================================
// Borara todos los nodos existentes dentyro de la pantalla
function borra_nodos(argument) {

    while (_pantalla.firstChild) {

        _pantalla.removeChild(_pantalla.lastChild);

    }
}

// ================================================================