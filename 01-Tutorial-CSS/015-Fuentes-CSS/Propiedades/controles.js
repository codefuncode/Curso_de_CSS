var funcion_Control = [];

funcion_Control[0] =
    function(index, select, checkbox, text, radio) {

        for (var i = 0; i < text.length; i++) {
            text[i].value = "";
        }

        // checkbox[0].checked = true;

        text[0].setAttribute("placeholder", "Escribe el nombre de la fuente");
        trabaja_fontface(index, select);

        for (var i = 0; i < text.length; i++) {

            text[i].addEventListener("input", function(argument) {

                if (this == text[0]) {

                    _pantalla.childNodes[1].innerHTML =
                        "font-family : " + this.value + ";";

                } else if (this == text[1]) {

                    if (select[1].value == "url") {

                        _pantalla.childNodes[2].innerHTML =
                            "src : url (" + this.value + ");";

                    } else if (select[1].value == "local") {

                        _pantalla.childNodes[2].innerHTML =
                            "src : local (" + this.value + ");";
                    }

                }
            })

        }

        for (var i = 0; i < select.length; i++) {

            select[i].addEventListener("input", function(argument) {

                if (this == select[0]) {

                    console.log("ok");

                } else if (this == select[1]) {

                    if (this.value == "url") {

                        text[1].setAttribute(
                            "placeholder",
                            "Escribe la " + this.value + " externa en esta caja"
                        );

                    } else if (this.value == "local") {

                        text[1].setAttribute(
                            "placeholder",
                            "Escribe la url " + this.value + " en esta caja");
                    }

                } else if (this == select[2]) {

                    _pantalla.childNodes[3].innerHTML =
                        "font-display : " + this.value + ";";

                } else if (this == select[3]) {

                    _pantalla.childNodes[4].innerHTML =
                        "font-stretch : " + this.value + ";";

                } else if (this == select[4]) {

                    _pantalla.childNodes[5].innerHTML =
                        "font-style : " + this.value + ";";

                } else if (this == select[5]) {

                    _pantalla.childNodes[6].innerHTML =
                        "font-weight : " + this.value + ";";
                }

                // console.log(this.value);
            });

        }

    };

funcion_Control[1] =
    function(index, select, checkbox, text, radio) {

        // console.log(index);
    };

funcion_Control[2] =
    function(index, select, checkbox, text, radio) {

        // console.log(index);
    };

funcion_Control[3] =
    function(index, select, checkbox, text, radio) {

        // console.log(index);
    };
funcion_Control[4] =
    function(index, select, checkbox, text, radio) {

        // console.log(index);
    };
funcion_Control[5] =
    function(index, select, checkbox, text, radio) {

        // console.log(index);
    };
funcion_Control[6] =
    function(index, select, checkbox, text, radio) {

        // console.log(index);
    };
funcion_Control[7] =
    function(index, select, checkbox, text, radio) {

        // console.log(index);
    };
funcion_Control[8] =
    function(index, select, checkbox, text, radio) {

        // console.log(index);
    };
funcion_Control[9] =
    function(index, select, checkbox, text, radio) {

        // console.log(index);
    };
funcion_Control[10] =
    function(index, select, checkbox, text, radio) {

        // console.log(index);
    };
funcion_Control[11] =
    function(index, select, checkbox, text, radio) {

        // console.log(index);
    };
funcion_Control[12] =
    function(index, select, checkbox, text, radio) {

        // console.log(index);
    };
funcion_Control[13] =
    function(index, select, checkbox, text, radio) {

        // console.log(index);
    };
funcion_Control[14] =
    function(index, select, checkbox, text, radio) {

        // console.log(index);
    };
funcion_Control[15] =
    function(index, select, checkbox, text, radio) {

        // console.log(index);
    };
funcion_Control[16] =
    function(index, select, checkbox, text, radio) {

        // console.log(index);
    };
funcion_Control[17] =
    function(index, select, checkbox, text, radio) {

        // console.log(index);
    };
funcion_Control[18] =
    function(index, select, checkbox, text, radio) {

        // console.log(index);
    };
funcion_Control[19] =
    function(index, select, checkbox, text, radio) {

        // console.log(index);
    };
funcion_Control[20] =
    function(index, select, checkbox, text, radio) {

        // console.log(index);
    };
funcion_Control[21] =
    function(index, select, checkbox, text, radio) {

        // console.log(index);
    };
funcion_Control[22] =
    function(index, select, checkbox, text, radio) {

        // console.log(index);
    };
funcion_Control[23] =
    function(index, select, checkbox, text, radio) {

        // console.log(index);
    };
funcion_Control[24] =
    function(index, select, checkbox, text, radio) {

        // console.log(index);
    };
funcion_Control[25] =
    function(index, select, checkbox, text, radio) {

        // console.log(index);
    };
funcion_Control[26] =
    function(index, select, checkbox, text, radio) {

        // console.log(index);
    };
funcion_Control[27] =
    function(index, select, checkbox, text, radio) {

        // console.log(index);
    };
funcion_Control[28] =
    function(index, select, checkbox, text, radio) {

        // console.log(index);
    };
funcion_Control[29] =
    function(index, select, checkbox, text, radio) {

        // console.log(index);
    };
funcion_Control[30] =
    function(index, select, checkbox, text, radio) {

        // console.log(index);
    };