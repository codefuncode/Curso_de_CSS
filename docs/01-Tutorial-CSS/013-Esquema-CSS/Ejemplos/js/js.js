var btnrange =
    document.querySelectorAll(
        '[type="range"]'
    );

var elemento =
    document.querySelectorAll(
        ".pantalla div"
    );

var boton =
    document.querySelectorAll(
        '[type="button"]'
    );

var tborde =
    document.querySelectorAll(
        '[name="tborde"]'
    );
var chechbox = document.querySelectorAll('[type="checkbox"]');

for (var i = 0; i < chechbox.length; i++) {
    console.log(chechbox[i]);
    // chechbox[i].style.backgroundColor = "red";

}

var acciones =
    [
        "Alto",
        "Ancho",
        "Relleno",
        "Margen",
        "Borde",
        "Esquema"
    ];

var accion;

for (var i = 0; i < btnrange.length; i++) {

    btnrange[i].value = 0;
    elemento[0]
        .style.height = btnrange[0].value + "%";
    // btnrange[i].setAttribute("min", "0;");
    // btnrange[i].setAttribute("max", "100000;");

    btnrange[i].addEventListener(
        "input",
        aplicavalores
    );
}

for (var i = 0; i < boton.length; i++) {

    boton[i].addEventListener(
        "click",
        palicapropiedad
    );

}

for (var i = 0; i < tborde.length; i++) {

    tborde[0].value = "Tipo de borde";
}

tborde[0].addEventListener(
    "change",
    aplicatipodeborde);

function aplicatipodeborde(argument) {

    console.log(tborde[0].value);

    if (accion == acciones[5]) {

        elemento[0].style.outlineStyle = tborde[0].value;

    } else if (accion == acciones[4]) {

        elemento[0].style.borderStyle = tborde[0].value;
    }

}

function aplicavalores(argument) {

    if (accion == acciones[0]) {

        elemento[0]
            .style.height = btnrange[0].value + "%";

    } else if (accion == acciones[1]) {

        elemento[0]
            .style.width = btnrange[0].value + "%";

    } else if (accion == acciones[2]) {

        elemento[0]
            .style.paddingTop = btnrange[0].value + "px";
        elemento[0]
            .style.paddingRight = btnrange[1].value + "px";
        elemento[0]
            .style.paddingBottom = btnrange[2].value + "px";
        elemento[0]
            .style.paddingLeft = btnrange[3].value + "px";

    } else if (accion == acciones[3]) {

        elemento[0]
            .style.marginTop = btnrange[0].value + "px";
        elemento[0]
            .style.marginRight = btnrange[1].value + "px";
        elemento[0]
            .style.marginBottom = btnrange[2].value + "px";
        elemento[0]
            .style.marginLeft = btnrange[3].value + "px";

    } else if (accion == acciones[4]) {

        if (chechbox[0].checked) {

            for (var i = 0; i < btnrange.length; i++) {
                btnrange[i].value = this.value;
            }
            elemento[0]
                .style.borderColor = "black";
            // elemento[0]
            //     .style.borderStyle = "solid";
            elemento[0]
                .style.borderTopWidth = btnrange[0].value + "px";
            elemento[0]
                .style.borderRightWidth = btnrange[1].value + "px";
            elemento[0]
                .style.borderBottomWidth = btnrange[2].value + "px";
            elemento[0]
                .style.borderLeftWidth = btnrange[3].value + "px";

        } else {
            elemento[0]
                .style.borderColor = "black";
            // elemento[0]
            //     .style.borderStyle = "solid";
            elemento[0]
                .style.borderTopWidth = btnrange[0].value + "px";
            elemento[0]
                .style.borderRightWidth = btnrange[1].value + "px";
            elemento[0]
                .style.borderBottomWidth = btnrange[2].value + "px";
            elemento[0]
                .style.borderLeftWidth = btnrange[3].value + "px";
        }

    } else if (accion == acciones[5]) {

        elemento[0].style.outlineWidth = btnrange[0].value + "px";
        elemento[0].style.outlineOffset = btnrange[1].value + "px";
        // elemento[0].style.outlineStyle = "solid";
        elemento[0].style.outlineColor = "red";

        // elemento[0].style.outline = "width style color|initial|inherit";

        //  outline
        // outlineColor
        // outlineOffset
        // outlineStyle
        // outlineWidth
    }
}

function palicapropiedad(argument) {

    // console.log(this.value);

    for (var i = 0; i < boton.length; i++) {

        accion = this.value;

        if (boton[i].value == this.value) {

            boton[i]
                .style.backgroundColor = "green";

            boton[i]
                .style.color = "white";

            if (accion == "Borde") {

                chechbox[0].style.outline = "green solid 5px";
                boton[4].style.outline = "green solid 3px";

            } else {

                chechbox[0].style.outline = "gray solid 5px";
                boton[4].style.outline = "gray solid 3px";
            }

        } else {

            boton[i].style.backgroundColor = "#E8E8E7";

            boton[i].style.color = "black";
        }

    }

}

// class User {
//     constructor(firstName, lastName, emailId, age) {

//     }

//     set firstName(firstName) {
//         this._firstName = firstName;

//     }

//     get firstName() {
//         return this._firstName;
//     }

//     set lastName(lastName) {
//         this._lastName = lastName;
//     }

//     get lastName() {
//         return this._lastName;
//     }

//     set emailId(emailId) {
//         this._emailId = emailId;
//     }

//     get emailId() {
//         return this._emailId;
//     }

//     set age(age) {
//         this._age = age;
//     }

//     get age() {
//         return this._age;
//     }
// }