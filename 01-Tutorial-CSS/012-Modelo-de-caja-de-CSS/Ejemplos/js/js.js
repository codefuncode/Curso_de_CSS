var elemento = document.getElementById('x');
var tipoborde = document.getElementById('tipoborde');
var range = document.querySelectorAll('[type="range"]');
var boton = document.querySelectorAll('[type="button"]');
var label = document.querySelectorAll('.controldinamico label');
var btnColor = document.querySelectorAll('[type="color"]');
var controlselect = document.querySelectorAll(".controlselect");
var inputradio = document.querySelectorAll('[name="borde"]');
var accion;
var controles = [];
var controlactivo;

// Se puede usar una matriz en vez de variabkles 
var mt = 0;
var mr = 0;
var mb = 0;
var ml = 0;
var allm = 0;

// Se puede usar una matriz en vez de variabkles 
var pt = 0;
var pr = 0;
var pb = 0;
var pl = 0;

// Se puede usar una matriz en vez de variabkles 
var bt = 0;
var br = 0;
var bb = 0;
var bl = 0;

// var btype = "none";
var btypeAriba = "solid";
var btypeDerecha = "solid";
var btypeAbajo = "solid";
var btypeIzquerda = "solid";

// var bcolor = "transparent";
var bcolorAriba = "transparent";
var bcolorderecha = "transparent";
var bcolorAbajo = "transparent";
var bcolorIzquerda = "transparent";

var ancho = 99;
var alto = 300;

elemento.style.width = "" + ancho + "%";
elemento.style.height = "" + alto + "px";
controlselect[0].style.display = "none";

// tipoborde.style.display = "none";

for (var i = 0; i < boton.length; i++) {

    boton[i].style.backgroundColor = "red";

}

for (var i = 0; i < range.length; i++) {

    range[i].value = 0;

}
for (var i = 0; i < label.length; i++) {

    label[i].textContent = "";

}
for (var i = 0; i <= 4; i++) {

    label[i].style.display = "none";
    range[i].style.display = 'none';

}

// Aplicar evento a todos los botones 

for (var i = 0; i < boton.length; i++) {

    boton[i].addEventListener("click", definecontroles);

}

//  Evento para la seleccion del borde 
tipoborde.addEventListener("input", function(argument) {

    // btype = this.value;
    console.log('============');
    console.log(this.value);

    for (var i = 0; i < inputradio.length; i++) {

        if (inputradio[i].checked) {

            console.log(inputradio[i].value);

            if (inputradio[i].value == "Ariba") {

                btypeAriba = this.value;
                elemento.style.borderTopStyle = btypeAriba;

            } else if (inputradio[i].value == "Derecha") {

                btypeDerecha = this.value;
                elemento.style.borderRightStyle = btypeDerecha;

            } else if (inputradio[i].value == "Abajo") {

                btypeAbajo = this.value;
                elemento.style.borderBottomStyle = btypeAbajo;

            } else if (inputradio[i].value == "Izquerda") {

                btypeIzquerda = this.value;
                elemento.style.borderLeftStyle = btypeIzquerda;

            } else if (inputradio[i].value == "Todos") {

                btypeAriba = this.value;
                btypeDerecha = this.value;
                btypeAbajo = this.value;
                btypeIzquerda = this.value;

                elemento.style.borderTopStyle = btypeAriba;
                elemento.style.borderRightStyle = btypeDerecha;
                elemento.style.borderBottomStyle = btypeAbajo;
                elemento.style.borderLeftStyle = btypeIzquerda;

            }
        }
    }
    console.log('============');
});
//  Evento para la selecion de color del borde 

btnColor[0].addEventListener("change", function(argument) {

    for (var i = 0; i < inputradio.length; i++) {

        if (inputradio[i].checked) {

            if (inputradio[i].value == "Ariba") {

                bcolorAriba = this.value;
                console.log(inputradio[i].value);
                elemento.style.borderTopColor = bcolorAriba;

            } else if (inputradio[i].value == "Derecha") {

                bcolorderecha = this.value;
                console.log(inputradio[i].value);
                elemento.style.borderRightColor = bcolorderecha;

            } else if (inputradio[i].value == "Abajo") {

                bcolorAbajo = this.value;
                console.log(inputradio[i].value);
                elemento.style.borderBottomColor = bcolorAbajo;

            } else if (inputradio[i].value == "Izquerda") {

                bcolorIzquerda = this.value;
                console.log(inputradio[i].value);
                elemento.style.borderLeftColor = bcolorIzquerda;

            } else if (inputradio[i].value == "Todos") {

                bcolorAriba = this.value;
                bcolorderecha = this.value;
                bcolorAbajo = this.value;
                bcolorIzquerda = this.value;

                elemento.style.borderTopColor = bcolorAriba;
                elemento.style.borderRightColor = bcolorderecha;
                elemento.style.borderBottomColor = bcolorAbajo;
                elemento.style.borderLeftColor = bcolorIzquerda;
                console.log(inputradio[i].value);

            }
            // console.log('=======================');
            // console.log(inputradio[i].value);
            // console.log(this.value);
            // console.log('=======================');
        }
    }

});

