function cargarFormulario() {
    //selecciono el div inicial del html para ir añadiendo elementos en el
    const divInicio = document.getElementById("divInicial")


    //creo un h1 para poner un titulo y lo añado al div inicial
    const titulo = document.createElement("h1")
    const textoTitulo = document.createTextNode("FORMULARIO INGRESO")
    titulo.appendChild(textoTitulo)
    divInicio.appendChild(titulo)

    //creo el formulario y lo añado al div inicial
    const formulario = document.createElement("form")
    formulario.setAttribute("id", "formulario")
    formulario.setAttribute("action", "backEnd.php")
    formulario.setAttribute("method", "post")
    divInicio.appendChild(formulario)

    // Subtítulo para seccion del formulario
    const camposTexto = document.createElement("h2")
    const textoCamposPersonales = document.createTextNode("DATOS PERSONALES")
    camposTexto.appendChild(textoCamposPersonales)
    formulario.appendChild(camposTexto)

    //label - Nombre
    const labelCampo1 = document.createElement("label")
    const textoLabelCampo1 = document.createTextNode("Nombre:")
    labelCampo1.setAttribute("for", "Nombre")
    labelCampo1.appendChild(textoLabelCampo1)
    formulario.appendChild(labelCampo1)

    //input - Nombre
    const campoTextoInput1 = document.createElement("input")
    campoTextoInput1.setAttribute("type", "text")
    campoTextoInput1.setAttribute("id", "campoNombre")
    campoTextoInput1.setAttribute("name", "campoTextoNombre")
    formulario.appendChild(campoTextoInput1)

    //label - Apellidos
    const labelCampo2 = document.createElement("label")
    const textoLabelCampo2 = document.createTextNode("Apellidos:")
    labelCampo2.setAttribute("for", "Apellidos")
    labelCampo2.appendChild(textoLabelCampo2)
    formulario.appendChild(labelCampo2)

    //input - Apellidos
    const campoTextoInput2 = document.createElement("input")
    campoTextoInput2.setAttribute("type", "text")
    campoTextoInput2.setAttribute("id", "campoApellidos")
    campoTextoInput2.setAttribute("name", "campoTextoApellidos")
    formulario.appendChild(campoTextoInput2)


    //label - DNI
    const labelCampo3 = document.createElement("label")
    const textoLabelCampo3 = document.createTextNode("DNI:")
    labelCampo3.setAttribute("for", "DNI")
    labelCampo3.appendChild(textoLabelCampo3)
    formulario.appendChild(labelCampo3)

    //input - DNI
    const campoTextoInput3 = document.createElement("input")
    campoTextoInput3.setAttribute("type", "text")
    campoTextoInput3.setAttribute("id", "campoDNI")
    campoTextoInput3.setAttribute("name", "campoTextoDNI")
    formulario.appendChild(campoTextoInput3)

    //label para Teléfono
    const labelCampo4 = document.createElement("label")
    const textoLabelCampo4 = document.createTextNode("Teléfono:")
    labelCampo4.setAttribute("for", "Telefono")
    labelCampo4.appendChild(textoLabelCampo4)
    formulario.appendChild(labelCampo4)

    //input Teléfono
    const campoTextoInput4 = document.createElement("input")
    campoTextoInput4.setAttribute("type", "text")
    campoTextoInput4.setAttribute("id", "campoTelefono")
    campoTextoInput4.setAttribute("name", "campoTextoTelefono")
    formulario.appendChild(campoTextoInput4)

    //label para Direccion
    const labelCampo5 = document.createElement("label")
    const textoLabelCampo5 = document.createTextNode("Direccion:")
    labelCampo5.setAttribute("for", "Direccion")
    labelCampo5.appendChild(textoLabelCampo5)
    formulario.appendChild(labelCampo5)

    //input Direccion
    const campoTextoInput5 = document.createElement("input")
    campoTextoInput5.setAttribute("type", "text")
    campoTextoInput5.setAttribute("id", "campoDireccion")
    campoTextoInput5.setAttribute("name", "campoTextoDireccion")
    formulario.appendChild(campoTextoInput5)

    //salto de linea
    const espacio = document.createElement("br")
    formulario.appendChild(espacio)

    //subtitulo para Opción 1
    const radioButton1 = document.createElement("h2")
    const textoradioButton1 = document.createTextNode("Estado Civil:")
    radioButton1.appendChild(textoradioButton1)
    formulario.appendChild(radioButton1)

    //label para opcion 1
    const labelOpcion1 = document.createElement("label")
    const textoLabelOpcion1 = document.createTextNode("Casado")
    labelOpcion1.setAttribute("for", "casado")
    labelOpcion1.appendChild(textoLabelOpcion1)
    formulario.appendChild(labelOpcion1)

    //input Opcion 1
    const radioOpcion1 = document.createElement("input")
    radioOpcion1.setAttribute("type", "radio")
    radioOpcion1.setAttribute("id", "casado")
    radioOpcion1.setAttribute("name", "opcion")
    radioOpcion1.setAttribute("value", "casado")
    formulario.appendChild(radioOpcion1)

    //label para opcion 2
    const labelOpcion2 = document.createElement("label")
    const textoLabelOpcion2 = document.createTextNode("Soltero")
    labelOpcion2.setAttribute("for", "soltero")
    labelOpcion2.appendChild(textoLabelOpcion2)
    formulario.appendChild(labelOpcion2)

    //input Opcion 2
    const radioOpcion2 = document.createElement("input")
    radioOpcion2.setAttribute("type", "radio")
    radioOpcion2.setAttribute("id", "soltero")
    radioOpcion2.setAttribute("name", "opcion")
    radioOpcion2.setAttribute("value", "soltero")
    formulario.appendChild(radioOpcion2)

    //label para opcion 3
    const labelOpcion3 = document.createElement("label")
    const textoLabelOpcion3 = document.createTextNode("Viudo")
    labelOpcion3.setAttribute("for", "viudo")
    labelOpcion3.appendChild(textoLabelOpcion3)
    formulario.appendChild(labelOpcion3)

    //input Opcion 3
    const radioOpcion3 = document.createElement("input")
    radioOpcion3.setAttribute("type", "radio")
    radioOpcion3.setAttribute("id", "viudo")
    radioOpcion3.setAttribute("name", "opcion")
    radioOpcion3.setAttribute("value", "viudo")
    formulario.appendChild(radioOpcion3)


    //salto de linea
    const espacio2 = document.createElement("br")
    formulario.appendChild(espacio2)

    //subtitulo para Opción 1
    const radioButton2 = document.createElement("h2")
    const textoradioButton2 = document.createTextNode("Plan a elegir:")
    radioButton2.appendChild(textoradioButton2)
    formulario.appendChild(radioButton2)

    //label para opcion 5
    const labelOpcion5 = document.createElement("label")
    const textoLabelOpcion5 = document.createTextNode("Semanal")
    labelOpcion5.setAttribute("for", "Osemanal")
    labelOpcion5.appendChild(textoLabelOpcion5)
    formulario.appendChild(labelOpcion5)

    //input Opcion 5
    const radioOpcion5 = document.createElement("input")
    radioOpcion5.setAttribute("type", "radio")
    radioOpcion5.setAttribute("id", "semanal")
    radioOpcion5.setAttribute("name", "plan")
    radioOpcion5.setAttribute("value", "semanal")
    formulario.appendChild(radioOpcion5)

    //label para opcion 6
    const labelOpcion6 = document.createElement("label")
    const textoLabelOpcion6 = document.createTextNode("Mensual")
    labelOpcion6.setAttribute("for", "mensual")
    labelOpcion6.appendChild(textoLabelOpcion6)
    formulario.appendChild(labelOpcion6)

    //input Opcion 6
    const radioOpcion6 = document.createElement("input")
    radioOpcion6.setAttribute("type", "radio")
    radioOpcion6.setAttribute("id", "mensual")
    radioOpcion6.setAttribute("name", "plan")
    radioOpcion6.setAttribute("value", "mensual")
    formulario.appendChild(radioOpcion6)

    //label para opcion 7
    const labelOpcion7 = document.createElement("label")
    const textoLabelOpcion7 = document.createTextNode("Trimestral")
    labelOpcion7.setAttribute("for", "trimestral")
    labelOpcion7.appendChild(textoLabelOpcion7)
    formulario.appendChild(labelOpcion7)

    //input Opcion 7
    const radioOpcion7 = document.createElement("input")
    radioOpcion7.setAttribute("type", "radio")
    radioOpcion7.setAttribute("id", "trimestral")
    radioOpcion7.setAttribute("name", "plan")
    radioOpcion7.setAttribute("value", "trimestrañ")
    formulario.appendChild(radioOpcion7)

    //label para opcion 8
    const labelOpcion8 = document.createElement("label")
    const textoLabelOpcion8 = document.createTextNode("Anual")
    labelOpcion8.setAttribute("for", "anual")
    labelOpcion8.appendChild(textoLabelOpcion8)
    formulario.appendChild(labelOpcion8)

    //input Opcion 8
    const radioOpcion8 = document.createElement("input")
    radioOpcion8.setAttribute("type", "radio")
    radioOpcion8.setAttribute("id", "anual")
    radioOpcion8.setAttribute("name", "plan")
    radioOpcion8.setAttribute("value", "anual")
    formulario.appendChild(radioOpcion8)

    //salto de linea
    const espacio3 = document.createElement("br")
    formulario.appendChild(espacio3)

    const espacio4 = document.createElement("br")
    formulario.appendChild(espacio4)

    //label para select
    const labelOpcion9 = document.createElement("label")
    const textoLabelOpcion9 = document.createTextNode("Seleccione en que centro se quiere inscribir:")
    labelOpcion9.setAttribute("for", "centro")
    labelOpcion9.appendChild(textoLabelOpcion9)
    formulario.appendChild(labelOpcion9)

    //Select
    let centro = document.createElement("select")
    centro.name = "centro"
    let option1 = document.createElement("option")
    option1.value = "gran_via"
    let option2 = document.createElement("option")
    option2.value = "barrio_del_pilar"
    let option3 = document.createElement("option")
    option2.value = "montecarmelo"
    let option4 = document.createElement("option")
    option4.value = "vallecas"

    let text1 = document.createTextNode("Gran Vía")
    let text2 = document.createTextNode("Barrio del Pîlar")
    let text3 = document.createTextNode("Montecarmelo")
    let text4 = document.createTextNode("Vallecas")

    option1.appendChild(text1)
    option2.appendChild(text2)
    option3.appendChild(text3)
    option4.appendChild(text4)

    centro.appendChild(option1)
    centro.appendChild(option2)
    centro.appendChild(option3)
    centro.appendChild(option4)


    let br = document.createElement("br")
    formulario.appendChild(br)
    formulario.appendChild(centro)

    const espacio5 = document.createElement("br")
    formulario.appendChild(espacio5)
    const espacio6 = document.createElement("br")
    formulario.appendChild(espacio6)

    //Label para textarea
    const labelOpcion10 = document.createElement("label")
    const textoLabelOpcion10 = document.createTextNode("Añada alguna observación:")
    labelOpcion10.setAttribute("for", "observacion")
    labelOpcion10.appendChild(textoLabelOpcion10)
    formulario.appendChild(labelOpcion10)
    const espacio7 = document.createElement("br")
    formulario.appendChild(espacio7)
    //TextArea
    let textarea = document.createElement("textarea")
    textarea.name = "observacion"
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

    //Creamos un nuevo div
    let div2 = document.createElement("div")
    body.appendChild(div2)

    let h1 = document.createElement("h1")
    let texto = document.createTextNode("Nuestras instalaciones:")
    h1.appendChild(texto)
    div2.appendChild(h1)

    //Añadimos las fotos
    let foto = document.createElement("img");
    foto.id = "sauna"
    foto.src = "imagenes/sauna.jpg"
    foto.alt = "foto de una sauna"
    div2.appendChild(foto)

    let foto2 = document.createElement("img");
    foto2.id = "piscina"
    foto2.src = "imagenes/piscina.jpg"
    foto2.alt = "foto de una bici"
    div2.appendChild(foto2)

    let foto3 = document.createElement("img");
    foto3.id = "sala"
    foto3.src = "imagenes/sala.jpg"
    foto3.alt = "foto de una bici"
    div2.appendChild(foto3)


    function css(element, style) {
        for (const property in style)
            element.style[property] = style[property];
    }

    let styleForm = document.getElementById("formulario")
    
    css(body, {
        'margin': '20px'
    });
    css(titulo, {
        'text-align': 'center',
        'border':'solid 3px #b3aeada4'
    });
    
    css(formulario, {
        'background-color': '#b3aeada4',
        'padding':'10px 10px 10px 10px'
    });

    css(div2, {
        'background-color': '#b3aeada4',
        'text-align': 'center',

    });

    css(foto, {
        'height': '200px',
        'width': "300px"
    });

    css(foto2, {
        'height': '200px',
        'width': "300px"
    });

    css(foto3, {
        'height': '200px',
        'width': "300px"
    });

}


