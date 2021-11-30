let errorCount = 0;
// funcion que checkea las validaciones del formulario
function validacion() {
    errorCount = 0;
    //Comprobamos que el campo 'Nombre' no esté vacío
    if (nombre.value.trim() == "") {
        alert("El campo de Nombre es obligatorio");
        nombre.focus();
        errorCount++;
        return false;
    }

    // Comprobamos que la primera letra del nombre
    /* es mayúscula
     */
    var regex = /[A-Z].*/
    if (regex.test(nombre.value) == false) {
        alert("El primer carácter debe ser mayúscula");
        nombre.focus();
        errorCount++;
        return false;
    }

    // Comprobamos que el campo 'Dirección' no esté vacío
    if (direccion.value.trim() == "") {
        alert("El campo de Direccion es obligatorio");
        direccion.focus();
        errorCount++;
        return false;
    }

    // Comprobamos que el campo 'Teléfono' no esté vacío
    if (telefono.value.trim() == "") {
        alert("El campo de Teléfono es obligatorio");
        direccion.focus();
        errorCount++;
        return false;
    }

    /*
     * Validar formato de teléfono:
     *
     * El formato esperado es como ###-###-###.
     * (?:\d{3}|\(\d{3}\)): Busca 3 dígitos ó
     * 3 dígitos entre paréntesis, seguido de
     * 2 grupos de 3 dígitos separados entre sí
     * por '-', '/', '.'
     * 
     */
    var regex = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{3}/;
    if (regex.test(telefono.value) == false) {
        alert('Introduzca su teléfono siguiendo el formato del ejemplo');
        telefono.focus();
        errorCount++;
        return false;
    }

    // Comprobamos que el campo 'Email' no esté vacío
    if (email.value.trim() == "") {
        alert("El campo de Email es obligatorio");
        email.focus();
        errorCount++;
        return false;
    }
    // Validar formato de email
    var regex = /(\W|^)[\w.\-]{0,25}@(yahoo|hotmail|gmail)\.com(\W|$)/;
    if (regex.test(email.value) == false) {
        alert("La dirección debe ser Yahoo, Hotmail o Gmail");
        email.focus();
        errorCount++;
        return false;
    }

    // Comprobamos que el campo 'Tamaño' no esté vacío
    tamaño = document.getElementsByName("tamaño");
    var radioButton_pulsado = false;
    for (var i = 0; i < tamaño.length; i++) {
        if (tamaño[i].checked) {
            radioButton_pulsado = true;
            break;
        }
    }

    if (!radioButton_pulsado) {
        alert('Seleccione el tamaño de la pizza');
        errorCount++;
        return false;
    }

    ingredientes = document.getElementsByName("ingrediente");
    var ingredientes_seleccionados = false;
    for (var i = 0; i < ingredientes.length; i++) {
        if (ingredientes[i].checked) {
            ingredientes_seleccionados = true;
            break;
        }
    }

    if (!ingredientes_seleccionados) {
        alert('Seleccione los ingredientes de la pizza');
        errorCount++;
        return false;
    }

}

const URL_DESTINO = "http://localhost:5500/Actividad4/"
const RECURSO = "pizza.json"

function CarcarAjax() {

    let xmlHttp = new XMLHttpRequest()

    xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                cargarFormulario(this.responseText)//Obtenemos el valor en texto
            } else {
                alert("ZASCA!")
            }
        }
    }

    xmlHttp.open('GET', URL_DESTINO + RECURSO, true)
    xmlHttp.send(null)
}

function CalcularPrecioTotal() {

    let xmlHttp = new XMLHttpRequest()

    xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                calcularTotal(this.responseText)//Obtenemos el valor en texto
            } else {
                alert("ZASCA!")
            }
        }
    }

    xmlHttp.open('GET', URL_DESTINO + RECURSO, true)
    xmlHttp.send(null)
}

function calcularTotal(jsonDoc) {
    //Convertimos un texto a un objeto JSON
    var objetoJson = JSON.parse(jsonDoc)
    //Podemos hacer lo contrario con "JSON.stringify(obj)"
    console.log(objetoJson)

    //Desactivamos la validación del formulario para evitar problemas
    let contadorPrecio = 0;
    if (errorCount == 0) {


        let size = document.querySelector('input[name="size"]:checked').value;
        console.log(size);
        contadorPrecio += parseInt(size);

        let ingre = document.querySelectorAll('input[type="checkbox"]:checked');
        result = [];
        ingre.forEach(element => {
            result.push(element.value);
            contadorPrecio += parseInt(element.value);
        });

        console.log(result);
        console.log(contadorPrecio);
        alert("El precio total de tu pedido es de " + contadorPrecio + "€");
    } else {
        alert("Rellena los campos alma de cántaro");
    }

}


function cargarFormulario(jsonDoc) {
    //Convertimos un texto a un objeto JSON
    var objetoJson = JSON.parse(jsonDoc)
    //Podemos hacer lo contrario con "JSON.stringify(obj)"
    console.log(objetoJson)

    //Hecho con DOM
    let rad = document.getElementById("resultadoBusqueda").textContent;
    let chec = document.getElementById("resultadoBus").textContent;

    var arrayPizza = objetoJson.PIZZERIA.PIZZA;
    var arrayIngr = objetoJson.PIZZERIA.INGREDIENTES;

    //Iteramos el array y formamos los radio button y checkbox
    for (let pizza of arrayPizza) {
        rad += '<input type="radio" id = "' + pizza.SIZE + '" name="size" value="' + pizza.PRECIO + '"/>' + pizza.SIZE
    }

    for (let ing of arrayIngr) {
        chec += '<input type="checkbox" id = "' + ing.OPCION + '" name="ingredientes" value="' + ing.PRECIO + '"/>' + ing.OPCION
    }

    resultadoBusqueda.innerHTML = rad;
    resultadoBus.innerHTML = chec;
}

//función que se ejecuta al cargar la página
window.onload = function () {
    CarcarAjax();

}