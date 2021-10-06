var funcion_Control = [];

funcion_Control[0] =
    function(index, select, checkbox, text, radio, label) {

        var propiedades = {
            font_family: "",
            src: {
                url: "",
                local: ""
            },
            font_display: "",
            font_stretch: "",
            font_style: "",
            font_weight: "",
            font_variant: "",
            font_variant_alternates: "",
            font_variant_caps: "",
            font_variant_east_asian: "",
            font_variant_ligatures: "",
            font_variant_numeric: "",
        };
        var valores = [];

        cuentaControles(select, checkbox, text, radio, label);

        checkbox[0].disabled = true;

        for (var i = 0; i < text.length; i++) {

            text[i].value = "";
        }

        text[0].setAttribute(
            "placeholder",
            "Escribe el nombre de la fuente");

        for (var i = 0; i < checkbox.length; i++) {

            checkbox[i].addEventListener("input", function(e) {

                for (var i = 0; i < checkbox.length; i++) {

                    if (e.target == checkbox[i]) {
                        console.log(i);
                    }
                }

                console.log(this.checked);
                console.log(this);

            });

        }
        //  Eventos para cajas de texto
        for (var i = 0; i < text.length; i++) {

            text[i].addEventListener("input",
                function(argument) {

                    if (this == text[0]) {

                        propiedades.font_family =
                            "font-family : " + '"' + this.value + '"' + ";";
                        valores[0] = propiedades.font_family;

                        if (text[0].value == "") {

                            propiedades.font_family = "";
                            valores[0] = "";
                        }

                    } else if (this == text[1]) {

                        if (select[1].value == "url") {
                            propiedades.src.url = "src: url (" + this.value + ");";
                            valores[1] =
                                propiedades.src.url;

                            propiedades.src.local = "";

                        } else if (select[1].value == "local") {

                            propiedades.src.local = "src: local (" + this.value + ");";
                            valores[1] =
                                propiedades.src.local;
                            propiedades.src.url = "";

                        } else if (select[1].value == "") {

                            propiedades.src.url = "";

                            propiedades.src.local = "";

                            valores[1] = "";

                        }
                        if (text[1].value == "") {

                            propiedades.src.url = "";
                            propiedades.src.local = "";
                            valores[1] = "";
                        }
                    }

                    // muestra_valores(valores);
                    escribePropiedades(valores);
                })

        }

        for (var i = 0; i < select.length; i++) {

            select[i].addEventListener("input", function(argument) {

                if (this == select[0]) {

                } else if (this == select[1]) {

                    if (this.value == "url") {

                        text[1].setAttribute(
                            "placeholder",
                            "Escribe la " + this.value +
                            " externa en esta caja"
                        );

                    } else if (this.value == "local") {

                        text[1].setAttribute(
                            "placeholder",
                            "Escribe la url " + this.value +
                            " en esta caja");
                    }

                } else if (this == select[2]) {

                    propiedades.font_display = "font-display: " + this.value + ";";
                    valores[2] = propiedades.font_display;

                } else if (this == select[3]) {

                    propiedades.font_stretch = "font-stretch: " + this.value + ";";
                    valores[3] = propiedades.font_stretch;

                } else if (this == select[4]) {

                    propiedades.font_style = "font-style: " + this.value + ";";
                    valores[4] = propiedades.font_style;

                } else if (this == select[5]) {

                    propiedades.font_weight = "font-weight: " + this.value + ";";
                    valores[5] = propiedades.font_weight;

                } else if (
                    this == select[6] ||
                    this == select[7] ||
                    this == select[8] ||
                    this == select[9] ||
                    this == select[10] ||
                    this == select[11]
                ) {

                    if (this == select[6]) {

                    } else if (this == select[7]) {

                    } else if (this == select[8]) {

                    } else if (this == select[9]) {

                    } else if (this == select[10]) {

                    } else if (this == select[11]) {

                    }

                } else if (this == select[12]) {

                } else if (this == select[13]) {

                }

                if (this == select[6]) {

                    panel.style.display = "";

                    if (select[6].value == "") {

                        panel.style.display = "none";
                    }

                } else {
                    panel.style.display = "none";
                }
                // muestra_valores(valores);
                escribePropiedades(valores);
            });

        }

        // function muestra_valores(valores) {

        //     if (valores) {
        //         for (var i = 0; i < valores.length; i++) {
        //             if (valores[i] == null) {

        //                 valores[i] = "";
        //             }
        //         }
        //         console.log(valores);
        //     } else {

        //     }

        // }

        comportaminetoTexto(index, select, valores);
    };