//  funciones 

//  se define lo que susedera despues de pulsar cada boton 

function definecontroles() {

    if (this.value == "Ancho") {

        controlselect[0].style.display = "none";

        boton[0].style.backgroundColor = "green";
        boton[1].style.backgroundColor = "red";
        boton[2].style.backgroundColor = "red";
        boton[3].style.backgroundColor = "red";
        boton[4].style.backgroundColor = "red";

        boton[0].style.color = "white";
        boton[1].style.color = "black";
        boton[2].style.color = "black";
        boton[3].style.color = "black";
        boton[4].style.color = "black";

        agregaControles(1);

        controlactivo = controlVisible();

        console.log(controlactivo);
        accion = this.value;
        label[0].textContent = "Aplica el " + accion;

    } else if (this.value == "Alto") {

        controlselect[0].style.display = "none";

        boton[0].style.backgroundColor = "red";
        boton[1].style.backgroundColor = "green";
        boton[2].style.backgroundColor = "red";
        boton[3].style.backgroundColor = "red";
        boton[4].style.backgroundColor = "red";

        boton[0].style.color = "black";
        boton[1].style.color = "white";
        boton[2].style.color = "black";
        boton[3].style.color = "black";
        boton[4].style.color = "black";

        agregaControles(1);
        controlactivo = controlVisible();
        // controlactivo[0].value = alto;
        console.log(controlactivo);
        accion = this.value;
        label[0].textContent = "Aplica el " + accion;

    } else if (this.value == "Margen") {

        controlselect[0].style.display = "none";

        boton[0].style.backgroundColor = "red";
        boton[1].style.backgroundColor = "red";
        boton[2].style.backgroundColor = "green";
        boton[3].style.backgroundColor = "red";
        boton[4].style.backgroundColor = "red";

        boton[0].style.color = "black";
        boton[1].style.color = "black";
        boton[2].style.color = "white";
        boton[3].style.color = "black";
        boton[4].style.color = "black";

        agregaControles(5);
        controlactivo = controlVisible();
        console.log(controlactivo);
        accion = this.value;

        label[0].textContent = "Aplica " + accion + " Superior";
        label[1].textContent = "Aplica " + accion + " Derecho";
        label[2].textContent = "Aplica " + accion + " Inferior";
        label[3].textContent = "Aplica " + accion + " Izquierdo";
        label[4].textContent = "Aplica Todos los " + accion + "es";

    } else if (this.value == "Relleno") {
        controlselect[0].style.display = "none";

        boton[0].style.backgroundColor = "red";
        boton[1].style.backgroundColor = "red";
        boton[2].style.backgroundColor = "red";
        boton[3].style.backgroundColor = "green";
        boton[4].style.backgroundColor = "red";

        boton[0].style.color = "black";
        boton[1].style.color = "black";
        boton[2].style.color = "black";
        boton[3].style.color = "white";
        boton[4].style.color = "black";

        agregaControles(5);
        controlactivo = controlVisible();
        console.log(controlactivo);
        accion = this.value;

        label[0].textContent = "Aplica " + accion + " Superior";
        label[1].textContent = "Aplica " + accion + " Derecho";
        label[2].textContent = "Aplica " + accion + " Inferior";
        label[3].textContent = "Aplica " + accion + " Izquierdo";
        label[4].textContent = "Aplica Todos los " + accion + "s";

    } else if (this.value == "Borde") {
        controlselect[0].style.display = "";

        boton[0].style.backgroundColor = "red";
        boton[1].style.backgroundColor = "red";
        boton[2].style.backgroundColor = "red";
        boton[3].style.backgroundColor = "red";
        boton[4].style.backgroundColor = "green";

        boton[0].style.color = "black";
        boton[1].style.color = "black";
        boton[2].style.color = "black";
        boton[3].style.color = "black";
        boton[4].style.color = "white";

        agregaControles(5);
        controlactivo = controlVisible();
        console.log(controlactivo);
        accion = this.value;

        label[0].textContent = "Aplica " + accion + " Superior";
        label[1].textContent = "Aplica " + accion + " Derecho";
        label[2].textContent = "Aplica " + accion + " Inferior";
        label[3].textContent = "Aplica " + accion + " Izquierdo";
        label[4].textContent = "Aplica Todos los " + accion + "s";

    }

    //  Aplicar eventos  a los controles visibles de la nueva matriz 
    for (var i = 0; i < controlactivo.length; i++) {

        controlactivo[i].addEventListener("input", aplicaFuncionalidad);

    }
    //  Se le da valor al control activo despues de haverle aplicado el 
    // evento de lo contrario no funciona 
    if (accion == "Ancho") {

        controlactivo[0].setAttribute("max", "99");
        controlactivo[0].value = ancho;

    } else if (accion == "Alto") {

        controlactivo[0].setAttribute("max", "550");
        controlactivo[0].value = alto;

    } else if (accion == "Margen") {

        controlactivo[0].setAttribute("max", "100");
        controlactivo[0].value = mt;

        controlactivo[1].setAttribute("max", "100");
        controlactivo[1].value = mr;

        controlactivo[2].setAttribute("max", "100");
        controlactivo[2].value = mb;

        controlactivo[3].setAttribute("max", "100");
        controlactivo[3].value = ml;

        controlactivo[4].setAttribute("max", "100");
        controlactivo[4].value = allm;

    } else if (accion == "Relleno") {

    } else if (accion == "Borde") {

        controlactivo[0].setAttribute("max", "50");
        controlactivo[0].value = bt;

        controlactivo[1].setAttribute("max", "50");
        controlactivo[1].value = br;

        controlactivo[2].setAttribute("max", "50");
        controlactivo[2].value = bb;

        controlactivo[3].setAttribute("max", "50");
        controlactivo[3].value = bl;

        controlactivo[4].setAttribute("max", "50");
        // controlactivo[4].value = allm;

    }
}

