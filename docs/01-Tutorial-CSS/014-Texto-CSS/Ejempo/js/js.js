// ======================================================
//  Variables 
// ====================================================
var areaTexto =
    document.getElementById('areaTexto'),

    textoMuestra =
    document.getElementById('texto'),

    propiedad =
    document.getElementById('propiedad'),

    color =
    document.querySelectorAll('[type="color"]'),

    direccion =
    document.getElementById('direction'),

    espaciado_de_letras =
    document.getElementById('espaciado_de_letras'),

    alineamiento =
    document.getElementById('alineamiento'),

    cajaControl =
    document.querySelectorAll('.cajaControl>div'),

    decoradoControl =
    document.querySelectorAll('.decoradoControl>div'),

    decoradoSeleccion =
    document.getElementById('decorado'),

    // línea_de_decoracion =
    // false,

    decoradoLinea =
    document.getElementById('decoradoLinea'),

    decoradoEstilo =
    document.getElementById('decoradoEstilo'),

    line_height =
    document.getElementById('line_height'),

    altura_unidad =
    document.querySelectorAll('[name="unit"]'),

    decorado =
    document.getElementById('decorado'),

    endentar =
    document.getElementById('endentar'),

    valoresNumeroSombra =
    document.querySelectorAll(
        ".valoresNumeroSombra input"),

    valorColorSombra =
    document.querySelectorAll(
        '.colorTipoSombra [type="color"]'),

    parametro_text_shadow_1 =
    ["0px", "0px", "0px", "black"],

    parametro_text_shadow_2 =
    ["0px", "0px", "0px", "black"],

    parametro_text_shadow_3 =
    ["0px", "0px", "0px", "black"],

    transform =
    document.getElementById('transform'),

    desbordarse =
    document.getElementById('desbordarse'),

    unicode =
    document.getElementById('unicode'),

    spacialAling =
    document.getElementById('spacialAling'),

    verticalalign =
    document.getElementById('verticalalign'),

    elementAling =
    document.querySelectorAll('.elementAling'),

    verticalalingControls =
    document.querySelectorAll(".verticalalingControls>div"),

    verticalalignnumberControl =
    document.querySelectorAll('#verticalalignnumberControl>input'),

    wordspacinglength =
    document.getElementById('wordspacinglength'),

    btnwordspacinglength =
    document.querySelectorAll('#wordspacinglength>input'),

    wordspacing =
    document.getElementById('wordspacing');

// =====================================================

// ======================================================
//  Estado inicial de los elementos 
// ====================================================
for (var i = 0; i < valoresNumeroSombra.length; i++) {

    valoresNumeroSombra[i].value = 0;
    let min = document.createAttribute("min");
    let max = document.createAttribute("max");

    min.value = -100;
    max.value = 100;

    valoresNumeroSombra[i].setAttributeNode(min);
    valoresNumeroSombra[i].setAttributeNode(max);
    // console.log(valoresNumeroSombra[i]);
}

for (var i = 0; i < cajaControl.length; i++) {

    cajaControl[i].style.display = "none";
}

for (var i = 0; i < decoradoControl.length; i++) {

    decoradoControl[i].style.display = "none";

}
for (var i = 0; i < color.length; i++) {
    color[i].value = "black";
    color[i].style.backgroundColor = color[i].value;
    textoMuestra.style.color = color[i].value;
}

decoradoSeleccion.value = "";

propiedad.value = " ";
direccion.value = " ";
line_height.value = 0;
areaTexto.value =
    "Lorem ipsum dolor sit amet consectetur" +
    ", adipisicing elit. Neque corporis " +
    "laboriosam maiores, soluta iusto quisquam" +
    ", repudiandae eligendi optio animi nam " +
    "labore nemo consequuntur amet eveniet," +
    " quia ab doloribus deleniti praesentium?";
textoMuestra.innerHTML = areaTexto.value;
alineamiento.value = "";
espaciado_de_letras.value = 0;
decoradoLinea.value = "";
decoradoEstilo.value = "";
desbordarse.value = "";
verticalalign.value = "";
spacialAling.style.display = "none";
verticalalingControls[1].style.display = "none";
wordspacinglength.style.display = "none";
wordspacing.value = "";
btnwordspacinglength[0].value = 0;

// ====================================================

areaTexto.addEventListener("input", escribetextoMuestra);
propiedad.addEventListener("input", selecionaPropiedad);

