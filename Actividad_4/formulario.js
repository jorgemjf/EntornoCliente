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

// AJAX para recuperar los datos de Tamaños e Ingredientes
const RECURSO = "formulario.json"
const URL_DESTINO = "http://localhost:5500/Actividad_4/" 
function enviarPeticionAsincrona() {

    let peticion = new XMLHttpRequest()

    peticion.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                procesarRespuesta(this.responseText)
            }
        } else {
            alert("Se ha producido un error")
        }
    }

    peticion.open('GET', URL_DESTINO + RECURSO, true);
    peticion.send(null);

}

// Función que carga los radiobuttons y checkboxes        
function procesarRespuesta(datos) {
    var objetoJson = JSON.parse(datos)
    
    //Acceso con DOM
    let radioButtons = document.getElementById("resultadoTamanos").textContent;
    let checkBox = document.getElementById("resultadoIngredientes").textContent;
    
    var arrayTamanos = objetoJson.Pizzas.Tamanos;
    var arrayIngredientes = objetoJson.Pizzas.Ingredientes;
    
    var radioButtons = "<div>Tamaños</div>";
    var checkBox = "<div>Ingredientes</div>";
    //Iteramos el JSON para recuperar los datos
    for (let tamanos of arrayTamanos) {
        radioButtons += 
        '<input type="radio" name="tamano"/>' + tamanos.Tamaño + " " 
        + tamanos.Precio + " €";
    }

    for (let ingredientes of arrayIngredientes) {
        checkBox += 
        '<input type="checkbox" name="ingrediente"/>' + ingredientes.Ingrediente + " " 
        + ingredientes.Precio + " €" ;
}


    resultadoTamanos.innerHTML = radioButtons;
    resultadoIngredientes.innerHTML = checkBox;

}
   
//función que se ejecuta al cargar la página
window.onload = function () {
    //formulario.onsubmit = validacion;
    let formulario = document.getElementById("formulario");
    let submit = document.getElementById("enviar");
    submit.addEventListener("click", function (event) {
        event.preventDefault();
        validacion();
        precioPizza(errorCount);
    });

    /*var totalPedido = totalRadioButton + totalCheckbox;
    alert("El total pedido es de: " + (totalPedido));*/


// Función que calcula el precio total del pedido
    let contadorPrecio = 0;
    let precioPizza = function (errorCount) {
        if (errorCount == 0) {
            let size = document.querySelector('input[name="tamaño"]:checked').value;
            //console.log(size);
            contadorPrecio += parseInt(size);
            let ingredient = document.querySelectorAll('input[type="checkbox"]:checked').length;
            //console.log(ingredient);
            contadorPrecio += parseInt(ingredient);
            console.log(contadorPrecio);
            alert("El precio total de tu pedido es de " + contadorPrecio + "€");
        }
    }
}
