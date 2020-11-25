var select = document.querySelectorAll('select');
var controles = document.querySelectorAll('.controles>div');
var input_radio = document.querySelectorAll('[type="radio"]');

for (var i = 0; i < input_radio.length; i++) {

    input_radio[i].addEventListener('input', function(argument) {

        console.log(this.value);
    })
}
console.log('===========select=============')
console.log(select.length);
console.log('===========controles=============')
console.log(controles.length);
console.log('===========type="radio"=============')
console.log(input_radio.length);
console.log('========================')

for (var i = 0; i < controles.length; i++) {

    // console.log(controles[i]);
}

for (var i = 0; i < select.length; i++) {

    select[i].value = "";
    // console.log(i);

    for (var j = 0; j < select[i].children.length; j++) {

        // console.log('============================');

        // console.log(select[i].children[j]);

        select[i].children[j].value = select[i].children[j].textContent.trim();

        // console.log(select[i].children[j].textContent.trim());
    }

}

for (var i = 0; i < select.length; i++) {

    select[i].addEventListener('input', function(argument) {

        // console.log('=============');
        console.log(this);
        console.log(this.value);
        // console.log('=============');
    });
}

// console.log(select[0].children);
// console.log(select[0].children.length);
// console.log(select[0].children[0]);
// console.log(select[0].children[1]);
// console.log(select[0].children[2]);
// console.log(select[0].children[3]);
// console.log(select[0].children[4]);
// console.log(select[0].children[5]);
// console.log(select[0].children[6]);
// console.log(select[1].children);
// console.log(select[2].children);