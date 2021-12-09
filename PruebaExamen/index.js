function cargar() {
    let titulo = document.createElement("h1")
    let textoTitulo = document.createTextNode("hola esto es una practica para el examen")

    titulo.appendChild(textoTitulo);
    divPrincipal.appendChild(titulo)


    let nombre = document.createElement("input")
    nombre.type = "text"
    nombre.placeholder = "nombre"



    let formulario = document.createElement("form")
    formulario.id = "formulario"
    formulario.action = "enviar.php"
    formulario.method = "get"
    
    let carlos = document.createElement("p")
    // let carlosTexto = document.createTextNode("carlos")
    carlos.innerHTML="carlos"
    // carlos.appendChild(carlosTexto)
    formulario.appendChild(carlos)
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.value = "carlos"

    let checkbox1 = document.createElement("input")
    checkbox1.type = "checkbox"
    checkbox1.value = "maria"

    formulario.appendChild(checkbox)
    formulario.appendChild(checkbox1)

    let radioLabel = document.createElement("label")
    radioLabel.innerHTML = "opcion1"
    radioLabel.for = "opcion1"

    let radio = document.createElement("input")
    radio.type = "radio"
    radio.name = "opciones"
    radio.value = "opcion1"

    let radioLabel1 = document.createElement("label")
    radioLabel1.innerHTML = "opcion2"
    radioLabel1.for = "opcion2"

    let radio1 = document.createElement("input")
    radio1.type = "radio"
    radio1.name = "opciones"
    radio1.value = "opcion2"
    
    formulario.appendChild(radioLabel)
    formulario.appendChild(radio)

    formulario.appendChild(radioLabel1)
    formulario.appendChild(radio1)


    let enviar = document.createElement("input")
    enviar.type = "submit"
    enviar.value = "enviar"
    formulario.appendChild(enviar)





    formulario.appendChild(nombre)
    divPrincipal.appendChild(formulario)



}


window.onload = cargar;