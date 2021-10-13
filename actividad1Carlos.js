


//Creamos una función para la media
function media(array) {

    //Creamos el array con el que vamos a trabajar
    var numeros = [2, 64, 26, 47, 1503, 89, 147, 12, 1, 87]

    //suma: variable para ir guardando el resultado de sumar el valor del array que cumple la condición de estar entre (0,100)
    //contador: variable para ir contando en cuantas posiciones hay valores que cumplen la condición de estar entre (0,100)

    let suma = 0
    let contador = 0

    //Recorremos el array y guardamos en i el valor de la posición
    for (let i in array) {
        //Comprobamos la condicion de estar entre (0,100)
        if ((array[i] >= 0 && array[i] <= 100) && i < 10) {
            //Si se cumple la condición, le sumamos a suma el valor de la posición en la que estamos actualmente y aumentamos el contador.
            suma += array[i]
            contador++
        } 
    }
    //Devolvemos la media, es decir la suma de los valores, entre el numero de valores
    return suma/contador
}

console.log(media(numeros))


//Creamos una función para la mediana

function mediana(array) {

    //Creamos el array con el que vamos a trabajar
    let array = [25,17,40,63,25,54,70,90]

    //mediana: variable donde vamos a devolver el resultado de la mediana
    let mediana = 0

    //Ordenamos el array de menor a mayor
    array.sort((a, b) => a - b)

    //Calculamos la mediana: 
    //1. Si el array tiene un numero impar de elementos, entonces la mediana es el numero que esta en el medio del array(ej: si el array tiene 3 posiciones, la mediana es la posicion 1). Usamos Math.floor para redondear hacia abajo cuando dividimos la longitud del array ya que al ser un numero impar va a dar decimal (ej: si el array tiene 3 posiciones, 3/2= 1.5 que redondeado hacia abajo es 1, la posicion que queremos)

    //2. Si el array tiene un numero par de elementos, entonces la mediana es la media de los dos elementos del medio (ej: si el array tiene 4 posiciones, la mediana es la media de las posiciones 1 y 2) 
    array.length % 2 != 0 ? mediana = array[Math.floor(array.length / 2)] : mediana = (array[array.length / 2] + array[array.length / 2 - 1]) / 2
    
    //Devolvemos el resultado 
    return mediana;
}

console.log (mediana(array))