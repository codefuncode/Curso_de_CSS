 function rgbcambiacolor(argument) {

     // ===================================================================
     //  botones 
     // ----------------------------------------------------------------
     // Boton  RGB
     var rgbbtn =
         document.querySelectorAll('.rgbboton [type=range]');
     // ----------------------------------------------------------------
     // Boton hexadecimal
     var hexboton =
         document.querySelectorAll('.hexboton [type=range]');
     // ----------------------------------------------------------------
     // Boton GRBA
     var rgbaboton =
         document.querySelectorAll('.rgbaboton [type=range]');
     // ----------------------------------------------------------------
     // var rgbbtn = document.querySelectorAll('.rgbbotone [type=range]');
     // ===================================================================

     // ===================================================================
     //  cajas para mostrar colores 
     // =========================================================
     // Cajas para el RGB
     var rgbbgcolor =
         document.getElementById('rgbbgcolor');
     var rgbbordercolor =
         document.getElementById('rgbbordercolor');
     var rgbtextcolor =
         document.getElementById('rgbtextcolor');
     // =========================================================
     // ----------------------------------------------------------
     // ===========================================================
     // Cajas Para el Hexadecimal
     var hexbgcolor =
         document.getElementById('hexbgcolor');
     var hexbordercolor =
         document.getElementById('hexbordercolor');
     var hextextcolor =
         document.getElementById('hextextcolor');
     // ===========================================================
     // --------------------------------------------------------
     // ========================================================
     // Cajas para el RGBA
     var rgbabgcolor =
         document.getElementById('rgbabgcolor');
     var rgbabordercolor =
         document.getElementById('rgbabordercolor');
     var rgbatextcolor =
         document.getElementById('rgbatextcolor');
     // ========================================================
     // ===================================================================

     // ===================================================================

     var resetear =
         document.getElementsByClassName('reset');

     // ===================================================================
     //  textos para desplegar valores 
     //==================================================================
     var rgbxtxtbg =
         document.querySelectorAll("#rgbbgcolor span");
     var rgbxtxtborder =
         document.querySelectorAll("#rgbbordercolor span");
     var rgbxtxtxt =
         document.querySelectorAll("#rgbtextcolor span");
     //==================================================================
     // -----------------------------------------------------------------
     // ================================================================
     var hextextbgcolor =
         document.querySelectorAll("#hexbgcolor span");
     var hextextbordercolor =
         document.querySelectorAll("#hexbordercolor span");
     var hextexttextcolor =
         document.querySelectorAll("#hextextcolor span");
     // ===================================================================
     // -------------------------------------------------------------------
     // ==================================================================
     var rgbabgcolortext =
         document.querySelectorAll("#rgbabgcolor span");
     var rgbabordercolortext =
         document.querySelectorAll("#rgbabordercolor span");
     var rgbatextcolortext =
         document.querySelectorAll("#rgbatextcolor span");
     // ==================================================================
     // ===============================================================
     //  Estado inicial de todos los elementos 
     // ==========================================
     // Boton RGB
     for (var i = 0; i < 3; i++) {

         rgbbtn[i].value = '0';

     }
     // Valores iniciales delas cajas 
     rgbbgcolor.style.backgroundColor =
         'rgb(0,0,0)';
     rgbbordercolor.style.border =
         "10px solid rgb(0,0,0)";
     rgbtextcolor.style.color =
         "rgb(0,0,0)";

     //  Textos iniciales de las  cajas 
     for (var i = 0; i < 3; i++) {

         if (i == 0) {

             rgbxtxtbg[i].innerHTML =
                 'Colores';
             rgbxtxtborder[i].innerHTML =
                 "Colores";
             rgbxtxtxt[i].innerHTML =
                 'Colores';

         } else if (i == 1) {

             rgbxtxtbg[i].innerHTML =
                 '';
             rgbxtxtborder[i].innerHTML =
                 "";
             rgbxtxtxt[i].innerHTML =
                 '';

         } else if (i == 2) {

             rgbxtxtbg[i].innerHTML =
                 'RGB';
             rgbxtxtborder[i].innerHTML =
                 "RGB";
             rgbxtxtxt[i].innerHTML =
                 'RGB';
         }

     }
     // ==========================================

     // ===============================================
     // Botonm Hexadecimal
     for (var i = 0; i < 3; i++) {
         hexboton[i].value = '0';
         hexbgcolor.style.backgroundColor = '#000000';
         hexbordercolor.style.border = "10px solid #000000";
         hextextcolor.style.color = "#000000";
     }
     for (var i = 0; i < 3; i++) {

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
     // ======================================================
     // boton RGBA
     for (var i = 0; i < 3; i++) {
         rgbaboton[i].value = '0';
         rgbabgcolor.style.backgroundColor = '#000000';
         rgbabordercolor.style.border = "10px solid #000000";
         rgbatextcolor.style.color = "#000000";
     }
     for (var i = 0; i < 4; i++) {

         if (i == 0) {
             rgbabgcolortext[i].innerHTML = 'Colores';
             rgbabordercolortext[i].innerHTML = "Colores";
             rgbatextcolortext[i].innerHTML = 'Colores';
         } else if (i == 1) {
             rgbabgcolortext[i].innerHTML = '';
             rgbabordercolortext[i].innerHTML = "";
             rgbatextcolortext[i].innerHTML = '';
         } else if (i == 2) {
             rgbabgcolortext[i].innerHTML = 'RGBA';
             rgbabordercolortext[i].innerHTML = "RGBA";
             rgbatextcolortext[i].innerHTML = 'RGBA';
         } else if (i == 3) {
             rgbabgcolortext[i].innerHTML = '';
             rgbabordercolortext[i].innerHTML = "";
             rgbatextcolortext[i].innerHTML = '';
         }

     }

     // ======================================================
     // ===============================================
     // ===============================================================

     // =======================================================
     //  reset
     // ===========================================
     //  Resereo para ERB
     // ==============================================
     // ===========================================
     // Reseteo para el boton RGB
     // ============================================
     resetear[0].onclick = function(argument) {

         rgbbgcolor.style.backgroundColor = 'rgb(0,0,0)';
         rgbbordercolor.style.border = "10px solid rgb(0,0,0)";
         rgbtextcolor.style.color = "rgb(0,0,0)";

         for (var i = 0; i < 3; i++) {

             rgbbtn[i].value = '0';

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
     // ===========================================
     // --------------------------------------------
     // ============================================
     // Reseteo para Hexadecimal 
     // ===========================================
     resetear[1].onclick = function(argument) {

         hexbgcolor.style.backgroundColor = '#000000';
         hexbordercolor.style.border = "10px solid #000000";
         hextextcolor.style.color = "#000000";

         for (var i = 0; i < 3; i++) {

             hexboton[i].value = '0';

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
     // ===========================================
     // -------------------------------------------
     // ============================================
     // Reseteo para RGBA
     // ===========================================
     resetear[2].onclick = function(argument) {

         rgbabgcolor.style.backgroundColor = '#000000';
         rgbabordercolor.style.border = "10px solid #000000";
         rgbatextcolor.style.color = "#000000";

         for (var i = 0; i < 4; i++) {

             rgbaboton[i].value = '0';

             if (i == 0) {

                 rgbabgcolortext[i].innerHTML = 'Colores';
                 rgbabordercolortext[i].innerHTML = "Colores";
                 rgbatextcolortext[i].innerHTML = 'Colores';

             } else if (i == 1) {

                 rgbabgcolortext[i].innerHTML = '';
                 rgbabordercolortext[i].innerHTML = "";
                 rgbatextcolortext[i].innerHTML = '';

             } else if (i == 2) {

                 rgbabgcolortext[i].innerHTML = 'RGBA';
                 rgbabordercolortext[i].innerHTML = "RGBA";
                 rgbatextcolortext[i].innerHTML = 'RGBA';

             } else if (i == 3) {

                 rgbabgcolortext[i].innerHTML = '';
                 rgbabordercolortext[i].innerHTML = "";
                 rgbatextcolortext[i].innerHTML = '';
             }

         }
     }

     // =========================================================
     //  Eventos para los botones 

     for (var i = 0; i < 3; i++) {

         rgbbtn[i].oninput = function(argument) {

             // console.log(this.value);

             var uno = rgbbtn[0].value;
             var dos = rgbbtn[1].value;
             var tres = rgbbtn[2].value;

             rgbbgcolor.style.backgroundColor =
                 'rgb(' + uno + ',' + dos + ',' + tres + ')';

             rgbbordercolor.style.border =
                 "10px solid" + ' rgb(' + uno + ',' + dos + ',' + tres + ')';

             rgbtextcolor.style.color =
                 'rgb(' + uno + ',' + dos + ',' + tres + ')';

             for (var i = 0; i < 3; i++) {

                 var rgbnumbercolor;

                 if (i == 0) {

                     rgbnumbercolor = uno;

                 } else if (i == 1) {

                     rgbnumbercolor = dos;

                 } else if (i == 2) {

                     rgbnumbercolor = tres;
                 }

                 rgbxtxtbg[i].innerHTML =
                     rgbnumbercolor;

                 rgbxtxtborder[i].innerHTML =
                     rgbnumbercolor;

                 rgbxtxtxt[i].innerHTML =
                     rgbnumbercolor;

             }

         }
         // =============================================
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

                 hextextbgcolor[i].innerHTML =
                     rgbnumbercolor;

                 hextextbordercolor[i].innerHTML =
                     rgbnumbercolor;

                 hextexttextcolor[i].innerHTML =
                     rgbnumbercolor;

             }
         }
         // ==============================================
         // Nota: Trabajando en la funcionalidad del RGBA
         // ==============================================

     }
     for (var i = 0; i < 4; i++) {

         rgbaboton[i].oninput = function(argument) {

             var uno =
                 rgbaboton[0].value;

             var dos =
                 rgbaboton[1].value;

             var tres =
                 rgbaboton[2].value;

             var cuatro =
                 rgbaboton[3].value;

             var cuatro =
                 parseFloat((cuatro / 10) * .1);

             var cuatro =
                 Number.parseFloat(cuatro).toFixed(1);

             console.log(
                 '====================='
             );
             console.log(
                 "uno = " + uno
             );
             console.log("dos = " + dos);
             console.log("tres = " + tres);
             console.log("cuatro = " + cuatro);
             console.log('=====================');

             for (var i = 0; i < 4; i++) {

                 var rgbnumbercolor;

                 if (i == 0) {

                     rgbnumbercolor = uno;

                 } else if (i == 1) {

                     rgbnumbercolor = dos;

                 } else if (i == 2) {

                     rgbnumbercolor = tres;

                 } else if (i == 3) {

                     rgbnumbercolor = cuatro;
                 }
                 rgbabgcolortext[i].innerHTML = rgbnumbercolor;
                 rgbabordercolortext[i].innerHTML = rgbnumbercolor;
                 rgbatextcolortext[i].innerHTML = rgbnumbercolor;

             }
             uno = uno + '%';
             dos = dos + '%';
             tres = tres + '%';

             var color = 'rgba(' + uno + ',' + dos + ',' + tres + ',' + cuatro + ')';

             console.log(color)

             rgbabgcolor.style.backgroundColor = color;
             rgbabordercolor.style.border = '10px solid' + ' ' + color;
             rgbatextcolor.style.color = color;

             //  rgbabgcolor.setAttribute("style", "color:red; border: 1px solid blue;");
             // rgbabordercolor.setAttribute("style", "color:red; border: 1px solid blue;");
             // rgbatextcolor.setAttribute("style", "color:red; border: 1px solid blue;");

             // var rgbabgcolortext = document.querySelectorAll("#rgbabgcolor span");
             // var rgbabordercolortext = document.querySelectorAll("#rgbabordercolor span");
             // var rgbatextcolortext = document.querySelectorAll("#rgbatextcolor span");

             // -----------------
             // rgba(255,0,0,0.3)
             // -----------------
         }
     }

     // Funcion  para comvertir numeros a decimales 
     // =========================================================
     // =========================================================

     function toHex(d) {

         var r = d % 16;

         if (d - r == 0) {

             return toChar(r);

         } else {

             return toHex((d - r) / 16) + toChar(r);
         }

     }

     function toChar(n) {

         const alpha = "0123456789ABCDEF";

         return alpha.charAt(n);
     }
     // =========================================================
     // =========================================================
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