let
    cambiafuente =
    document.getElementById('cambiafuente'),

    texto =
    document.getElementById('texto'),

    font_size =
    document.getElementById('font-size'),

    myP =
    document.getElementById('myP'),

    select_font_style =
    document.getElementById('select-font-style'),

    oblique =
    document.getElementById('oblique'),

    font_style_vale =
    "",
    font_weight = document.getElementById('font_weight');

// ============================================
// oblique.style.display = 'none';
// ============================================
allrenge = document.querySelectorAll('[type="range"]');

function rabngo_en_cero(argument) {
    for (var i = 0; i < allrenge.length; i++) {
        allrenge[i].value = 0;
        console.log(allrenge[i]);
    }
}

rabngo_en_cero();

console.log(
    cambiafuente
);
console.log(
    texto
);

cambiafuente.onchange = function() {

    myP.style.fontFamily = this.value;
    texto.style.fontFamily = this.value;
    myP.style.fontStyle = "oblique 0deg";
    oblique.value = 0;
    rabngo_en_cero();

};

console.log(screen.width);

var variable = "Prueba";
console.log(`Prueba de ${variable}`);

// ================================================================

//  Propiedades del texto , eventos funciones variables y 
//  todo lo necesario para implementar las propiedades del texto en una 
//  interfaz web de manera dinámica.

// ---------------------------------------------------------------

// async function loadFonts() {
//     const font = new FontFace('myfont', 'url(myfont.woff)');
//     // wait for font to be loaded
//     await font.load();
//     // add font to document
//     document.fonts.add(font);
//     // enable font with CSS class
//     document.body.classList.add('fonts-loaded');
// }

font_size.addEventListener("input", function(argument) {

    console.log(this.value);
    myP.style.fontSize = this.value + "px";

});

select_font_style.onchange = function(argument) {

    if (this.value == "oblique") {

        console.log(this.value);
        myP.style.fontStyle = "oblique 0deg";
        oblique.value = 0;

    } else {

        myP.style.fontStyle = this.value;
        console.log(this.value);
    }

    font_style_vale = this.value;

}

oblique.oninput = function(argument) {

    if (font_style_vale == "oblique") {

        // console.log(this.value);

        myP.style.fontStyle = "oblique " + this.value + "deg";

        console.log(myP.style.fontStyle);

    }
}

font_weight.oninput = function(argument) {

    console.log(this.value);
    myP.style.fontWeight = this.value;
}