function escribetextoMuestra(argument) {

    textoMuestra.innerHTML = areaTexto.value;

}

function
selecionaPropiedad(argument) {

    console.log(this.value);

    if (this.value == "text-overflow") {

        textoMuestra.style.whiteSpace = "nowrap";
        textoMuestra.style.overflow = "hidden";

    } else {

        textoMuestra.style.whiteSpace = "initial";
        textoMuestra.style.overflow = "initial";

    }

    if ((this.value == "vertical-align")) {

        spacialAling.style.display = "block";

    } else {

        spacialAling.style.display = "none";
    }

    if (this.value == "unicode-bidi") {

        textoMuestra.style.direction = "rtl";

    } else {

        textoMuestra.style.direction = "initial";
    }

    if (this.value == "color") {

        muestraControl(0);
        color[0].addEventListener(
            "change",
            aplicaColor);

    } else if (this.value == "direction") {

        muestraControl(1);
        direccion.addEventListener(
            "input",
            aplicadireccion);

    } else if (this.value == "letter-spacing") {

        muestraControl(2);
        espaciado_de_letras.addEventListener(
            "input",
            aplicaEspacioLetra);

    } else if (this.value == "line-height") {

        muestraControl(3);
        line_height.addEventListener(
            'input',
            aplicaAlturaLinea)

    } else if (this.value == "text-align") {

        muestraControl(4);
        alineamiento.addEventListener(
            "input",
            aplicaAlineado);

    } else if (this.value == "text-decoration") {

        muestraControl(5);
        decorado.addEventListener(
            "input",
            aplicaDecoraccion);

    } else if (this.value == "text-indent") {

        muestraControl(6);
        endentar.addEventListener(
            "input",
            aplicaindentacion);

    } else if (this.value == "text-shadow") {

        muestraControl(7);
        aplicaSombra();
        aplicaColorSombra();

    } else if (this.value == "text-transform") {

        muestraControl(8);
        transform.addEventListener(
            "input",
            aplicaTransformacion);

    } else if (this.value == "text-overflow") {

        muestraControl(9);
        desbordarse.addEventListener(
            'input',
            aplicadesbordar);

    } else if (this.value == "unicode-bidi") {

        muestraControl(10);
        unicode.addEventListener(
            'input',
            aplicatextobidireccional);

    } else if (this.value == "vertical-align") {

        muestraControl(11);
        verticalalign.addEventListener(
            'input',
            aplicaalineadovertical);

    } else if (this.value == "white-space") {

        muestraControl(12);

    } else if (this.value == "word-spacing") {

        muestraControl(13);

        wordspacing.addEventListener('input', aplicaEspaciodePalabras);

    }
}

function
aplicadireccion(argument) {

    console.log(this.value);

    if (this.value == "text-decoration-line") {

        // línea_de_decoracion = true;
        aplicadireccionDecoration(0);
        decoradoLinea.value = "";

    } else if (this.value == "text-decoration-color") {

        color[1].oninput =
            function() {

                color[1]
                    .style.backgroundColor =
                    color[1].value;
            };

        aplicadireccionDecoration(1);

    } else if (this.value == "text-decoration-style") {

        aplicadireccionDecoration(2);
        decoradoEstilo.value = "";

    }
}

function
aplicaColor(argument) {
    console.log(this.value);

    for (var i = 0; i < color.length; i++) {

        color[i]
            .style.backgroundColor =
            color[i].value;
    }

    textoMuestra.style.color = this.value;
}

// ====================================================

function
muestraControl(argument) {

    for (var i = 0; i < cajaControl.length; i++) {

        if (i == argument) {

            cajaControl[i].style.display = "block";

        } else {

            cajaControl[i].style.display = "none";
        }
    }

}

function
aplicadireccionDecoration(
    argument
) {

    for (var i = 0; i <
        decoradoControl
        .length; i++) {

        if (i == argument) {

            decoradoControl[i]
                .style.display = "block";

        } else {

            decoradoControl[i]
                .style.display = "none";

        }
    }
}

function aplicadireccion(argument) {

    textoMuestra.style.direction =
        this.value;
}

function aplicaEspacioLetra(argument) {

    textoMuestra.style.letterSpacing =
        this.value + "px";
}

