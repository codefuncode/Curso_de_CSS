var fondo = document.getElementById('fondo');
var foto_paisaje = document.querySelectorAll('.paisaje img');
var foto_pinguino = document.querySelectorAll('.pinguino img');
var opcion = document.querySelectorAll('#imagen option');
var seleccion_imagen_fondo = document.querySelectorAll('.seleccionimagenfondo option');
var seleccion_fondo = document.getElementsByClassName('seleccionimagenfondo');
var seleccion_pinguino = document.getElementsByClassName('seleccionimagenicono');
var btn_fijar_imagen = document.querySelectorAll('[type=button]');
var btn_size_posicion = document.querySelectorAll('[type=range]');
var fondofijado = false;
var pinguinofijado = false;
var urlfondo;
var urlfondopinguino;
var alto = 50;
var ancho = 50;
var aribaabajo = 50;
var izquerdaderecha = 50;
var al, an, iz, ar;

// ===================================================
// Estado inicial de algunos componentes 
// ==================

for (var i = 0; i < btn_size_posicion.length; i++) {
    // console.log();
    btn_size_posicion[i].value = 50;
}

for (var i = 0; i < btn_fijar_imagen.length; i++) {

    // console.log(fijar_imagen[i]);
    btn_fijar_imagen[i].style.backgroundColor = "green";
    btn_fijar_imagen[i].style.color = "white";
}

seleccion_fondo[0].value = "Elige";
seleccion_pinguino[0].value = "Elige";

// ===================================================

// =========================================================================
// Eventos 
// ==================
seleccion_fondo[0].addEventListener("input", aplicafondotemp);
seleccion_pinguino[0].addEventListener("input", aplicafondotemppinguino);
btn_fijar_imagen[0].addEventListener("click", btn1_activa);
btn_fijar_imagen[1].addEventListener("click", btn2_activa);

for (var i = 0; i < foto_paisaje.length; i++) {

    foto_paisaje[i].addEventListener("mouseover", fondotemp);
    foto_paisaje[i].addEventListener("mouseout", resetfondo);

}
for (var i = 0; i < foto_pinguino.length; i++) {

    foto_pinguino[i].addEventListener("mouseover", fondotemppinguino);
    foto_pinguino[i].addEventListener("mouseout", resetfondopinguino);

}

for (var i = 0; i < btn_size_posicion.length; i++) {

    if (i == 0) {

        btn_size_posicion[i].addEventListener("input", setAltura);

    } else if (i == 1) {

        btn_size_posicion[i].addEventListener("input", setAncho);

    } else if (i == 2) {

        btn_size_posicion[i].addEventListener("input", mueveizquierdaderecha);

    } else if (i == 3) {

        btn_size_posicion[i].addEventListener("input", muevearibaabajo);
    }

}

// =========================================================================
// Funciones 
// ======================

function btn1_activa(argument) {

    var on_of = btn_fijar_imagen[0].style.backgroundColor;

    if (on_of == "red") {

        btn_fijar_imagen[0].style.backgroundColor = "green";
        btn_fijar_imagen[0].value = "Fijar";
        seleccion_fondo[0].disabled = false;
        fondofijado = false;

    } else if (on_of == "green") {

        btn_fijar_imagen[0].style.backgroundColor = "red";
        btn_fijar_imagen[0].value = "Desfijar";
        seleccion_fondo[0].disabled = true;
        fondofijado = true;
    }

}

function btn2_activa(argument) {

    var on_of = btn_fijar_imagen[1].style.backgroundColor;

    if (on_of == "red") {

        btn_fijar_imagen[1].style.backgroundColor = "green";
        btn_fijar_imagen[1].value = "Fijar";
        seleccion_pinguino[0].disabled = false;
        pinguinofijado = false;

    } else if (on_of == "green") {

        btn_fijar_imagen[1].style.backgroundColor = "red";
        btn_fijar_imagen[1].value = "Desfijar";
        seleccion_pinguino[0].disabled = true;
        pinguinofijado = true;
    }

}

function fondotemp(argument) {

    if (fondofijado) {

    } else {
        var urlfondo = this.getAttribute('src');
        fondo.style.backgroundImage = "url('" + urlfondo + "')";
        fondo.style.backgroundSize = "100% 100%";
        this.style.backgroundColor = "green";
    }

}

