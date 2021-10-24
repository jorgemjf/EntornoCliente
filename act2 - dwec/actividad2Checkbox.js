function Formulario() {
    // Selección del div del HTML.

    const divInicio = document.getElementById("primerDiv")

    // Generación de titulo y adiccción al div.

    const titulo = document.createElement("h3")
    const textoTitulo = document.createTextNode("Formulario DOM - Checkbox")
    titulo.appendChild(textoTitulo)
    divInicio.appendChild(titulo)

    // Creación del formulario y adiccción al div.

    const formulario = document.createElement("form")
    formulario.setAttribute("id", "formulario")
    formulario.setAttribute("action", "backEnd.php")
    formulario.setAttribute("method", "post")
    divInicio.appendChild(formulario)

    // Subtitulo.

    const radioButton2 = document.createElement("h3")
    const textoradioButton2 = document.createTextNode("Checkbox")
    radioButton2.appendChild(textoradioButton2)
    formulario.appendChild(radioButton2)

    // Label para la primera opción (5a del general).

    const labelOpcion5 = document.createElement("label")
    const textoLabelOpcion5 = document.createTextNode("Body Combat")
    labelOpcion5.setAttribute("for", "Body Combat")
    labelOpcion5.appendChild(textoLabelOpcion5)
    formulario.appendChild(labelOpcion5)

    // Parámetro de entrada para la primera opción (5a del general).

    const radioOpcion5 = document.createElement("input")
    radioOpcion5.setAttribute("type", "Checkbox")
    radioOpcion5.setAttribute("id", "Body Combat")
    radioOpcion5.setAttribute("value", "Body Combat")
    formulario.appendChild(radioOpcion5)

    // Label para la segunda opción (6a del general).

    const labelOpcion6 = document.createElement("label")
    const textoLabelOpcion6 = document.createTextNode("Body Pump")
    labelOpcion6.setAttribute("for", "Body Pump")
    labelOpcion6.appendChild(textoLabelOpcion6)
    formulario.appendChild(labelOpcion6)

    // Parámetro de entrada para la segunda opción (6a del general).

    const radioOpcion6 = document.createElement("input")
    radioOpcion6.setAttribute("type", "Checkbox")
    radioOpcion6.setAttribute("id", "Body Pump")
    radioOpcion6.setAttribute("value", "Body Pump")
    formulario.appendChild(radioOpcion6)

    // Label para la tercera opción (7a del general).

    const labelOpcion7 = document.createElement("label")
    const textoLabelOpcion7 = document.createTextNode("Yoga")
    labelOpcion7.setAttribute("for", "Yoga")
    labelOpcion7.appendChild(textoLabelOpcion7)
    formulario.appendChild(labelOpcion7)

    // Parámetro de entrada para la tercera opción (7a del general).

    const radioOpcion7 = document.createElement("input")
    radioOpcion7.setAttribute("type", "Checkbox")
    radioOpcion7.setAttribute("id", "Yoga")
    radioOpcion7.setAttribute("value", "Yoga")
    formulario.appendChild(radioOpcion7)

    // Label para la cuarta opción (8a del general).

    const labelOpcion8 = document.createElement("label")
    const textoLabelOpcion8 = document.createTextNode("Pilates")
    labelOpcion8.setAttribute("for", "Pilates")
    labelOpcion8.appendChild(textoLabelOpcion8)
    formulario.appendChild(labelOpcion8)

    // Parámetro de entrada para la cuarta opción (8a del general).

    const radioOpcion8 = document.createElement("input")
    radioOpcion8.setAttribute("type", "Checkbox")
    radioOpcion8.setAttribute("id", "Pilates")
    radioOpcion8.setAttribute("value", "Pilates")
    formulario.appendChild(radioOpcion8)

    // Label para la quinta opción (9a del general).

    const labelOpcion9 = document.createElement("label")
    const textoLabelOpcion9 = document.createTextNode("Zumba")
    labelOpcion9.setAttribute("for", "Zumba")
    labelOpcion9.appendChild(textoLabelOpcion9)
    formulario.appendChild(labelOpcion9)

    // Parámetro de entrada para la quinta opción (9a del general).

    const radioOpcion9 = document.createElement("input")
    radioOpcion9.setAttribute("type", "Checkbox")
    radioOpcion9.setAttribute("id", "Zumba")
    radioOpcion9.setAttribute("value", "Zumba")
    formulario.appendChild(radioOpcion9)
    
    // br -> Salto de línea.

    const espacio3 = document.createElement("br")
    formulario.appendChild(espacio3)

    // Generación del "enviar".

    const enviar = document.createElement("input")
    enviar.setAttribute("type", "submit")
    enviar.setAttribute("id", "enviar")
    enviar.setAttribute("value", "Enviar")
    formulario.appendChild(enviar)

    // Generación del "validar".

    const validar = document.createElement("input")
    validar.setAttribute("type", "button")
    validar.setAttribute("id", "validar")
    validar.setAttribute("value", "Validar")
    formulario.appendChild(validar)

    const textarea = document.createElement("textarea")
    formulario.appendChild(espacio3)
    formulario.appendChild(textarea)
    
        
    // Estilos CSS

    function css(element, style) {
        for (const property in style)
            element.style[property] = style[property];
    }

    let styleForm = document.getElementById("formulario")
    css(formulario, {
        'background-color': 'whitesmoke',
        'color': 'black',
        'margin-top': '30px',
    });

    css(divInicio, {
        'margin': '20px',
    })
}