//==================================================================
//  Aplica el control visible y lo agrega a una nueva mentriz 
// para su posterior manipulacion 

function controlVisible() {

    for (var i = 0; i < range.length; i++) {

        if (!(range[i].style.display == "none")) {

            controles.push(range[i]);
        }
    }

    var result = controles;
    controles = [];
    return result;
}

//  Se agregan los controles a la interfaz  de acuerdo al 
// parametro que contene la cantida de controles 

function agregaControles(size) {

    for (var i = 0; i < range.length; i++) {

        if (i > size - 1) {

            range[i].style.display = 'none';
            label[i].style.display = 'none';

        } else {

            range[i].style.display = '';
            label[i].style.display = '';
        }
    }
}

//  Aplicamos la funiconalidad de los controles que este visibles 
// despues del pulsar el botos de la accion  

function aplicaFuncionalidad() {
    // ======================================================
    if (accion == "Ancho") {

        ancho = this.value;
        elemento.style.width = "" + ancho + "%";

        // ======================================================
    } else if (accion == "Alto") {

        alto = this.value;
        elemento.style.height = "" + alto + "px";

        // =====================================================
    } else if (accion == "Margen") {

        this.setAttribute("max", "100");
        if (this == controlactivo[0]) {
            mt = this.value;

            var cadena =
                mt + "px " +
                mr + "px " +
                mb + "px " +
                ml + "px";

            elemento.style.margin = "" + cadena + "";

            console.log("controlactivo 0");

        } else if (this == controlactivo[1]) {

            mr = this.value;

            var cadena =
                mt + "px " +
                mr + "px " +
                mb + "px " +
                ml + "px";

            elemento.style.margin = "" + cadena + "";

            console.log("controlactivo 1");

        } else if (this == controlactivo[2]) {

            mb = this.value;

            let cadena =
                mt + "px " +
                mr + "px " +
                mb + "px " +
                ml + "px";

            elemento.style.margin = "" + cadena + "";

            console.log("controlactivo 2");

        } else if (this == controlactivo[3]) {

            ml = this.value;

            let cadena =
                mt + "px " +
                mr + "px " +
                mb + "px " +
                ml + "px";

            elemento.style.margin = "" + cadena + "";

            console.log("controlactivo 3");

        } else if (this == controlactivo[4]) {

            mt = this.value;
            mr = this.value;
            mb = this.value;
            ml = this.value;
            allm = this.value;

            let cadena =
                mt + "px " +
                mr + "px " +
                mb + "px " +
                ml + "px";

            elemento.style.margin = "" + cadena + "";
            controlactivo[0].value = this.value;
            controlactivo[1].value = this.value;
            controlactivo[2].value = this.value;
            controlactivo[3].value = this.value;
            console.log("controlactivo 4");
        }

        // =======================================================

    } else if (accion == "Relleno") {

        this.setAttribute("max", "100");
        if (this == controlactivo[0]) {
            pt = this.value;

            var cadena =
                pt + "px " +
                pr + "px " +
                pb + "px " +
                pl + "px";

            elemento.style.padding = "" + cadena + "";

            console.log("controlactivo 0");

        } else if (this == controlactivo[1]) {

            pr = this.value;

            var cadena =
                pt + "px " +
                pr + "px " +
                pb + "px " +
                pl + "px";

            elemento.style.padding = "" + cadena + "";

            console.log("controlactivo 1");

        } else if (this == controlactivo[2]) {

            pb = this.value;

            var cadena =
                pt + "px " +
                pr + "px " +
                pb + "px " +
                pl + "px";

            elemento.style.padding = "" + cadena + "";

            console.log("controlactivo 2");

        } else if (this == controlactivo[3]) {

            pl = this.value;

            var cadena =
                pt + "px " +
                pr + "px " +
                pb + "px " +
                pl + "px";

            elemento.style.padding = "" + cadena + "";

            console.log("controlactivo 3");

        } else if (this == controlactivo[4]) {

            pt = this.value;
            pr = this.value;
            pb = this.value;
            pl = this.value;

            let cadena =
                pt + "px " +
                pr + "px " +
                pb + "px " +
                pl + "px";

            elemento.style.padding = "" + cadena + "";

            controlactivo[0].value = this.value;
            controlactivo[1].value = this.value;
            controlactivo[2].value = this.value;
            controlactivo[3].value = this.value;

            console.log("controlactivo 4");
        }

    } else if (accion == "Borde") {

        if (this == controlactivo[0]) {

            bt = this.value;
            var cadena =
                bt + "px";

            elemento.style.borderTopWidth = cadena;
            elemento.style.borderTopStyle = btypeAriba;
            elemento.style.borderTopColor = bcolorAriba;

        } else if (this == controlactivo[1]) {

            br = this.value;
            var cadena =
                br + "px";

            elemento.style.borderRight = cadena;
            elemento.style.borderRightStyle = btypeDerecha;
            elemento.style.borderRightColor = bcolorderecha;

        } else if (this == controlactivo[2]) {

            bb = this.value;
            var cadena =
                bb + "px";

            elemento.style.borderBottom = cadena;
            elemento.style.borderBottomStyle = btypeAbajo;
            elemento.style.borderBottomColor = bcolorAbajo;

        } else if (this == controlactivo[3]) {

            bl = this.value;
            var cadena =
                bl + "px";

            elemento.style.borderLeft = cadena;
            elemento.style.borderLeftStyle = btypeIzquerda;
            elemento.style.borderLeftColor = bcolorIzquerda;

        } else if (this == controlactivo[4]) {

            bt = this.value;
            br = this.value;
            bb = this.value;
            bl = this.value;

            elemento.style.borderTopWidth = bt + "px";
            elemento.style.borderTopStyle = btypeAriba;
            elemento.style.borderTopColor = bcolorAriba;

            elemento.style.borderRight = br + "px";
            elemento.style.borderRightStyle = btypeDerecha;
            elemento.style.borderRightColor = bcolorderecha;

            elemento.style.borderBottom = bb + "px";
            elemento.style.borderBottomStyle = btypeAbajo;
            elemento.style.borderBottomColor = bcolorAbajo;

            elemento.style.borderLeft = bl + "px";
            elemento.style.borderLeftStyle = btypeIzquerda;
            elemento.style.borderLeftColor = bcolorIzquerda;

            controlactivo[0].value = this.value;
            controlactivo[1].value = this.value;
            controlactivo[2].value = this.value;
            controlactivo[3].value = this.value;

        }

    }

}