function resetfondo(argument) {

    if (fondofijado) {

    } else {

        this.style.backgroundColor = "";
        fondo.style.backgroundImage = "";
    }

}

function aplicafondotemp(argument) {

    if (this.value == '1') {
        urlfondo = foto_paisaje[0].getAttribute('src');

    } else if (this.value == '2') {

        urlfondo = foto_paisaje[1].getAttribute('src');
    } else if (this.value == '3') {

        urlfondo = foto_paisaje[2].getAttribute('src');
    } else if (this.value == '4') {

        urlfondo = foto_paisaje[3].getAttribute('src');
    }

    fondo.style.backgroundImage = "url('" + urlfondo + "')";
    fondo.style.backgroundSize = "100% 100%";

}

function aplicafondotemppinguino(argument) {

    if (this.value == '1') {
        urlfondopinguino = foto_pinguino[0].getAttribute('src');

    } else if (this.value == '2') {

        urlfondopinguino = foto_pinguino[1].getAttribute('src');
    } else if (this.value == '3') {

        urlfondopinguino = foto_pinguino[2].getAttribute('src');
    } else if (this.value == '4') {

        urlfondopinguino = foto_pinguino[3].getAttribute('src');
    }

    fondo.style.backgroundImage = "url('" + urlfondopinguino + "'), url('" + urlfondo + "')";
    fondo.style.backgroundRepeat = "no-repeat, no-repeat";
    fondo.style.backgroundSize = "50% 50%, 100% 100%";
    fondo.style.backgroundPosition = "50% 50%";

}

function fondotemppinguino(argument) {

    if (fondofijado) {

        if (pinguinofijado) {

        } else {
            urlfondopinguino = this.getAttribute('src');
            fondo.style.backgroundImage = "url('" + urlfondopinguino + "'), url('" + urlfondo + "')";
            fondo.style.backgroundRepeat = "no-repeat, no-repeat";

            fondo.style.backgroundSize = "50% 50%, 100% 100%";
            fondo.style.backgroundPosition = "50% 50%";

            this.style.backgroundColor = "green";
        }

    }

}

function resetfondopinguino(argument) {

    this.style.backgroundColor = "";
}

function setAltura(argument) {
    alto = this.value;
    al = this.value + "%";

    iz = izquerdaderecha + "%";
    ar = aribaabajo + "%";
    an = ancho + "%";

    fondo.style.backgroundImage = "url('" + urlfondopinguino + "'), url('" + urlfondo + "')";
    fondo.style.backgroundRepeat = "no-repeat, no-repeat";

    fondo.style.backgroundSize = "" + an + " " + al + ", 100% 100%";
    fondo.style.backgroundPosition = "" + iz + " " + ar + "";
}

function setAncho(argument) {
    ancho = this.value;
    an = this.value + "%";

    iz = izquerdaderecha + "%";
    ar = aribaabajo + "%";
    al = alto + "%";

    fondo.style.backgroundImage = "url('" + urlfondopinguino + "'), url('" + urlfondo + "')";
    fondo.style.backgroundRepeat = "no-repeat, no-repeat";

    fondo.style.backgroundSize = "" + an + " " + al + ", 100% 100%";
    fondo.style.backgroundPosition = "" + iz + " " + ar + "";
}

function mueveizquierdaderecha(argument) {
    izquerdaderecha = this.value;
    iz = this.value + "%";

    ar = aribaabajo + "%";
    al = alto + "%";
    an = ancho + "%";

    fondo.style.backgroundImage = "url('" + urlfondopinguino + "'), url('" + urlfondo + "')";
    fondo.style.backgroundRepeat = "no-repeat, no-repeat";

    fondo.style.backgroundSize = "" + an + " " + al + ", 100% 100%";
    fondo.style.backgroundPosition = "" + iz + " " + ar + "";
}

function muevearibaabajo(argument) {
    aribaabajo = this.value;
    ar = this.value + "%";

    iz = izquerdaderecha + "%";
    al = alto + "%";
    an = ancho + "%";

    fondo.style.backgroundImage = "url('" + urlfondopinguino + "'), url('" + urlfondo + "')";
    fondo.style.backgroundRepeat = "no-repeat, no-repeat";

    fondo.style.backgroundSize = "" + an + " " + al + ", 100% 100%";
    fondo.style.backgroundPosition = "" + iz + " " + ar + "";
}