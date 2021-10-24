function cargarFormulario() {
    let foto = document.createElement("img");
    foto.id = "piscina"
    foto.src = "imagenes/piscina.jpg"
    foto.alt = "foto de una piscina"
    foto.height = "300"
    foto.width = "450"
    divInicial.appendChild(foto)

    let foto2 = document.createElement("img");
    foto2.id = "pesa2"
    foto2.src = "imagenes/sala.jpg"
    foto2.alt = "foto de una sala"
    foto2.height = "300"
    foto2.width = "450"
    divInicial.appendChild(foto2)

    let foto3 = document.createElement("img");
    foto3.id = "pesa2"
    foto3.src = "imagenes/sauna.jpg"
    foto3.alt = "foto de una sauna"
    foto3.height = "300"
    foto3.width = "450"
    divInicial.appendChild(foto3)

    let select = document.createElement("select")
    select.name = "reservar"
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

    select.appendChild(option1)
    select.appendChild(option2)
    select.appendChild(option3)

    let br = document.createElement("br")
    divInicial.appendChild(br)
    divInicial.appendChild(select)

    function css(element, style) {
        for (const property in style)
            element.style[property] = style[property];
    }

 

    css(divInicial, {
        'margin': '1%',
        'height': '100vh',
        'text-align': 'center',
        'background-color': '#F5F5F5'
        , 'font-family': 'Roboto'
    })
    css(salafitness, {
        'background-color':'red'
    })


}

