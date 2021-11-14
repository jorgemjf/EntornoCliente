function validacion() {
    if (nombre.value.trim() == "" || direccion.value.trim() == "" || telefono.value.trim() == "" || email.value.trim() == "") {
        alert('ERROR!! Falta algun dato personal')
        return false;
    }

    tamaño = document.getElementsByName("tamaño");
    var seleccionado = false;
    for (var i = 0; i < tamaño.length; i++ ){
        if (tamaño[i].checked) {
            seleccionado = true;
            break;
        }
    }

    if (!seleccionado) {
        alert('ERROR!! No ha seleccionado un tamaño de pizza')
        return false;
    }

    if (!bacon.checked && !pollo.checked && !cebolla.checked && !pimiento.checked) {
        alert('ERROR!! Debe elegir al menos un ingrediente')
        return false;
    }
    return true;
}

window.onload = function(){

    formulario.onsubmit = validacion;

}