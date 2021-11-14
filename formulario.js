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

    /*totalRadioButton 
    document.getElementByName("tamaño").onclick = function() {  
        var radioButtonMarcados = document.querySelectorAll('input[type="checkbox"]:checked');  
        for (var radioButton of radioButtonMarcados) {  
        totalRadioButton = parseInt(radioButton.value);  
        }  
    } */

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

    /*totalCheckbox = 0;
    document.getElementByName("ingrediente").onclick = function () {
        var checkboxMarcada = document.querySelectorAll('input[type="checkbox"]:checked');
        for (var checkbox of checkboxMarcada) {
            totalCheckbox = parseInt(checkbox.value);
        }
    }*/
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