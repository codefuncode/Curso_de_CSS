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
    control_en_curso,
    head = document.head,
    _display = document.querySelector(".display");

console.log(_display);

// console.log(head);
// ======================================================

// ===============================================

for (var i = 0; i < input_radio.length; i++) {

    input_radio[i].
    addEventListener('input', function(argument) {

        console.log(this.value);

    });
}

// ===========================================================
//  Aplica como valor el valor dentro de la etiqueta option correspondiente 
for (var i = 0; i < select.length; i++) {

    select[i].value = "";

    for (var j = 0; j < select[i].children.length; j++) {

        // console.log(select[i].children[j]);

        select[i].children[j].value = select[i].children[j].textContent.trim();

        // console.log(select[i].children[j].textContent.trim());
    }

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

}

var
    opciones_todas =
    option_font_face.concat(
        option_css_fonts_guide,
        option_css_fonts
    );

console.log('===========   Todas las opciones   ===============');
for (var i = 0; i < opciones_todas.length; i++) {

    console.log(opciones_todas[i]);

}

console.log('===========   Todas las opciones   ===============');
console.log(controles.length + " " + "controles");
console.log(opciones_todas.length + " " + "opciones ");

// ===================================================
//  Mostrar caja de controles corespondiente 
for (var i = 0; i < select.length; i++) {

    select[i].addEventListener('input', selecciona_caja_control);

}

function selecciona_caja_control(argument) {
    // console.log('=============');
    console.log(this);
    console.log(this.value);

    for (var i = 0; i < select.length; i++) {

        if ((this == select[0] || this == select[1] || this == select[2])) {

            if (this != select[i]) {

                select[i].value = "";

            }
        }

    }

    if ((this == select[0] || this == select[1] || this == select[2])) {

        for (var i = 0; i < controles.length; i++) {

            if (i == opciones_todas.indexOf(this.value)) {

                controles[i].style.display = "block";

                control_en_curso = controles[i];
                muestra_control_en_curso();

                gestiona_controles(i, control_en_curso);

            } else {

                controles[i].style.display = "none";
            }
        }

    }

    // var x = _display.childNodes;
    // console.log(x.length);
    // if (x.length >= 0) {

    //     for (var i = 0; i < x.length + 1; i++) {

    //         x[i].remove();

    //     }
    // }
    // console.log(x.length);
    // =======================================================

    // =======================================================
}

function muestra_control_en_curso(argument) {

    // console.log("Control en curso = ");
    // console.log(control_en_curso);
    // var matrizx = [];
    // var x = control_en_curso.childNodes;

    // for (var i = 0; i < x.length; i++) {

    //     if (x[i].nodeName == "SELECT") {

    //         matrizx.push(x[i]);

    //     } else {

    //         // console.log(x[i]);
    //     }

    // }

    // console.log(matrizx);
}

function gestiona_controles(indice, control) {

    var controles_select = [];

    var todos_los_controles = []

    var mensaje = "";

    control = control.childNodes;

    for (var i = 0; i < control.length; i++) {

        if (control[i].nodeName == "SELECT") {

            controles_select.push(control[i]);

        } else if (control[i].type == "checkbox") {
            console.log("checkbox");
            console.log(control[i]);
            console.log("========");
        } else if (control[i].type == "text") {
            console.log("text");
            console.log(control[i]);
            console.log("========");
        }

        todos_los_controles.push(control[i]);
    }

    console.log(todos_los_controles);
    mensaje = "Estas trabajando con el indice " + indice;
    if (indice == 0) {

        trabaja_fontface(controles_select);

    } else if (indice == 1) {
        // trabaja_font_face_font_display(controles_select);

    } else if (indice == 2) {

    } else if (indice == 3) {

    } else if (indice == 4) {

    } else if (indice == 5) {

    } else if (indice == 6) {

    } else if (indice == 7) {

    } else if (indice == 8) {

    } else if (indice == 9) {

    } else if (indice == 10) {

    } else if (indice == 11) {

    } else if (indice == 12) {

    } else if (indice == 13) {

    } else if (indice == 14) {

    } else if (indice == 15) {

    } else if (indice == 16) {

    } else if (indice == 17) {

    } else if (indice == 18) {

    } else if (indice == 19) {

    } else if (indice == 20) {

    } else if (indice == 21) {

    } else if (indice == 22) {

    } else if (indice == 23) {

    } else if (indice == 24) {

    } else if (indice == 25) {

    } else if (indice == 26) {

    } else if (indice == 27) {

    } else if (indice == 28) {

    } else if (indice == 29) {

    } else if (indice == 30) {

    }

    console.log(mensaje);

}

function trabaja_fontface(argument) {

    while (_display.firstChild) {
        _display.removeChild(_display.lastChild);

    }
    var elementos = [];
    for (var i = 0; i <= 9; i++) {
        elementos.push(crea_elemento("p"));
    }

    for (var i = 0; i < elementos.length; i++) {

        if (i == 0) {
            elementos[i].innerHTML = "@font-face {";

        } else if (i == elementos.length - 1) {

            elementos[i].innerHTML = "}";

        } else {
            elementos[i].style.marginLeft = "75px";
            elementos[i].innerHTML = "linea #" + i;
        }

        _display.appendChild(elementos[i]);
    }

}

function crea_elemento(argument) {

    return document.createElement(argument);
}
// ===================================================