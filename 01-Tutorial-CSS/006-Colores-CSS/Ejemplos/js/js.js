 function rgbcambiacolor(argument) {

     // ===================================================================
     //  botones 
     var rgbbtn = document.querySelectorAll('.rgbboton [type=range]');
     var hexboton = document.querySelectorAll('.hexboton [type=range]');
     // var rgbbtn = document.querySelectorAll('.rgbbotone [type=range]');
     // ===================================================================

     // ===================================================================
     //  cajas para mostrar colores 
     var rgbbgcolor = document.getElementById('rgbbgcolor');
     var rgbbordercolor = document.getElementById('rgbbordercolor');
     var rgbtextcolor = document.getElementById('rgbtextcolor');
     // ----------------------------------------------------------
     var hexbgcolor = document.getElementById('hexbgcolor');
     var hexbordercolor = document.getElementById('hexbordercolor');
     var hextextcolor = document.getElementById('hextextcolor');
     // ===================================================================

     // ===================================================================

     var resetear = document.getElementsByClassName('reset');

     // ===================================================================
     //  textos para desplegar valores 
     var rgbxtxtbg = document.querySelectorAll("#rgbbgcolor span");
     var rgbxtxtborder = document.querySelectorAll("#rgbbordercolor span");
     var rgbxtxtxt = document.querySelectorAll("#rgbtextcolor span");

     var hextextbgcolor = document.querySelectorAll("#hexbgcolor span");
     var hextextbordercolor = document.querySelectorAll("#hexbordercolor span");
     var hextexttextcolor = document.querySelectorAll("#hextextcolor span");
     // ===================================================================

     // ===============================================================
     //  Estado inicial de todos los elementos 
     for (var i = 0; i < rgbbtn.length; i++) {

         rgbbtn[i].value = '0';
         rgbbgcolor.style.backgroundColor = 'rgb(0,0,0)';
         rgbbordercolor.style.border = "10px solid rgb(0,0,0)";
         rgbtextcolor.style.color = "rgb(0,0,0)";

     }
     for (var i = 0; i < rgbxtxtbg.length; i++) {

         if (i == 0) {
             rgbxtxtbg[i].innerHTML = 'Colores';
             rgbxtxtborder[i].innerHTML = "Colores";
             rgbxtxtxt[i].innerHTML = 'Colores';
         } else if (i == 1) {
             rgbxtxtbg[i].innerHTML = '';
             rgbxtxtborder[i].innerHTML = "";
             rgbxtxtxt[i].innerHTML = '';
         } else if (i == 2) {
             rgbxtxtbg[i].innerHTML = 'RGB';
             rgbxtxtborder[i].innerHTML = "RGB";
             rgbxtxtxt[i].innerHTML = 'RGB';
         }

     }
     for (var i = 0; i < hexboton.length; i++) {
         hexboton[i].value = '0';
         hexbgcolor.style.backgroundColor = '#000000';
         hexbordercolor.style.border = "10px solid #000000";
         hextextcolor.style.color = "#000000";
     }
     for (var i = 0; i < hextextbgcolor.length; i++) {

         if (i == 0) {
             hextextbgcolor[i].innerHTML = 'Colores';
             hextextbordercolor[i].innerHTML = "Colores";
             hextexttextcolor[i].innerHTML = 'Colores';
         } else if (i == 1) {
             hextextbgcolor[i].innerHTML = '';
             hextextbordercolor[i].innerHTML = "";
             hextexttextcolor[i].innerHTML = '';
         } else if (i == 2) {
             hextextbgcolor[i].innerHTML = 'HEXA';
             hextextbordercolor[i].innerHTML = "HEXA";
             hextexttextcolor[i].innerHTML = 'HEXA';
         }

     }
     // ===============================================================

     // =======================================================
     //  reset
     resetear[0].onclick = function(argument) {

         for (var i = 0; i < rgbbtn.length; i++) {
             rgbbtn[i].value = '0';
             rgbbgcolor.style.backgroundColor = 'rgb(0,0,0)';
             rgbbordercolor.style.border = "10px solid rgb(0,0,0)";
             rgbtextcolor.style.color = "rgb(0,0,0)";
         }
         for (var i = 0; i < rgbxtxtbg.length; i++) {

             if (i == 0) {
                 rgbxtxtbg[i].innerHTML = 'Colores';
                 rgbxtxtborder[i].innerHTML = "Colores";
                 rgbxtxtxt[i].innerHTML = 'Colores';
             } else if (i == 1) {
                 rgbxtxtbg[i].innerHTML = '';
                 rgbxtxtborder[i].innerHTML = "";
                 rgbxtxtxt[i].innerHTML = '';
             } else if (i == 2) {
                 rgbxtxtbg[i].innerHTML = 'RGB';
                 rgbxtxtborder[i].innerHTML = "RGB";
                 rgbxtxtxt[i].innerHTML = 'RGB';
             }

         }

     }
     resetear[1].onclick = function(argument) {

         for (var i = 0; i < hexboton.length; i++) {
             hexboton[i].value = '0';
             hexbgcolor.style.backgroundColor = '#000000';
             hexbordercolor.style.border = "10px solid #000000";
             hextextcolor.style.color = "#000000";
         }
         for (var i = 0; i < hextextbgcolor.length; i++) {

             if (i == 0) {
                 hextextbgcolor[i].innerHTML = 'Colores';
                 hextextbordercolor[i].innerHTML = "Colores";
                 hextexttextcolor[i].innerHTML = 'Colores';
             } else if (i == 1) {
                 hextextbgcolor[i].innerHTML = '';
                 hextextbordercolor[i].innerHTML = "";
                 hextexttextcolor[i].innerHTML = '';
             } else if (i == 2) {
                 hextextbgcolor[i].innerHTML = 'HEXA';
                 hextextbordercolor[i].innerHTML = "HEXA";
                 hextexttextcolor[i].innerHTML = 'HEXA';
             }

         }
     }
     // =======================================================

     // =========================================================
     //  Evenotas para los botones 
     for (var i = 0; i < 3; i++) {

         rgbbtn[i].oninput = function(argument) {

             // console.log(this.value);

             var uno = rgbbtn[0].value;
             var dos = rgbbtn[1].value;
             var tres = rgbbtn[2].value;

             rgbbgcolor.style.backgroundColor = 'rgb(' + uno + ',' + dos + ',' + tres + ')';
             rgbbordercolor.style.border = "10px solid" + ' rgb(' + uno + ',' + dos + ',' + tres + ')';
             rgbtextcolor.style.color = 'rgb(' + uno + ',' + dos + ',' + tres + ')';

             for (var i = 0; i < rgbxtxtbg.length; i++) {

                 var rgbnumbercolor;

                 if (i == 0) {

                     rgbnumbercolor = uno;

                 } else if (i == 1) {

                     rgbnumbercolor = dos;

                 } else if (i == 2) {

                     rgbnumbercolor = tres;
                 }
                 rgbxtxtbg[i].innerHTML = rgbnumbercolor;
                 rgbxtxtborder[i].innerHTML = rgbnumbercolor;
                 rgbxtxtxt[i].innerHTML = rgbnumbercolor;

             }

         }
         hexboton[i].oninput = function(argument) {

             var uno = toHex(hexboton[0].value);
             var dos = toHex(hexboton[1].value);
             var tres = toHex(hexboton[2].value);

             if (uno.length == 1) {
                 uno = "0" + uno;
             }
             if (dos.length == 1) {
                 dos = "0" + dos;
             }
             if (tres.length == 1) {
                 tres = "0" + tres;
             }

             var color = "#" + uno + dos + tres;

             hexbgcolor.style.backgroundColor = color;
             hexbordercolor.style.border = '10px solid' + ' ' + color;
             hextextcolor.style.color = color;
             console.log(color);

             for (var i = 0; i < 3; i++) {

                 var rgbnumbercolor;

                 if (i == 0) {

                     rgbnumbercolor = uno;

                 } else if (i == 1) {

                     rgbnumbercolor = dos;

                 } else if (i == 2) {

                     rgbnumbercolor = tres;
                 }
                 hextextbgcolor[i].innerHTML = rgbnumbercolor;
                 hextextbordercolor[i].innerHTML = rgbnumbercolor;
                 hextexttextcolor[i].innerHTML = rgbnumbercolor;

             }
         }
     }
     // =========================================================
     // Funcion  para comvertir numeros a decimales 
     function toHex(d) {
         var r = d % 16;
         if (d - r == 0) {
             return toChar(r);
         }
         return toHex((d - r) / 16) + toChar(r);
     }

     function toChar(n) {
         const alpha = "0123456789ABCDEF";
         return alpha.charAt(n);
     }
     // ==========================================================

 }

 rgbcambiacolor();

 //==================================================
 // function toHex(d) {
 //     var r = d % 16;
 //     if (d - r == 0) {
 //         return toChar(r);
 //     }
 //     return toHex((d - r) / 16) + toChar(r);
 // }

 // function toChar(n) {
 //     const alpha = "0123456789ABCDEF";
 //     return alpha.charAt(n);
 // }

 // console.log(toHex(255));
 //  referencias 
 // https://en.wikipedia.org/wiki/Hexadecimal
 //==================================================