class Caja {

    constructor(elemento) {

        this.elemento = elemento;
        this.top = "0px";
        this.right = "0px";
        this.botton = "0px";
        this.left = "0px";

        this.elemento.setAttribute("style", "padding: " +
            this.top + " " +
            this.right + " " +
            this.botton + " " +
            this.left + "");
    }

    allPadding(top, right, botton, left) {

        this.top = top + "px";
        this.right = right + "px";
        this.botton = botton + "px";
        this.left = left + "px";

        this.elemento.setAttribute("style", "padding: " +
            this.top + " " +
            this.right + " " +
            this.botton + " " +
            this.left + "");
    }
}

var seleccion = 0;
var t, b, l, r;
var caja = document.querySelectorAll(".fuera");
var btnrange = document.querySelectorAll('[type="range"]');
var btnradio = document.querySelectorAll('[type="radio"]');

var prueba1 = new Caja(caja[0]);
var prueba2 = new Caja(caja[1]);
var prueba3 = new Caja(caja[2]);

// prueba1.allPadding(5, 10, 20, 15);
// prueba2.allPadding(5, 10, 20, 50);
// prueba3.allPadding(5, 10, 20, 15);

console.log(caja[1].style.padding);

// var relleno = caja[1].style.padding;

// caja[1].setAttribute("style", "background-color:blue; padding:" + relleno + " ");

for (var i = 0; i < btnrange.length; i++) {

    console.log(btnrange[i]);

    btnrange[i].value = 0;

    btnrange[i].addEventListener("input", aplicaRelleno);

}

console.log('================');

for (var i = 0; i < btnradio.length; i++) {

    // console.log(btnradio[i]);
    btnradio[i].checked = false;

    btnradio[i].addEventListener("input", function(argument) {

        console.log('cheked');

        if (this == btnradio[0]) {

            caja[0].style.border = "10px solid red";
            caja[1].style.border = "5px solid gray";
            caja[2].style.border = "5px solid gray";

            r = caja[0].style.paddingRight;
            t = caja[0].style.paddingTop;
            l = caja[0].style.paddingLeft;
            b = caja[0].style.paddingBottom;
            r = r.slice(0, r.length - 2);
            t = t.slice(0, t.length - 2);
            l = l.slice(0, l.length - 2);
            b = b.slice(0, b.length - 2);

            seleccion = 1;

            for (var i = 0; i < btnrange.length; i++) {

                if (i == 0) {
                    btnrange[i].value = t;
                } else if (i == 1) {
                    btnrange[i].value = r;
                } else if (i == 2) {
                    btnrange[i].value = b;
                } else if (i == 3) {
                    btnrange[i].value = l;
                }

            }

        } else if (this == btnradio[1]) {

            caja[0].style.border = "5px solid gray";
            caja[1].style.border = "10px solid red";
            caja[2].style.border = "5px solid gray";

            seleccion = 2;

            r = caja[1].style.paddingRight;
            t = caja[1].style.paddingTop;
            l = caja[1].style.paddingLeft;
            b = caja[1].style.paddingBottom;
            r = r.slice(0, r.length - 2);
            t = t.slice(0, t.length - 2);
            l = l.slice(0, l.length - 2);
            b = b.slice(0, b.length - 2);

            for (var i = 0; i < btnrange.length; i++) {

                if (i == 0) {
                    btnrange[i].value = t;
                } else if (i == 1) {
                    btnrange[i].value = r;
                } else if (i == 2) {
                    btnrange[i].value = b;
                } else if (i == 3) {
                    btnrange[i].value = l;
                }

            }

        } else if (this == btnradio[2]) {

            caja[0].style.border = "5px solid gray";
            caja[1].style.border = "5px solid gray";
            caja[2].style.border = "10px solid red";
            seleccion = 3;

            r = caja[2].style.paddingRight;
            t = caja[2].style.paddingTop;
            l = caja[2].style.paddingLeft;
            b = caja[2].style.paddingBottom;
            r = r.slice(0, r.length - 2);
            t = t.slice(0, t.length - 2);
            l = l.slice(0, l.length - 2);
            b = b.slice(0, b.length - 2);

            for (var i = 0; i < btnrange.length; i++) {

                if (i == 0) {
                    btnrange[i].value = t;
                } else if (i == 1) {
                    btnrange[i].value = r;
                } else if (i == 2) {
                    btnrange[i].value = b;
                } else if (i == 3) {
                    btnrange[i].value = l;
                }

            }

        }

    });

}

