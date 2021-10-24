function cargar() {
    let foto = document.createElement("img");
    foto.id = "pesa"
    foto.src = "pesa.jpg"
    foto.alt = "foto de una pesa"
    foto.height = "300"
    foto.width = "450"
    divInicio.appendChild(foto)

    let foto2 = document.createElement("img");
    foto2.id = "pesa2"
    foto2.src = "bici.jpg"
    foto2.alt = "foto de una bici"
    foto2.height = "300"
    foto2.width = "450"
    divInicio.appendChild(foto2)

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
    divInicio.appendChild(br)
    divInicio.appendChild(select)

    function css(element, style) {
        for (const property in style)
            element.style[property] = style[property];
    }

 

    css(divInicio, {
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

