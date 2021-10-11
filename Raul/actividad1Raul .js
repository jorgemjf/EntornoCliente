// ------------------- REQUERIMIENTO 1 ----------------
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

console.log(`---------------------------------------------`)

// ------------------- REQUERIMIENTO 3 ------------------

const moda = myArray;
/* La función crea un array que contiene 
 * el conteo de cada número del array que le pasamos 
 * myArray
 */
function calculoModa(array) {
    // obj: array que contiene las modas
    const obj = {};
    array.forEach(numero => {
        /* Para cada número del array,
         * si no existe como una key de cada objeto
         * crea 1 y establece su valor a 1.
         */
        if (!obj[numero]) {
            obj[numero] = 1;
        } else {
            /* Sí ya existe como key en el objeto
             * incrementa su valor correspondiente.
             */
            obj[numero] += 1;
        }
    });

    // La función clavedeObjeto, devuelve la clave del objeto con el valor más alto.
    let valorMasAlto = 0;
    let claveValorMasAlto = -Infinity;

    for (let clavedeObjeto in obj) {
        const valor = obj[clavedeObjeto];
        if (valor >= valorMasAlto && Number(clavedeObjeto) > claveValorMasAlto) {
            valorMasAlto = valor;
            claveValorMasAlto = Number(clavedeObjeto);
        }
    }

    // Convierte la clave del objeto en un número
    return claveValorMasAlto;
}

console.log(`La moda del array es: ${(calculoModa(moda))}`);