function aplicaRelleno(argument) {

    if (this == btnrange[4]) {

        if (seleccion == 0) {

        } else if (seleccion == 1) {

            prueba1.allPadding(this.value, this.value, this.value, this.value);
            caja[1].style.border = "5px solid gray";
            caja[2].style.border = "5px solid gray";
            caja[0].style.border = "10px solid red";

            for (var i = 0; i < btnrange.length; i++) {

                btnrange[i].value = this.value;

            }

        } else if (seleccion == 2) {

            prueba2.allPadding(this.value, this.value, this.value, this.value);
            caja[0].style.border = "5px solid gray";
            caja[2].style.border = "5px solid gray";
            caja[1].style.border = "10px solid red";

            for (var i = 0; i < btnrange.length; i++) {

                btnrange[i].value = this.value;

            }

        } else if (seleccion == 3) {

            prueba3.allPadding(this.value, this.value, this.value, this.value);
            caja[1].style.border = "5px solid gray";
            caja[0].style.border = "5px solid gray";
            caja[2].style.border = "10px solid red";

            for (var i = 0; i < btnrange.length; i++) {

                btnrange[i].value = this.value;

            }
        }

    } else if (this == btnrange[0]) {

        if (seleccion == 0) {

        } else if (seleccion == 1) {

            r = caja[0].style.paddingRight;
            // t = caja[0].style.paddingTop;
            l = caja[0].style.paddingLeft;
            b = caja[0].style.paddingBottom;

            r = r.slice(0, r.length - 2);
            l = l.slice(0, l.length - 2);
            b = b.slice(0, b.length - 2);

            prueba1.allPadding(this.value, r, b, l);

            caja[1].style.border = "5px solid gray";
            caja[2].style.border = "5px solid gray";
            caja[0].style.border = "10px solid red";

        } else if (seleccion == 2) {

            r = caja[1].style.paddingRight;
            // t = caja[0].style.paddingTop;
            l = caja[1].style.paddingLeft;
            b = caja[1].style.paddingBottom;

            r = r.slice(0, r.length - 2);
            l = l.slice(0, l.length - 2);
            b = b.slice(0, b.length - 2);

            prueba2.allPadding(this.value, r, b, l);

            caja[0].style.border = "5px solid gray";
            caja[2].style.border = "5px solid gray";
            caja[1].style.border = "10px solid red";

        } else if (seleccion == 3) {

            r = caja[2].style.paddingRight;
            // t = caja[0].style.paddingTop;
            l = caja[2].style.paddingLeft;
            b = caja[2].style.paddingBottom;

            r = r.slice(0, r.length - 2);
            l = l.slice(0, l.length - 2);
            b = b.slice(0, b.length - 2);

            prueba3.allPadding(this.value, r, b, l);

            caja[0].style.border = "5px solid gray";
            caja[1].style.border = "5px solid gray";
            caja[2].style.border = "10px solid red";

        }

    } else if (this == btnrange[1]) {

        if (seleccion == 0) {

        } else if (seleccion == 1) {

            r = caja[0].style.paddingRight;
            t = caja[0].style.paddingTop;
            l = caja[0].style.paddingLeft;
            b = caja[0].style.paddingBottom;

            t = t.slice(0, t.length - 2);
            l = l.slice(0, l.length - 2);
            b = b.slice(0, b.length - 2);

            prueba1.allPadding(t, this.value, b, l);

            caja[1].style.border = "5px solid gray";
            caja[2].style.border = "5px solid gray";
            caja[0].style.border = "10px solid red";

        } else if (seleccion == 2) {

            r = caja[1].style.paddingRight;
            t = caja[1].style.paddingTop;
            l = caja[1].style.paddingLeft;
            b = caja[1].style.paddingBottom;

            t = t.slice(0, t.length - 2);
            l = l.slice(0, l.length - 2);
            b = b.slice(0, b.length - 2);

            prueba2.allPadding(t, this.value, b, l);

            caja[2].style.border = "5px solid gray";
            caja[0].style.border = "5px solid gray";
            caja[1].style.border = "10px solid red";

        } else if (seleccion == 3) {

            r = caja[2].style.paddingRight;
            t = caja[2].style.paddingTop;
            l = caja[2].style.paddingLeft;
            b = caja[2].style.paddingBottom;

            t = t.slice(0, t.length - 2);
            l = l.slice(0, l.length - 2);
            b = b.slice(0, b.length - 2);

            prueba3.allPadding(t, this.value, b, l);

            caja[1].style.border = "5px solid gray";
            caja[0].style.border = "5px solid gray";
            caja[2].style.border = "10px solid red";

        }

    } else if (this == btnrange[2]) {

        if (seleccion == 0) {

        } else if (seleccion == 1) {

            r = caja[0].style.paddingRight;
            t = caja[0].style.paddingTop;
            l = caja[0].style.paddingLeft;
            b = caja[0].style.paddingBottom;

            t = t.slice(0, t.length - 2);
            r = r.slice(0, r.length - 2);
            l = l.slice(0, l.length - 2);
            b = b.slice(0, b.length - 2);

            prueba1.allPadding(t, r, this.value, l);

            caja[1].style.border = "5px solid gray";
            caja[2].style.border = "5px solid gray";
            caja[0].style.border = "10px solid red";

        } else if (seleccion == 2) {

            r = caja[1].style.paddingRight;
            t = caja[1].style.paddingTop;
            l = caja[1].style.paddingLeft;
            b = caja[1].style.paddingBottom;

            t = t.slice(0, t.length - 2);
            r = r.slice(0, r.length - 2);
            l = l.slice(0, l.length - 2);
            b = b.slice(0, b.length - 2);

            prueba2.allPadding(t, r, this.value, l);

            caja[2].style.border = "5px solid gray";
            caja[0].style.border = "5px solid gray";
            caja[1].style.border = "10px solid red";

        } else if (seleccion == 3) {

            r = caja[2].style.paddingRight;
            t = caja[2].style.paddingTop;
            l = caja[2].style.paddingLeft;
            b = caja[2].style.paddingBottom;

            t = t.slice(0, t.length - 2);
            r = r.slice(0, r.length - 2);
            l = l.slice(0, l.length - 2);
            b = b.slice(0, b.length - 2);

            prueba3.allPadding(t, r, this.value, l);

            caja[1].style.border = "5px solid gray";
            caja[0].style.border = "5px solid gray";
            caja[2].style.border = "10px solid red";

        }

    } else if (this == btnrange[3]) {

        if (seleccion == 0) {

        } else if (seleccion == 1) {

            r = caja[0].style.paddingRight;
            t = caja[0].style.paddingTop;
            l = caja[0].style.paddingLeft;
            b = caja[0].style.paddingBottom;

            t = t.slice(0, t.length - 2);
            r = r.slice(0, r.length - 2);
            l = l.slice(0, l.length - 2);
            b = b.slice(0, b.length - 2);

            prueba1.allPadding(t, r, b, this.value);

            caja[1].style.border = "5px solid gray";
            caja[2].style.border = "5px solid gray";
            caja[0].style.border = "10px solid red";

        } else if (seleccion == 2) {

            r = caja[1].style.paddingRight;
            t = caja[1].style.paddingTop;
            l = caja[1].style.paddingLeft;
            b = caja[1].style.paddingBottom;

            t = t.slice(0, t.length - 2);
            r = r.slice(0, r.length - 2);
            l = l.slice(0, l.length - 2);
            b = b.slice(0, b.length - 2);

            prueba2.allPadding(t, r, b, this.value);

            caja[2].style.border = "5px solid gray";
            caja[0].style.border = "5px solid gray";
            caja[1].style.border = "10px solid red";

        } else if (seleccion == 3) {

            r = caja[2].style.paddingRight;
            t = caja[2].style.paddingTop;
            l = caja[2].style.paddingLeft;
            b = caja[2].style.paddingBottom;

            t = t.slice(0, t.length - 2);
            r = r.slice(0, r.length - 2);
            l = l.slice(0, l.length - 2);
            b = b.slice(0, b.length - 2);

            prueba3.allPadding(t, r, b, this.value);

            caja[1].style.border = "5px solid gray";
            caja[0].style.border = "5px solid gray";
            caja[2].style.border = "10px solid red";

        }

    }

}

// ==================================================================
//  Pedazo de codigo que devuelve todas las propiedades y valores css de un elemento 
//  NO se imnplementa en esta documento , solo tene fines de pruebas 
// function dumpCSSText(element) {
//     var s = '';
//     var o = getComputedStyle(element);
//     for (var i = 0; i < o.length; i++) {
//         s += o[i] + ':' + o.getPropertyValue(o[i]) + ';';
//     }
//     return s;
// }

// console.log(dumpCSSText(caja[1]));
// ==================================================================