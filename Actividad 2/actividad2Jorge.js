function cargarFormulario() {
    //selecciono el div inicial del html para ir añadiendo elementos en el
    const divInicio = document.getElementById("divInicial")

    //creo un h1 para poner un titulo y lo añado al div inicial
    const titulo = document.createElement("h1")
    const textoTitulo = document.createTextNode("FORMULARIO")
    titulo.appendChild(textoTitulo)
    divInicio.appendChild(titulo)

    //creo el formulario y lo añado al div inicial
    const formulario = document.createElement("form")
    formulario.setAttribute("id", "formulario")
    formulario.setAttribute("action", "backEnd.php")
    formulario.setAttribute("method", "post")
    divInicio.appendChild(formulario)

    //subtitulo para la entrada de datos personales
    const radioButton = document.createElement("h2")
    const textoRadioButton = document.createTextNode("Sección 1")
    radioButton.appendChild(textoRadioButton)
    formulario.appendChild(radioButton)

    //salto de linea
    const espacio = document.createElement("br")
    formulario.appendChild(espacio)

    //subtitulo para Opción 1
    const radioButton1 = document.createElement("h2")
    const textoradioButton1 = document.createTextNode("Radio Button 1")
    radioButton1.appendChild(textoradioButton1)
    formulario.appendChild(radioButton1)

    //label para opcion 1
    const labelOpcion1 = document.createElement("label")
    const textoLabelOpcion1 = document.createTextNode("Opcion 1")
    labelOpcion1.setAttribute("for", "Opción 1")
    labelOpcion1.appendChild(textoLabelOpcion1)
    formulario.appendChild(labelOpcion1)

    //input Opcion 1
    const radioOpcion1 = document.createElement("input")
    radioOpcion1.setAttribute("type", "radio")
    radioOpcion1.setAttribute("id", "opcion1")
    radioOpcion1.setAttribute("name", "opcion")
    radioOpcion1.setAttribute("value", "Opcion 1")
    formulario.appendChild(radioOpcion1)

    //label para opcion 2
    const labelOpcion2 = document.createElement("label")
    const textoLabelOpcion2 = document.createTextNode("Opcion 2")
    labelOpcion2.setAttribute("for", "Opción 2")
    labelOpcion2.appendChild(textoLabelOpcion2)
    formulario.appendChild(labelOpcion2)

    //input Opcion 2
    const radioOpcion2 = document.createElement("input")
    radioOpcion2.setAttribute("type", "radio")
    radioOpcion2.setAttribute("id", "opcion2")
    radioOpcion2.setAttribute("name", "opcion")
    radioOpcion2.setAttribute("value", "Opcion 2")
    formulario.appendChild(radioOpcion2)

    //label para opcion 3
    const labelOpcion3 = document.createElement("label")
    const textoLabelOpcion3 = document.createTextNode("Opcion 3")
    labelOpcion3.setAttribute("for", "Opción 3")
    labelOpcion3.appendChild(textoLabelOpcion3)
    formulario.appendChild(labelOpcion3)

    //input Opcion 3
    const radioOpcion3 = document.createElement("input")
    radioOpcion3.setAttribute("type", "radio")
    radioOpcion3.setAttribute("id", "opcion3")
    radioOpcion3.setAttribute("name", "opcion")
    radioOpcion3.setAttribute("value", "Opcion 3")
    formulario.appendChild(radioOpcion3)

    //label para opcion 4
    const labelOpcion4 = document.createElement("label")
    const textoLabelOpcion4 = document.createTextNode("Opcion 4")
    labelOpcion4.setAttribute("for", "Opción 4")
    labelOpcion4.appendChild(textoLabelOpcion4)
    formulario.appendChild(labelOpcion4)

    //input Opcion 4
    const radioOpcion4 = document.createElement("input")
    radioOpcion4.setAttribute("type", "radio")
    radioOpcion4.setAttribute("id", "opcion4")
    radioOpcion4.setAttribute("name", "opcion")
    radioOpcion4.setAttribute("value", "Opcion 4")
    formulario.appendChild(radioOpcion4)

    //salto de linea
    const espacio2 = document.createElement("br")
    formulario.appendChild(espacio2)

    //subtitulo para Opción 1
    const radioButton2 = document.createElement("h2")
    const textoradioButton2 = document.createTextNode("Radio Button 2")
    radioButton2.appendChild(textoradioButton2)
    formulario.appendChild(radioButton2)

    //label para opcion 5
    const labelOpcion5 = document.createElement("label")
    const textoLabelOpcion5 = document.createTextNode("Opcion 5")
    labelOpcion5.setAttribute("for", "Opción 5")
    labelOpcion5.appendChild(textoLabelOpcion5)
    formulario.appendChild(labelOpcion5)

    //input Opcion 5
    const radioOpcion5 = document.createElement("input")
    radioOpcion5.setAttribute("type", "radio")
    radioOpcion5.setAttribute("id", "opcion5")
    radioOpcion5.setAttribute("name", "opcion2")
    radioOpcion5.setAttribute("value", "Opcion 5")
    formulario.appendChild(radioOpcion5)

    //label para opcion 6
    const labelOpcion6 = document.createElement("label")
    const textoLabelOpcion6 = document.createTextNode("Opcion 6")
    labelOpcion6.setAttribute("for", "Opción 6")
    labelOpcion6.appendChild(textoLabelOpcion6)
    formulario.appendChild(labelOpcion6)

    //input Opcion 6
    const radioOpcion6 = document.createElement("input")
    radioOpcion6.setAttribute("type", "radio")
    radioOpcion6.setAttribute("id", "opcion6")
    radioOpcion6.setAttribute("name", "opcion2")
    radioOpcion6.setAttribute("value", "Opcion 6")
    formulario.appendChild(radioOpcion6)

    //label para opcion 7
    const labelOpcion7 = document.createElement("label")
    const textoLabelOpcion7 = document.createTextNode("Opcion 7")
    labelOpcion7.setAttribute("for", "Opción 7")
    labelOpcion7.appendChild(textoLabelOpcion7)
    formulario.appendChild(labelOpcion7)

    //input Opcion 7
    const radioOpcion7 = document.createElement("input")
    radioOpcion7.setAttribute("type", "radio")
    radioOpcion7.setAttribute("id", "opcion7")
    radioOpcion7.setAttribute("name", "opcion2")
    radioOpcion7.setAttribute("value", "Opcion 7")
    formulario.appendChild(radioOpcion7)

    //label para opcion 8
    const labelOpcion8 = document.createElement("label")
    const textoLabelOpcion8 = document.createTextNode("Opcion 8")
    labelOpcion8.setAttribute("for", "Opción 8")
    labelOpcion8.appendChild(textoLabelOpcion8)
    formulario.appendChild(labelOpcion8)

    //input Opcion 8
    const radioOpcion8 = document.createElement("input")
    radioOpcion8.setAttribute("type", "radio")
    radioOpcion8.setAttribute("id", "opcion8")
    radioOpcion8.setAttribute("name", "opcion2")
    radioOpcion8.setAttribute("value", "Opcion 8")
    formulario.appendChild(radioOpcion8)

    //salto de linea
    const espacio3 = document.createElement("br")
    formulario.appendChild(espacio3)

    const espacio4 = document.createElement("br")
    formulario.appendChild(espacio4)

    //label para select
    const labelOpcion9 = document.createElement("label")
    const textoLabelOpcion9 = document.createTextNode("Seleccione donde quiere reservar:")
    labelOpcion9.setAttribute("for", "reservar")
    labelOpcion9.appendChild(textoLabelOpcion9)
    formulario.appendChild(labelOpcion9)

    //Select
    let reservar = document.createElement("select")
    reservar.name = "reservar"
    let option1 = document.createElement("option")
    option1.value = "Sala_Fitness"
    let option2 = document.createElement("option")
    option2.value = "Sauna"
    let option3 = document.createElement("option")
    option2.value = "Piscina"

    let text1 = document.createTextNode("Sala Fitness")
    let text2 = document.createTextNode("Sauna")
    let text3 = document.createTextNode("Piscina")

    option1.appendChild(text1)
    option2.appendChild(text2)
    option3.appendChild(text3)

    reservar.appendChild(option1)
    reservar.appendChild(option2)
    reservar.appendChild(option3)

    let br = document.createElement("br")
    formulario.appendChild(br)
    formulario.appendChild(reservar)

    const espacio5 = document.createElement("br")
    formulario.appendChild(espacio5)
    const espacio6 = document.createElement("br")
    formulario.appendChild(espacio6)

    //Label para textarea
    const labelOpcion10 = document.createElement("label")
    const textoLabelOpcion10 = document.createTextNode("Introduzca alguna sugerencia:")
    labelOpcion10.setAttribute("for", "sugerencia")
    labelOpcion10.appendChild(textoLabelOpcion10)
    formulario.appendChild(labelOpcion10)
    const espacio7 = document.createElement("br")
    formulario.appendChild(espacio7)
    //TextArea
    let textarea = document.createElement("textarea")
    textarea.name = "sugerencia"
    textarea.cols = "50"
    textarea.rows = "10"
    formulario.appendChild(textarea)
    const espacio8 = document.createElement("br")
    formulario.appendChild(espacio8)


    //boton enviar
    const enviar = document.createElement("input")
    enviar.setAttribute("type", "submit")
    enviar.setAttribute("id", "enviar")
    enviar.setAttribute("value", "Enviar")
    formulario.appendChild(enviar)

    //boton validar
    const validar = document.createElement("input")
    validar.setAttribute("type", "button")
    validar.setAttribute("id", "validar")
    validar.setAttribute("value", "Validar")
    formulario.appendChild(validar)



    

    function css(element, style) {
        for (const property in style)
            element.style[property] = style[property];
    }

    let styleForm = document.getElementById("formulario")
    css(formulario, {
        'background-color': 'yellow',
        'color': 'red'
    });


}
function createRadio() {
    var objDiv = document.getElementById("radioDiv");

    var radioItem1 = document.createElement("input");
    radioItem1.type = "radio";
    radioItem1.name = "radioGrp";
    radioItem1.id = "rad1";
    radioItem1.value = "myradio1";

    radioItem1.defaultChecked = true;
    radioItem1.checked = true;

    var radioItem2 = document.createElement("input");
    radioItem2.type = "radio";
    radioItem2.name = "radioGrp";
    radioItem2.id = "rad2";
    radioItem2.value = "myradio2";

    var objTextNode1 = document.createTextNode("Radio1");
    var objTextNode2 = document.createTextNode("Radio2");

    var objLabel = document.createElement("label");
    objLabel.htmlFor = radioItem1.id;
    objLabel.appendChild(radioItem1);
    objLabel.appendChild(objTextNode1);

    var objLabel2 = document.createElement("label");
    objLabel2.htmlFor = radioItem2.id;
    objLabel2.appendChild(radioItem2);
    objLabel2.appendChild(objTextNode2);


    objDiv.appendChild(objLabel);
    objDiv.appendChild(objLabel2);

}