function
aplicaAlturaLinea(argument) {

    for (var i = 0; i <
        altura_unidad.length; i++) {

        var valor;
        let min = document.createAttribute("min");
        let max = document.createAttribute("max");

        if (altura_unidad[i].checked) {

            valor =
                altura_unidad[i].value;

            if (valor == "number") {

                min.value = 0;
                max.value = 4;
                this.setAttributeNode(min);
                this.setAttributeNode(max);
                textoMuestra.style.lineHeight = this.value;

            } else if (valor == "length") {

                min.value = 0;
                max.value = 100;
                this.setAttributeNode(min);
                this.setAttributeNode(max);
                textoMuestra.style.lineHeight = this.value + "px";

            } else if (valor == "%") {

                min.value = 0;
                max.value = 400;
                this.setAttributeNode(min);
                this.setAttributeNode(max);
                textoMuestra.style.lineHeight = this.value + "%";
            }

        }

    }
}

function aplicaAlineado(argument) {

    console.log(this.value);

    textoMuestra.style.textAlign = this.value;
}

function aplicaDecoraccion(argument) {

    console.log(this.value);

    if (this.value == "text-decoration-line") {

        decoradoControl[0].style.display = "block";
        decoradoControl[1].style.display = "none";
        decoradoControl[2].style.display = "none";
        decoradoLinea.addEventListener(
            "input",
            aplicaLineadecorac)

    } else if (this.value == "text-decoration-color") {

        decoradoControl[0].style.display = "none";
        decoradoControl[1].style.display = "block";
        decoradoControl[2].style.display = "none";
        color[1].addEventListener(
            'change',
            aplicaColorLineaDecoraccion);

    } else if (this.value == "text-decoration-style") {

        decoradoControl[0].style.display = "none";
        decoradoControl[1].style.display = "none";
        decoradoControl[2].style.display = "block";
        decoradoEstilo.addEventListener(
            'input',
            aplicaEstiloLineaDecvoraccion);

    }

}

function aplicaLineadecorac(argument) {

    textoMuestra.style.textDecoration = this.value;
}

function aplicaColorLineaDecoraccion(argument) {

    for (var i = 0; i < color.length; i++) {

        color[i]
            .style.backgroundColor =
            color[i].value;
    }
    textoMuestra.style.textDecorationColor = this.value;

}

function aplicaEstiloLineaDecvoraccion(argument) {

    textoMuestra.style.textDecorationStyle = this.value;
}

function aplicaindentacion(argument) {

    let min = document.createAttribute("min");
    let max = document.createAttribute("max");

    min.value = 0;
    max.value = 100;

    this.setAttributeNode(min);
    this.setAttributeNode(max);
    textoMuestra.style.textIndent = this.value + "px";

}

function aplicaSombra(argument) {
    for (var i = 0; i < valoresNumeroSombra.length; i++) {
        valoresNumeroSombra[i].addEventListener(
            "input",
            aplicapvalorNumeroSopmbra)
    }
}

function aplicapvalorNumeroSopmbra(argument) {
    console.log(this.value);

    for (var i = 0; i < valoresNumeroSombra.length; i++) {

        if (valoresNumeroSombra[i] ==
            this && (i <= 2)) {

            if (i == 0) {
                parametro_text_shadow_1[0] = this.value + "px";
            } else if (i == 1) {
                parametro_text_shadow_1[1] = this.value + "px";
            } else if (i == 2) {
                parametro_text_shadow_1[2] = this.value + "px";
            }

            console.log('boton 1-3');
            console.log(this.value);

        } else if (valoresNumeroSombra[i] ==
            this && (i <= 5 && i >= 3)) {

            if (i == 3) {
                parametro_text_shadow_2[0] = this.value + "px";
            } else if (i == 4) {
                parametro_text_shadow_2[1] = this.value + "px";
            } else if (i == 5) {
                parametro_text_shadow_2[2] = this.value + "px";
            }
            console.log('boton 4-6');
            console.log(this.value);

        } else if (valoresNumeroSombra[i] ==
            this && (i <= 8 && i >= 4)) {

            if (i == 6) {
                parametro_text_shadow_3[0] = this.value + "px";
            } else if (i == 7) {
                parametro_text_shadow_3[1] = this.value + "px";
            } else if (i == 8) {
                parametro_text_shadow_3[2] = this.value + "px";
            }

            console.log('boton 7-9');
            console.log(this.value);
        }
    }

    aplicaparametrosDeSombra();

}

function aplicaColorSombra(argument) {

    for (var i = 0; i < valorColorSombra.length; i++) {

        valorColorSombra[i].addEventListener(
            "change",
            aplicaParametroColorSombra)
    }
}

