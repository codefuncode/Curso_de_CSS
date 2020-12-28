 function comportaminetoTexto(indice, select) {

     comportaminento[indice](indice, select);

 }

 comportaminento = []
 comportaminento[0] = function(indice, select) {
     console.log(" comportaminento Para el indice " + indice);

     trabaja_fontface(indice, select);

 }
 comportaminento[1] = function(indice) {
     console.log(" comportaminento Para el indice " + indice);
 }
 comportaminento[2] = function(indice) {
     console.log(" comportaminento Para el indice " + indice);
 }
 comportaminento[3] = function(indice) {
     console.log(" comportaminento Para el indice " + indice);
 }
 comportaminento[4] = function(indice) {
     console.log(" comportaminento Para el indice " + indice);
 }
 comportaminento[5] = function(indice) {
     console.log(" comportaminento Para el indice " + indice);
 }
 comportaminento[6] = function(indice) {
     console.log(" comportaminento Para el indice " + indice);
 }
 comportaminento[7] = function(indice) {
     console.log(" comportaminento Para el indice " + indice);
 }
 comportaminento[8] = function(indice) {
     console.log(" comportaminento Para el indice " + indice);
 }
 comportaminento[9] = function(indice) {
     console.log(" comportaminento Para el indice " + indice);
 }
 comportaminento[10] = function(indice) {
     console.log(" comportaminento Para el indice " + indice);
 }
 comportaminento[11] = function(indice) {
     console.log(" comportaminento Para el indice " + indice);
 }
 comportaminento[12] = function(indice) {
     console.log(" comportaminento Para el indice " + indice);
 }
 // comportaminento[0] = function(indice) {
 //     console.log(" comportaminento Para el indice " + indice);
 // }
 // comportaminento[0] = function(indice) {
 //     console.log(" comportaminento Para el indice " + indice);
 // }
 // comportaminento[0] = function(indice) {
 //     console.log(" comportaminento Para el indice " + indice);
 // }
 // comportaminento[0] = function(indice) {
 //     console.log(" comportaminento Para el indice " + indice);
 // }
 // comportaminento[0] = function(indice) {
 //     console.log(" comportaminento Para el indice " + indice);
 // }
 // comportaminento[0] = function(indice) {
 //     console.log(" comportaminento Para el indice " + indice);
 // }
 // comportaminento[0] = function(indice) {
 //     console.log(" comportaminento Para el indice " + indice);
 // }
 // comportaminento[0] = function(indice) {
 //     console.log(" comportaminento Para el indice " + indice);
 // }
 // comportaminento[0] = function(indice) {
 //     console.log(" comportaminento Para el indice " + indice);
 // }
 // comportaminento[0] = function(indice) {
 //     console.log(" comportaminento Para el indice " + indice);
 // }
 // comportaminento[0] = function(indice) {
 //     console.log(" comportaminento Para el indice " + indice);
 // }
 // comportaminento[0] = function(indice) {
 //     console.log(" comportaminento Para el indice " + indice);
 // }
 // comportaminento[0] = function(indice) {
 //     console.log(" comportaminento Para el indice " + indice);
 // }
 // comportaminento[0] = function(indice) {
 //     console.log(" comportaminento Para el indice " + indice);
 // }
 // comportaminento[0] = function(indice) {
 //     console.log(" comportaminento Para el indice " + indice);
 // }
 // comportaminento[0] = function(indice) {
 //     console.log(" comportaminento Para el indice " + indice);
 // }
 // comportaminento[0] = function(indice) {
 //     console.log(" comportaminento Para el indice " + indice);
 // }
 // comportaminento[0] = function(indice) {
 //     console.log(" comportaminento Para el indice " + indice);
 // }

 function trabaja_fontface(indice, select) {

     // ======================
     //  Borrara los nodos de párrafos si es que los hay 
     borra_nodos();

     // ======================

     var elementos = [];

     for (var i = 0; i <= select[indice].length; i++) {

         elementos.push(crea_elemento("p"));
     }
     // console.log(elementos.length);
     for (let i = 0; i < elementos.length; i++) {

         if (i == 0) {

             elementos[i].innerHTML = "@font-face {";

         } else if (i == elementos.length - 1) {

             elementos[i].innerHTML = "}";

         } else {

             elementos[i].style.marginLeft = "75px";

         }

         _pantalla.appendChild(elementos[i]);
     }

     // ===================================================
     //  Escribe lo que hay en las opciones seleccionadas del primer 
     //  select  dentro de los párrafos previamente generados 
     for (var i = 0; i < select[indice].length; i++) {
         if (i == 0) {} else {

             elementos[i].innerHTML = select[indice][i].value + " :";
         }
     }
     // ===================================================

 }