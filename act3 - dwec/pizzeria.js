//Busca el tamaño de la pizza seleccionado
function obteneTamañoPizza(){
	const size = document.querySelectorAll('input[name="tamaño"]');
	let selectedValue="";
	for (const s of size) {
		if (s.checked) {
			selectedValue = s.value;
			break;
		}
	}
	return selectedValue;
}

//Calcula el precio base de la pizza
function precioBase(){
	tamaño = obteneTamañoPizza();
	if(tamaño=='Pequeña') return 5;
	if(tamaño=='Mediana') return 10;
	if(tamaño=='Grande') return 15;
    return 0;
}

//Busca la lista de ingredientes seleccionados
function obtenerIngredientes(){
    const checkboxes = document.querySelectorAll('input[name="ingrediente"]:checked');
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    return values;
}

//Calcula el total de la factura
function totalFactura() {
	const basePrice = precioBase();
    return basePrice + obtenerIngredientes().length;
}

//Rellena los datos de la factura
function mostrarFactura() {
	const ingredientes = obtenerIngredientes(); 
	for (var i = 0; i < 6; i++) {
		var linea = document.getElementById("L"+i);
		var nodeDesc   = linea.childNodes[0];
		var nodePrecio = linea.childNodes[1];
		switch (i) {
			case 0: 
				nodeDesc.textContent = "Pizza: " + obteneTamañoPizza();
				nodePrecio.textContent = precioBase() + " €";
				break;
			case 1:
			case 2:
			case 3:
			case 4:
				if((i-1)<ingredientes.length){
					nodeDesc.textContent = "Ingrediente seleccionado: " + ingredientes[i-1];
					nodePrecio.textContent = "1 €";
				} else {
					nodeDesc.textContent = "";
					nodePrecio.textContent = "";
				}
				break;
			case 5:
				nodeDesc.textContent = "TOTAL (IVA incluido):";
				nodePrecio.textContent = totalFactura()  + " €";
				break;
		}
	}
}

// VALIDACION DE ERRORES--------------------------------------------

// Valida si un valor es un string vacío.
function campoRequerido(value) {
    return (value === '') ? 'Campo requerido' : null;
}

// Valida si un valor comienza con mayúsculas.
function validaFormatoNombre(value) {
    const NAME_VALIDATION = /^[A-Z].*$/;
    return (!NAME_VALIDATION.test(value)) ? 'El nombre debe comenzar con una letra mayúscula' : null;
}

// Valida si un valor tiene el formato 9 numeros continuos
function validaFormatoTelefono(value) {
    const PHONE_VALIDATION = /^[0-9]{9}$/;
    return (!PHONE_VALIDATION.test(value)) ? 'Formato erroneo de teléfono, debe contener 9 números': null;
}

// Valida si un email tiene el formato corecto.
function validaFormatoCorreo(email) {
    const EMAIL_VALIDATION = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (!EMAIL_VALIDATION.test(email)) ? 'Formato erroneo de correo, debe contener: "@", "dominio."' : null;
}

// Valida que el valor del campo input del nombre tenga no esté vacío
function validaNombre(value) {
    return campoRequerido(value) || validaFormatoNombre(value);
}

// Valida que el valor del campo input de la dirección no esté vacio
function validaDireccion(value) {
    return campoRequerido(value);
}

// Valida que el valor del campo input del teléfono no esté vacío
function validaTelefono(value) {
    return campoRequerido(value) || validaFormatoTelefono(value);
}

// Valida que el valor del campo email del teléfono no esté vacío
function validaCorreo(value) {
    return campoRequerido(value) || validaFormatoCorreo(value);
}

// Valida que se haya eligido un tamaño de pizza.
function validaTamaño(value) {
    let result = null;
    if (campoRequerido(value)) {
        result = 'Debe seleccionar un tamaño de pizza';
    }
    return result;
}

// Valida que se haya al menos un ingrediente de la pizza.
function validaIngredientes(listValues) {
    let result = null;
    if (listValues.length === 0) {
        result = 'Debe seleccionar al menos un ingrediente';
    }
    return result;
}

// COMPROBACIONES Y VALIDACIONES DE LA FORMA-----------------------

// Comprueba si todas las validaciones se cumplen.
function desahabilitaBotonProcesarPedido() {
	let valNombre   = document.querySelector('#nombre').value;  
	let valDireccion = document.querySelector('#direccion').value;
	let valTelefono  = document.querySelector('#telefono').value;
	let valCorreo  = document.querySelector('#correo').value;
    return validaNombre(valNombre)
        || validaDireccion(valDireccion)
        || validaTelefono(valTelefono)
        || validaCorreo(valCorreo)
        || validaTamaño(obteneTamañoPizza())
        || validaIngredientes(obtenerIngredientes());
}

//Desabilita el boton para mostrar la factura, si no se cumplen las condiciones
function disableEnableSubmit() {
   document.querySelector('.pizza-form .buttons-set .btn.primary')
    .disabled = !!desahabilitaBotonProcesarPedido();
}


