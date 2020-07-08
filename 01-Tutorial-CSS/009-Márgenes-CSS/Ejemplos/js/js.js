class Divicion {

    constructor(elemento) {

        this.elemento = elemento;
        this.t;
        this.r;
        this.b;
        this.l;
    }

    margenes(x, t, r, b, l) {
        this.t = t + "px";
        this.r = r + "px";
        this.b = b + "px";
        this.l = l + "px";
        x.elemento.style.marginTop = this.t;
        x.elemento.style.marginRight = this.r;
        x.elemento.style.marginBottom = this.b;
        x.elemento.style.marginLeft = this.l;
    }

}
var reset = document.querySelector('[type="button"]');
console.log(reset);
var caja = document.querySelectorAll(".display div div");
var btnrange = document.querySelectorAll(".controles [type='range']");
var btnradio = document.querySelectorAll('[type="radio"]');
var cajaselecionada = 0;
btnrange[0].style.marginTop = "50px";
for (var i = 0; i < btnradio.length; i++) {
    btnradio[i].checked = false;
    console.log(btnradio[i]);
}

div1 = new Divicion(caja[0]);
div2 = new Divicion(caja[1]);
div3 = new Divicion(caja[2]);

div1.margenes(div1, 0, 0, 0, 0);
div2.margenes(div2, 0, 0, 0, 0);
div3.margenes(div3, 0, 0, 0, 0);

for (var i = 0; i < btnrange.length; i++) {
    // console.log(btnrange[i]);
    btnrange[i].value = 0;
    btnrange[i].style.marginBottom = "-10px";
}

function btnrangereset(argument) {

    for (var i = 0; i < btnrange.length; i++) {

        btnrange[i].value = 0;

    }
}

for (var i = 0; i < btnradio.length; i++) {
    // console.log(btnradio[i]);
    btnradio[i].addEventListener("input", selecion);
}

function selecion(argument) {

    if (this.value == 1) {

        console.log('elemento 1');
        caja[0].style.backgroundColor = "pink";
        caja[1].style.backgroundColor = "white";
        caja[2].style.backgroundColor = "white";
        btnrangereset();
        cajaselecionada = 1;

    } else if (this.value == 2) {

        console.log('elemento 2');
        caja[0].style.backgroundColor = "white";
        caja[1].style.backgroundColor = "pink";
        caja[2].style.backgroundColor = "white";
        btnrangereset();
        cajaselecionada = 2

    } else if (this.value == 3) {

        console.log('elemento 3');
        caja[0].style.backgroundColor = "white";
        caja[1].style.backgroundColor = "white";
        caja[2].style.backgroundColor = "pink";
        btnrangereset();
        cajaselecionada = 3

    }

}

for (var i = 0; i < btnrange.length; i++) {

    if (i == 0) {

        btnrange[i].addEventListener("input", aplicamargentop);

    } else if (i == 1) {

        btnrange[i].addEventListener("input", aplicamargenrigth);

    } else if (i == 2) {

        btnrange[i].addEventListener("input", aplicamargenbutton);

    } else if (i == 3) {

        btnrange[i].addEventListener("input", aplicamargenleft);

    } else if (i == 4) {

        btnrange[i].addEventListener("input", aplicamargenall);

    }

}

function aplicamargentop(argument) {

    if (cajaselecionada == 1) {

        div1.margenes(div1, this.value, 0, 0, 0);

    } else if (cajaselecionada == 2) {

        div2.margenes(div2, this.value, 0, 0, 0);

    } else if (cajaselecionada == 3) {

        div3.margenes(div3, this.value, 0, 0, 0);
    }
    console.log(this.value);
}

function aplicamargenrigth(argument) {

    if (cajaselecionada == 1) {

        div1.margenes(div1, 0, this.value, 0, 0);

    } else if (cajaselecionada == 2) {

        div2.margenes(div2, 0, this.value, 0, 0);

    } else if (cajaselecionada == 3) {

        div3.margenes(div3, 0, this.value, 0, 0);
    }
    console.log(this.value);
}

function aplicamargenbutton(argument) {

    if (cajaselecionada == 1) {

        div1.margenes(div1, 0, 0, this.value, 0);

    } else if (cajaselecionada == 2) {

        div2.margenes(div2, 0, 0, this.value, 0);

    } else if (cajaselecionada == 3) {

        div3.margenes(div3, 0, 0, this.value, 0);
    }
    console.log(this.value);
}

function aplicamargenleft(argument) {

    if (cajaselecionada == 1) {

        div1.margenes(div1, 0, 0, 0, this.value);

    } else if (cajaselecionada == 2) {

        div2.margenes(div2, 0, 0, 0, this.value);

    } else if (cajaselecionada == 3) {

        div3.margenes(div3, 0, 0, 0, this.value);
    }
    console.log(this.value);
}

function aplicamargenall(argument) {

    if (cajaselecionada == 1) {

        div1.margenes(div1, this.value, this.value, this.value, this.value);

    } else if (cajaselecionada == 2) {

        div2.margenes(div2, this.value, this.value, this.value, this.value);

    } else if (cajaselecionada == 3) {

        div3.margenes(div3, this.value, this.value, this.value, this.value);
    }
    console.log(this.value);
}
reset.addEventListener("click", function(argument) {
    for (var i = 0; i < btnrange.length; i++) {
        btnrange[i].value = 0;

    }
    for (var i = 0; i < btnradio.length; i++) {
        btnradio[i].checked = false;
    }
    div1.margenes(div1, 0, 0, 0, 0);
    div2.margenes(div2, 0, 0, 0, 0);
    div3.margenes(div3, 0, 0, 0, 0);
    caja[0].style.backgroundColor = "white";
    caja[1].style.backgroundColor = "white";
    caja[2].style.backgroundColor = "white";
    cajaselecionada = 0;
});