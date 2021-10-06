var menu = document.querySelectorAll('.menu a');

var display = document.querySelectorAll('.display > div');

for (var i = 0; i < menu.length; i++) {

    menu[i].setAttribute("href", "");
    menu[i].setAttribute("target", "");

    menu[i].addEventListener("click", function(e) {

        e.preventDefault()
        let index = menu.indexOf(this);

        muestracaja(index);

    });
}

function muestracaja(argument) {

    for (var i = 0; i < display.length; i++) {

        if (argument == i) {

            display[i].style.display = "";
            console.log(i);
            // display[i].innerHTML = "Hola" + i;

        } else {

            display[i].style.display = "none";
        }

    }
}
// for (var i = 0; i < display.length; i++) {
//     // display[i]
// }

console.log(menu);
console.log(display);