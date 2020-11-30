// ======================================================
//  Variables 
var
    select =
    document.querySelectorAll('select'),

    controles =
    document.querySelectorAll('.controles>div'),

    input_radio =
    document.querySelectorAll('[type="radio"]'),

    display =
    document.querySelectorAll('.display'),
    option_font_face = [],
    option_css_fonts_guide = [],
    option_css_fonts = [],
    control_en_curso,
    head = document.head;

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

            } else {

                controles[i].style.display = "none";
            }
        }

    }

    // =======================================================
    console.log("Control en curso = ");
    console.log(control_en_curso);
    var matrizx = [];
    var x = control_en_curso.childNodes;

    for (var i = 0; i < x.length; i++) {

        if (x[i].nodeName == "SELECT") {

            matrizx.push(x[i]);

        } else {

            // console.log(x[i]);
        }

    }

    console.log(matrizx);

    // =======================================================
}
// ===================================================