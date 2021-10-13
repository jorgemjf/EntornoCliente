console.log(`----------------------------Requerimiento 1-----------------------------`);
/* myArray: array de 10 números generados aleatoriamente 
 * entre el 0 y el 100, que se formatearán con el Math.round()
 * Array.from crea un array nuevo a partir del objeto iterable
 * {length: 10} 
 * Para cada posicion iterable, se aplica la funcion Math.random
 * hasta lograr completar el array
 */

let myArray = Array.from({
    length: 10
}, () => Math.floor(Math.random() * 101));

console.log(`El array es el siguiente: ${myArray}`)
console.log(`---------------------------------------------`)

/* .reduce() reduce los elementos del array a 1
 * En nuestro caso reducirá todo al valor de 'sumaElementos'
 * El acumulador recibe el valor de la suma en cada iteración, hasta 
 * ser el valor final del algoritmo en la ietración final
 */
const sumaElementos = myArray.reduce(
    (acumuladorSuma, valorIterado) => acumuladorSuma + valorIterado
);

// Calculo de la media

let media = sumaElementos / 10;
console.log(`La media aritmetica del array equivale a: ${media}`);

console.log(`------------------------Requerimiento 2--------------------------`);
//Creamos el array con el que vamos a trabajar
let array = [25,17,40,63,25,54,70,90]


//Creamos una función para la mediana

function mediana(array) {

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

console.log(`-----------------------Requerimiento 3------------------------`);

//creamos el array ejemplo
let e = [2, 3, 3, 4, 5, 6, 3, 6, 6];

//creamos una función que recibirá por parámetros un array y un valor
//con reduce recorremos el array y vamos sumando la cantidad de veces que se encuentra cada elemento del array
function obtenerFrecuencias(array, valor) {
    return array.reduce((acumulado, numero) => (numero === valor ? acumulado + 1 : acumulado), 0);
}

//creamos una función que reciba un array y saque la moda
function calcularModa(arrayDeNumeros) {
    //instanciamos una nuevo array de tipo Set con el array que recibimos en la función, además transformamos ese set
    //en una lista de argumentos con el spread operator para poder usar map. Usamos las variables moda y mapanumeros para trabajar con ellas
    const setDeNumeros = new Set(arrayDeNumeros);
    const arraySinDuplicados = [...setDeNumeros];
    const moda = [];
    let mapaNumeros = [];

    //console.log(`imprimo el array sin duplicados ${arraySinDuplicados}`)
    //recorremos el array sin duplicados para obtener la frecuencia que tienen por cada elemento el array recibido
    //metemos cada elemento con su frecuencia en un nuevo array
    arraySinDuplicados.map((numero) => {
        const frecuencia = obtenerFrecuencias(arrayDeNumeros, numero);
        mapaNumeros.push([numero, frecuencia])
    })

    //console.log(`imprimo mapaNumeros ${mapaNumeros}`)
    //ordenamos el array de menor a mayor agrupando por parejas de elementos para no perder el valor y la frecuencia
    mapaNumeros.sort((a, b) => b[1] - a[1]);

    //console.log(`imprimo mapaNumeros ${mapaNumeros}`)
    //filtramos la pareja de los elementos para sacar aquellos que tengan la frecuencia más alta
    //introducimos de nuevo en un nuevo array los valores que al filtrar estén más repetidos
    const mapaModa = mapaNumeros.filter((elemento) => {
        return elemento[1] === mapaNumeros[0][1]
    });
    mapaModa.map((par) => moda.push(par[0]));

    //finalmente si el array está vacío o si el número de valores que hay en el último array con la moda coincide
    //con el array inicial devolveremos que no tiene moda, de lo contrario sacamos la moda
    if (moda !== [] && moda.length !== arrayDeNumeros.length) {
        return moda;
    } else {
        return `La moda no existe`;
    }
}

console.log(calcularModa(e));
//console.log(obtenerFrecuencias(e, 6));