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
    option_css_fonts = [];
// ======================================================

// ===============================================

for (var i = 0; i < input_radio.length; i++) {

    input_radio[i].
    addEventListener('input', function(argument) {

        console.log(this.value);

    });
}

for (var i = 0; i < select.length; i++) {

    if (i < 3) {
        console.log(select[i]);

    }

}

// ===============================================

// =========================================================
//  test conteo de elementos 
// console.log('===========select=============');
// console.log(select.length);
// console.log('===========controles=============');
// console.log(controles.length);
// console.log('===========type="radio"=============');
// console.log(input_radio.length);
// console.log('========================');
// =========================================================

// ===========================================================
//  Aplica como valor eel valor dentro de la etiqueta option correspondiente 
for (var i = 0; i < select.length; i++) {

    select[i].value = "";
    // console.log(i);

    for (var j = 0; j < select[i].children.length; j++) {

        // console.log('============================');

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
// console.log('===================');
// for (var i = 0; i < option_font_face.length; i++) {
//     console.log(option_font_face[i]);
// }
// console.log('===================');

// for (var i = 0; i < option_css_fonts_guide.length; i++) {
//     console.log(option_css_fonts_guide[i]);
// }
// console.log('===================');

// for (var i = 0; i < option_css_fonts.length; i++) {
//     console.log(option_css_fonts[i]);
// }
// console.log('===================');
// ===========================================================

// for (var i = 0; i < controles.length; i++) {
//     console.log(controles[i]);
// }

var opciones_todas =
    option_font_face.concat(
        option_css_fonts_guide, option_css_fonts);
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

    select[i].addEventListener('input', function(argument) {

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
                } else {

                    controles[i].style.display = "none";
                }
            }

        }

        // console.log(this.children.length);
        // console.log('=============');

        // if ((this.getAttribute("id")) == "1") {
        //     console.log("@font_face: attr");

        //     for (var i = 0; i < controles.length; i++) {

        //         console.log(controles[i]);

        //         if (i == 0) {

        //             controles[i].style.display = "block";
        //         } else {
        //             controles[i].style.display = "none";
        //         }

        //     }
        // }

    });
}
// ===================================================

// =======================================
//  Prueba para definir el valor de los elementos option 
// console.log(select[0].children);
// console.log(select[0].children.length);
// console.log(select[0].children[0]);
// console.log(select[0].children[1]);
// console.log(select[0].children[2]);
// console.log(select[0].children[3]);
// console.log(select[0].children[4]);
// console.log(select[0].children[5]);
// console.log(select[0].children[6]);
// console.log(select[1].children);
// console.log(select[2].children);
// =======================================