funcion_Control[1] =
    function(index, select, checkbox, text, radio, label) {

        cuentaControles(select, checkbox, text, radio, label);
        comportaminetoTexto(index);
    };

funcion_Control[2] =
    function(index, select, checkbox, text, radio, label) {

        cuentaControles(select, checkbox, text, radio, label);
    };

funcion_Control[3] =
    function(index, select, checkbox, text, radio, label) {
        cuentaControles(select, checkbox, text, radio, label);
    };

funcion_Control[4] =
    function(index, select, checkbox, text, radio, label) {

        cuentaControles(select, checkbox, text, radio, label);
    };

funcion_Control[5] =
    function(index, select, checkbox, text, radio, label) {

        cuentaControles(select, checkbox, text, radio, label);
    };

funcion_Control[6] =
    function(index, select, checkbox, text, radio, label) {

        cuentaControles(select, checkbox, text, radio, label);
    };

funcion_Control[7] =
    function(index, select, checkbox, text, radio, label) {

        cuentaControles(select, checkbox, text, radio, label);
    };

funcion_Control[8] =
    function(index, select, checkbox, text, radio, label) {

        cuentaControles(select, checkbox, text, radio, label);
    };

funcion_Control[9] =
    function(index, select, checkbox, text, radio, label) {

        cuentaControles(select, checkbox, text, radio, label);
    };

funcion_Control[10] =
    function(index, select, checkbox, text, radio, label) {

        cuentaControles(select, checkbox, text, radio, label);
    };

funcion_Control[11] =
    function(index, select, checkbox, text, radio, label) {

        cuentaControles(select, checkbox, text, radio, label);
    };

funcion_Control[12] =
    function(index, select, checkbox, text, radio, label) {

        cuentaControles(select, checkbox, text, radio, label);
    };

funcion_Control[13] =
    function(index, select, checkbox, text, radio, label) {

        cuentaControles(select, checkbox, text, radio, label);
    };

funcion_Control[14] =
    function(index, select, checkbox, text, radio, label) {

        cuentaControles(select, checkbox, text, radio, label);
    };

funcion_Control[15] =
    function(index, select, checkbox, text, radio, label) {

        cuentaControles(select, checkbox, text, radio, label);
    };

funcion_Control[16] =
    function(index, select, checkbox, text, radio, label) {

        cuentaControles(select, checkbox, text, radio, label);
    };

funcion_Control[17] =
    function(index, select, checkbox, text, radio, label) {

        cuentaControles(select, checkbox, text, radio, label);
    };

funcion_Control[18] =
    function(index, select, checkbox, text, radio, label) {

        cuentaControles(select, checkbox, text, radio, label);
    };

funcion_Control[19] =
    function(index, select, checkbox, text, radio, label) {

        cuentaControles(select, checkbox, text, radio, label);
    };

funcion_Control[20] =
    function(index, select, checkbox, text, radio, label) {

        cuentaControles(select, checkbox, text, radio, label);
    };

funcion_Control[21] =
    function(index, select, checkbox, text, radio, label) {

        cuentaControles(select, checkbox, text, radio, label);
    };

funcion_Control[22] =
    function(index, select, checkbox, text, radio, label) {

        cuentaControles(select, checkbox, text, radio, label);
    };

funcion_Control[23] =
    function(index, select, checkbox, text, radio, label) {

        cuentaControles(select, checkbox, text, radio, label);
    };

funcion_Control[24] =
    function(index, select, checkbox, text, radio, label) {

        cuentaControles(select, checkbox, text, radio, label);
    };

funcion_Control[25] =
    function(index, select, checkbox, text, radio, label) {

        cuentaControles(select, checkbox, text, radio, label);
    };

funcion_Control[26] =
    function(index, select, checkbox, text, radio, label) {

        cuentaControles(select, checkbox, text, radio, label);
    };

funcion_Control[27] =
    function(index, select, checkbox, text, radio, label) {

        cuentaControles(select, checkbox, text, radio, label);
    };

funcion_Control[28] =
    function(index, select, checkbox, text, radio, label) {

        cuentaControles(select, checkbox, text, radio, label);
    };

funcion_Control[29] =
    function(index, select, checkbox, text, radio, label) {

        cuentaControles(select, checkbox, text, radio, label);
    };

funcion_Control[30] =
    function(index, select, checkbox, text, radio, label) {

        cuentaControles(select, checkbox, text, radio, label);
    };