// Valida si el campo nombre es válido
function cambioNombre(event) {
    const errorField = document.querySelector('#campo-nombre .text-error');
    const error = validaNombre(this.value);
    if (error) {
        errorField.innerHTML = error;
    } else {
        errorField.innerHTML = '';
    }
    disableEnableSubmit();
}

// Valida si el campo dirección es válido
function cambioDireccion(event) {
    const errorField = document.querySelector('#campo-direccion .text-error');
    const error = validaDireccion(this.value);
    if (error) {
        errorField.innerHTML = error;
    } else {
        errorField.innerHTML = '';
    }
    disableEnableSubmit();
}

// Valida si el campo telefono es válido
function cambioTelefono(event) {
    const errorField = document.querySelector('#campo-telefono .text-error');
    const error = validaTelefono(this.value);
    if(error) {
        errorField.innerHTML = error;
    } else {
        errorField.innerHTML = '';
    }
    disableEnableSubmit();
}

// Valida si el campo email es válido
function cambioCorreo(event) {
    const errorField = document.querySelector('#campo-correo .text-error');
    const error = validaCorreo(this.value);
    if (error) {
        errorField.innerHTML = error;
    } else {
        errorField.innerHTML = '';
    }
    disableEnableSubmit();
}

// Valida si el campo con la lista de ingredientes es válido
function cambioIngredientes(event) {
    const errorField = document.querySelector('#campo-ingredientes .text-error');
    const error = validaIngredientes(obtenerIngredientes());
    if (error) {
        errorField.innerHTML = error;
    } else {
        errorField.innerHTML = '';
    }
    disableEnableSubmit();
}

// Valida si el campo tamaño de la pizza es válido
function cambioTamaño(event){
    const errorField = document.querySelector('#campo-tamaño .text-error');
    const error = validaTamaño(obteneTamañoPizza());
    if (error) {
        errorField.innerHTML = error;
    } else {
        errorField.innerHTML = '';
    }
    disableEnableSubmit();	
}

// Coloca todo los valores iniciales
function limpiaFormulario() {
   location.reload();
   disableEnableSubmit();
}

//Permite desplegar la factura
function realizarPago(event) {
    event.preventDefault();
    const modal = document.querySelector('.modal');
    mostrarFactura();
    modal.classList.add('open');
}

//Oculta la factura y regresa a la compra
function regresarCompra() {
    const modal = document.querySelector('.modal');
    const billDetails = modal.querySelector('.bill-details');
    modal.classList.remove('open');
}

// Registro de los eventos que se lanzan cuando se rellena el campo nombre
// y cuando este pierde el foco.
const inputName = document.querySelector('#campo-nombre input');
inputName.addEventListener('input', cambioNombre);
inputName.addEventListener('blur', cambioNombre);

// Registro de los eventos que se lanzan cuando se rellena el campo dirección
// y cuando este pierde el foco.
const inputAddress = document.querySelector('#campo-direccion input');
inputAddress.addEventListener('input', cambioDireccion);
inputAddress.addEventListener('blur', cambioDireccion);

// Registro de los eventos que se lanzan cuando se rellena el campo teléfono
// y cuando este pierde el foco.
const inputPhone = document.querySelector('#campo-telefono input');
inputPhone.addEventListener('input', cambioTelefono);
inputPhone.addEventListener('blur', cambioTelefono);

// Registro de los eventos que se lanzan cuando se rellena el campo email
// y cuando este pierde el foco.
const inputEmail = document.querySelector('#campo-correo input');
inputEmail.addEventListener('input', cambioCorreo);
inputEmail.addEventListener('blur', cambioCorreo);

// Registro del evento que se lanza para los radio buttons para comprobar cual está checked.
const inputsPizzaSize = document.querySelectorAll('#campo-tamaño input');
inputsPizzaSize.forEach((radioElement) => {
    radioElement.addEventListener('change', cambioTamaño);
});

// Registro del evento que se lanza para los checkboxes para comprobar cuales están checked.
const inputsPizzaIngredients = document.querySelectorAll('#campo-ingredientes input');
inputsPizzaIngredients.forEach((checkbox) => {
    checkbox.addEventListener('change', cambioIngredientes);
});

// Registro del evento que se lanza cuando se clica el botón Reset
const resetButton = document.querySelector('.pizza-form .buttons-set .btn.secondary');
resetButton.addEventListener('click', limpiaFormulario);

// Registro del evento que se lanza cuando se clica el botón de Envío
const form = document.querySelector('.pizza-form');
form.addEventListener('submit', realizarPago);

// Registro del evento que se ejecuta al cerrar la ventana modal
const modalButtons = document.querySelectorAll('.modal .buttons-set .btn');
modalButtons.forEach((button) => {
    button.addEventListener('click', regresarCompra);
});

