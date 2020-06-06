   var slideIndex = 1;
   var colori = 0;
   var caja = document.getElementById('caja');
   var color = ["#483D8B", "#556B2F", "#00FF00", "#A9A9A9", "#FF1493", "#ADFF2F", "#808000"];
   showDivs(slideIndex);

   function plusDivs(n) {

       showDivs(slideIndex += n);
       console.log('plusDivs');
       console.log(slideIndex);
       console.log('================');

   }

   function showDivs(n) {
       console.log('showDivs');
       console.log(slideIndex);
       console.log('================');

       var i;
       var x = document.getElementsByClassName("mySlides");

       if (n > x.length) {
           slideIndex = 1
       }
       console.log('if (n > x.length) {slideIndex = 1}');
       console.log(slideIndex);
       console.log('================');
       if (n < 1) {
           slideIndex = x.length
       }
       console.log('if (n < 1) {slideIndex = x.length}');
       console.log(slideIndex);
       console.log('================');
       for (i = 0; i < x.length; i++) {
           console.log('	for (i = 0; i < x.length; i++) {');
           console.log(slideIndex);
           console.log('================');
           x[i].style.display = "none";

       }

       if (colori == color.length + 1) {
           colori = 0;
       }
       caja.setAttribute("style", "background:" + color[colori] + " ");
       x[slideIndex - 1].style.display = "block";
       console.log('x[slideIndex-1].style.display = "block";');
       console.log(slideIndex);
       console.log('================');
       colori++;
   }