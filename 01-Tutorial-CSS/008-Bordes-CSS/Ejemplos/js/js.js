var ejemplo = document.getElementById('ejemplo');
var opcion = document.querySelectorAll('#myDropdown span');
var seleccion = document.querySelector('.elementoscontrol select');
var inputrange = document.querySelector('.btnrange input');
var numericinput = document.querySelector('[type="number"]');
console.log(numericinput);
var tipoborde;
var usodeinput = false;
inputrange.value = 0;
// console.log(inputrange);
seleccion.value = "none";
ejemplo.style.display = "";
ejemplo.style.borderStyle = 'none';
// ejemplo.style.border = "1px solid black";
ejemplo.style.boxShadow = "none";
ejemplo.style.width = "100%";
ejemplo.style.height = "90%";

// for (var i = 0; i < opcion.length; i++) {

//     if (i == 1 || i == 3) {

//         opcion[i].style.margin = "0px 0px 10px 30px";

//     } else {

//         opcion[i].style.margin = "0px 0px 10px 0px";
//     }

//     if (i == 0) {

//         opcion[i].addEventListener('click', muestraelemento);

//     } else if (i == 1) {

//     } else if (i == 2) {

//     }

// }
// var contador = 0;

seleccion.addEventListener("change", function(argument) {

    ejemplo.style.borderStyle = this.value;
    tipoborde = this.value;

    if (usodeinput) {

        ejemplo.style.borderStyle = tipoborde;
        ejemplo.style.borderWidth = "" + ancho + "px";
        ejemplo.style.borderColor = "black";

    } else {

        ejemplo.style.borderStyle = tipoborde;
        ejemplo.style.borderWidth = "1px";
        ejemplo.style.borderColor = "black";
    }

});
inputrange.addEventListener("input", function(argument) {

    numericinput.value = this.value;
    ancho = this.value;
    ejemplo.style.borderStyle = tipoborde;
    ejemplo.style.borderWidth = "" + ancho + "px";
    ejemplo.style.borderColor = "black";
    usodeinput = true;
    console.log(this.value);
});

numericinput.addEventListener("input", function(argument) {

    inputrange.value = this.value;
    ancho = this.value;
    ejemplo.style.borderStyle = tipoborde;
    ejemplo.style.borderWidth = "" + ancho + "px";
    ejemplo.style.borderColor = "black";
    usodeinput = true;
    console.log(this.value);
});

// function muestraelemento(argument) {
//     ejemplo.style.display = "";
//     ejemplo.style.borderStyle = 'none';
//     // ejemplo.style.border = "1px solid black";
//     ejemplo.style.boxShadow = "none";
//     ejemplo.style.width = "100%";
//     ejemplo.style.height = "90%";
// }

// ====================================================================

// var dropdowns = document.getElementsByClassName("dropdown-content");
// var myDropdown = document.getElementById("myDropdown");

// function closeFunction() {

//     myDropdown.classList.toggle("show");
// }

// window.onclick = function(event) {

//     if (!event.target.matches('.dropbtn')) {

//         for (var i = 0; i < dropdowns.length; i++) {

//             var openDropdown = dropdowns[i];

//             if (openDropdown.classList.contains('show')) {

//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }