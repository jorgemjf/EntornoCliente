//REQUERIMIENTO 1
    // Definición de la URL y el documento JSON

    const RECURSO = "formularioJQuery.json"

    // Llamamos a la funcion que ejecuta jQuery
    $(inicializarJQuery);

    //Funcion que ejecuta jQuery
    function inicializarJQuery(){
        //metemos el evento onclick al boton
        $("#botonActualizar").click(peticionAJAX);
    }

    function peticionAJAX(){
        //Con JQuery se hace así
        $.ajax({
                'type'  : 'GET', 
                'url'   : RECURSO,
                'async' : true, 
            }
        ).done(crearElementos)//funcion de callback que ejecutamos si todo ha ido bien
        .fail(procesarError)//funcion de callback que ejecutamos si ha ido mal, optativa
        .always(fin)//funcion de callback que ejecutamos siempre, optativa
            
    }

    function crearElementos(datosPizzas){
        console.log(arguments)//nos dan toda la información disponible de la respuesta HTTP
        console.log(datosPizzas)   

        // Accedemos a la información de las pizzas
        var arrayTamanos = datosPizzas.Pizzas.Tamanos;
        var arrayIngredientes = datosPizzas.Pizzas.Ingredientes;

        //Antes de cargar las filas, borramos las anteriores
        //para evitar add cada vez que pulsemos el boton
        $("#resultadoTamanos").html('')
        $("#resultadoIngredientes").html('')

        //Iteramos el JSON para recuperar los datos
        $.each(arrayTamanos, function(i, tam){
            rButt = $('<input type="radio" id = "' + i + '" name="tamano" value="' + tam.Precio + '"/>')
            rButtLabel = $( '<label for="tamano-' + tam.Tamano + '">' + tam.Tamano + " " +  '</label>')
            //'<input type="checkbox" id = "' + ingr.Ingrediente + '" name="tamano" value="' + ingr.Precio + '"/>'
            rButt.appendTo(resultadoTamanos)
            rButtLabel.appendTo(resultadoTamanos)
        })
        
        $.each(arrayIngredientes, function(i, ingr){
            cBox = $('<input type="checkbox" id = "' + i + '" name="ingrediente" value="' + ingr.Precio + '"/>' + ingr.Ingrediente)
            cBoxLabel = $( '<label for="ingredientes-' + ingr.Ingrediente + '">' + ingr.Ingrediente + " " +  '</label>')
            cBox.appendTo(resultadoIngredientes)
            cBoxLabel.appendTo(resultadoIngredientes)
        })

}
    
function procesarError(error){
    alert("ZASCA!")
    console.log(error)
}

//Funcion que se ejecutará siempre, haya habido error o no
function fin(){
    console.log("Este metodo siempre se ejecutará")
}

// REQUERIMIENTO 2
    // Llamamos a la funcion que ejecuta jQuery para calcular el total

    function calcularPrecio() {
  
        // Accedemos a la información de las pizzas
        let contadorPrecio = 0;

            let tamanoPizza = $("input[name=tamano]:checked").val();
            contadorPrecio += parseInt(tamanoPizza,10) ;

        let ingredientesPizza = $("input[type=checkbox]:checked");
        
        for (let a = 0; a < ingredientesPizza.length; a++) {
            contadorPrecio += parseInt(ingredientesPizza[a].value,10)
        }
        console.log(contadorPrecio);
            
            console.log(contadorPrecio)
            alert("El precio total de tu pedido es de " + contadorPrecio + "€");
            
    }



