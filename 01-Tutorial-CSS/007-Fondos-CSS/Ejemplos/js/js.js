function colorfondo() {

    var cuadro = document.getElementsByClassName('cuadro');
    var btn = document.getElementById('boton');
    btn.value = 10;
    console.log(cuadro[0]);
    console.log(btn);

    btn.oninput = function(argument) {
        // console.log(btn.value);
        var n = (btn.value / 10);
        console.log(n);
        cuadro[0].style.opacity = n;

    }

}
colorfondo();

function imagenfondo(argument) {
    // body... 
}