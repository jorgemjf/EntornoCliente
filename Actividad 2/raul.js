function crearFormulario() {


    // Selecciono el div principal
    const divInicio = document.getElementById('divGeneral');

    // Añadimos titulo de la web
    const tituloWeb = document.createElement("h1")
    const textoTitulo = document.createTextNode("300s CLUB")
    tituloWeb.appendChild(textoTitulo)
    divInicio.appendChild(tituloWeb)

    // Creamos el formulario
    const formulario = document.createElement('form');
    formulario.setAttribute('id', 'formulario');
    formulario.setAttribute("method", "post")
    divInicio.appendChild(formulario);

    // Subtítulo para seccion del formulario
    const camposTexto = document.createElement("h2")
    const textoCamposPersonales = document.createTextNode("DATOS PERSONALES")
    camposTexto.appendChild(textoCamposPersonales)
    formulario.appendChild(camposTexto)

    //salto de linea
    const espacio = document.createElement("br")
    formulario.appendChild(espacio)

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

    // Estilos CSS
    function css(element, style) {
        for (const property in style)
            element.style[property] = style[property];
    }

    let styleForm = document.getElementById("formulario")

    css(divInicio, {
        'margin': '1%',
        'height': '100vh',
        'text-align': 'center',
        'background-color': '#F5F5F5'
        ,'font-family': 'Roboto'
    })

    css(tituloWeb, {
        'font-size': '80px',
        'padding-top': '2%',
        'font-weight': '900',
        'text-shadow':'1px 1px grey'
    })

    css(formulario, {
        'margin': '2%',
        'background-color': '#fce205',
        'color': 'black',
        'text-align': 'left',
        'font-size': '20px',
        'padding': '1%',
        'font-weight': '350',
        'box-shadow':'3px 5px grey'
    })

    css(camposTexto, {
        'font-weight': '350',
        'font-size': '35px',
        'text-decoration': 'underline 2px',
    })

    css(labelCampo1, {
        'padding': '0.3%'
    })
    css(labelCampo2, {
        'padding': '0.3%'
    })
    css(labelCampo3, {
        'padding': '0.3%'
    })
    css(labelCampo4, {
        'padding': '0.3%'
    })
    css(labelCampo5, {
        'padding': '0.3%'
    })
    css(labelCampo5, {
        'padding': '0.3%'
    })

    css((campoTextoInput1), {
        'border': '2px solid #798f9c',
        'border-radius':'4px',
        'background-color': '#edeef0'
    })
    css((campoTextoInput2), {
        'border': '2px solid #798f9c',
        'border-radius':'4px',
        'background-color': '#edeef0'
    })
    css((campoTextoInput3), {
        'border': '2px solid #798f9c',
        'border-radius':'4px',
        'background-color': '#edeef0'
    })
    css((campoTextoInput4), {
        'border': '2px solid #798f9c',
        'border-radius':'4px',
        'background-color': '#edeef0'
    })
    css((campoTextoInput5), {
        'border': '2px solid #798f9c',
        'border-radius':'4px',
        'background-color': '#edeef0'
    })
}