function aplicaParametroColorSombra(argument) {
    console.log(this);
    console.log(this.value);
    if (this == valorColorSombra[0]) {

        parametro_text_shadow_1[3] = this.value;

    } else if (this == valorColorSombra[1]) {

        parametro_text_shadow_2[3] = this.value;

    } else if (this == valorColorSombra[2]) {

        parametro_text_shadow_3[3] = this.value;

    } else {}

    aplicaparametrosDeSombra();
}

function aplicaparametrosDeSombra(argument) {

    var cadena1 = parametro_text_shadow_1[0] + " " +
        parametro_text_shadow_1[1] + " " +
        parametro_text_shadow_1[2] + " " +
        parametro_text_shadow_1[3];

    var cadena2 = parametro_text_shadow_2[0] + " " +
        parametro_text_shadow_2[1] + " " +
        parametro_text_shadow_2[2] + " " +
        parametro_text_shadow_2[3];

    var cadena3 = parametro_text_shadow_3[0] + " " +
        parametro_text_shadow_3[1] + " " +
        parametro_text_shadow_3[2] + " " +
        parametro_text_shadow_3[3];

    // console.log(cadena);
    textoMuestra.style.textShadow = cadena1 + ", " +
        cadena2 + " , " + cadena3;

    console.log(textoMuestra.style.textShadow);

}

function aplicaTransformacion(argument) {

    textoMuestra.style.textTransform = this.value;
}

function aplicadesbordar(argument) {

    textoMuestra.style.textOverflow = this.value;

    console.log(this.value);
}

function aplicatextobidireccional(argument) {

    textoMuestra.style.unicodeBidi = this.value;
}

function aplicaalineadovertical(argument) {

    if ((this.value == "length") ||
        (this.value == "%")) {

        verticalalingControls[1].style.display = "block";

    } else {

        verticalalingControls[1].style.display = "none";

    }

    console.log(this.value);

    if (this.value == "baseline") {

        for (var i = 0; i <
            elementAling.length; i++) {

            elementAling[i]
                .style.verticalAlign =
                this.value;
        }

    } else if (this.value == "length") {

        verticalalignnumberControl[0]
            .addEventListener(
                'input',
                function(argument) {
                    console.log(this.value);
                    for (var i = 0; i <
                        elementAling.length; i++) {

                        elementAling[i]
                            .style.verticalAlign =
                            this.value + "px";
                    }
                });

    } else if (this.value == "%") {

        verticalalignnumberControl[0]
            .addEventListener(
                'input',
                function(argument) {
                    console.log(this.value);
                    for (var i = 0; i <
                        elementAling.length; i++) {

                        elementAling[i]
                            .style.verticalAlign =
                            this.value + "%";
                    }
                });

    } else if (this.value == "sub") {

        for (var i = 0; i <
            elementAling.length; i++) {

            elementAling[i]
                .style.verticalAlign =
                this.value;
        }

    } else if (this.value == "super") {

        for (var i = 0; i <
            elementAling.length; i++) {

            elementAling[i]
                .style.verticalAlign =
                this.value;
        }

    } else if (this.value == "top") {

        for (var i = 0; i <
            elementAling.length; i++) {

            elementAling[i]
                .style.verticalAlign =
                this.value;
        }

    } else if (this.value == "text-top") {

        for (var i = 0; i <
            elementAling.length; i++) {

            elementAling[i]
                .style.verticalAlign =
                this.value;
        }

    } else if (this.value == "middle") {

        for (var i = 0; i <
            elementAling.length; i++) {

            elementAling[i]
                .style.verticalAlign =
                this.value;
        }

    } else if (this.value == "bottom") {

        for (var i = 0; i <
            elementAling.length; i++) {

            elementAling[i]
                .style.verticalAlign =
                this.value;
        }

    } else if (this.value == "text-bottom") {

        for (var i = 0; i <
            elementAling.length; i++) {

            elementAling[i]
                .style.verticalAlign =
                this.value;
        }

    }

}

function aplicaEspaciodePalabras(argument) {
    console.log(this.value);
    if (this.value == "length") {
        wordspacinglength.style.display = "block";

    } else {

        wordspacinglength.style.display = "none";
    }

    if (this.value == "normal") {

        textoMuestra.style.wordSpacing = this.value;

    } else if (this.value == "length") {

        btnwordspacinglength[0].addEventListener('input', function(argument) {

            textoMuestra.style.wordSpacing = this.value + "px";
        });

    }
}