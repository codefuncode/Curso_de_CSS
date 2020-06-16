 function cambiacolor(argument) {

     var btn = document.querySelectorAll('[type=range]');
     var rangecolor = document.getElementById('rangecolor');
     var resetear = document.getElementById('reset');
     rangecolor.style.backgroundColor = 'rgb(0,0,0)';

     resetear.onclick = function(argument) {

         for (var i = 0; i < btn.length; i++) {
             btn[i].value = '0';
             rangecolor.style.backgroundColor = 'rgb(0,0,0)';
         }
     }

     // rangecolor.style.backgroundColor = 'rgb(227,227,227)';

     for (var i = 0; i < btn.length; i++) {
         btn[i].value = '0';
     }

     for (var i = 0; i < btn.length; i++) {

         console.log(btn[i]);
     }

     for (var i = 0; i < btn.length; i++) {

         btn[i].oninput = function(argument) {

             // console.log(this.value);

             var uno = btn[0].value;
             var dos = btn[1].value;
             var tres = btn[2].value;
             console.log('=====================');
             console.log(btn[0].value);
             console.log(btn[1].value);
             console.log(btn[2].value);
             console.log('=====================');
             rangecolor.style.backgroundColor = 'rgb(' + uno + ',' + dos + ',' + tres + ')';

         }
     }

 }

 cambiacolor();