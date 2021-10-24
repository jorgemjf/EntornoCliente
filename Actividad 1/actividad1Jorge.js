console.log(`----------------------------Requerimiento 1-----------------------------`);
//Creamos el array y las variables con las que operaremos
let a = new Array(10);
let suma = 0;
let count = 0;
a = [10, 100, 10, 10, 560, 56, 19, 110, 9, 150]
//mediante un blucle detectaremos todos los elementos del array entre 0-100 y los sumamos
a.forEach(element => {
    if (element <= 100 && element >= 0) {
        suma += element;
        count++;
    }
});
//finalmente sacamos la media
let mediaAritmetica = suma / count;
//console.log(`contador es ${count} y la suma es ${suma}`);
console.log(`La media aritmética es ${mediaAritmetica}`);

console.log(`------------------------Requerimiento 2--------------------------`);

//creamos los dos arrays con los que operaremos
let b = new Array(6);
let c = new Array(5);
b = [8, 2, 56, 80, 12, 1];
c = [8, 2, 56, 80, 12];

//console.log(b.sort());
//console.log(`El array par ordenado es: ${b.sort((n1, n2) => n1 - n2)} y el array impar ordenado es: ${c.sort((n1, n2) => n1 - n2)} `);
//creamos una función que recibirá por parámetro un array
function mediana(arr) {
    //variable que almacenará el array ordenado de menor a mayor
    let arra = arr.sort((n1, n2) => n1 - n2);
    //si el array es impar entonces quitamos un elemento del principio y otro del final hasta que quede 1 que será la mediana
    if ((arra.length) % 2 !== 0) {
        while (arra.length > 1) {
            arra.shift();
            arra.pop();
        }
        console.log(`La mediana del array es: ${arra[0]} `)
        //si el array es par entonces quitamos un elemento del principio y otro del final hasta que queden 2
        //para sacar la mediana en este caso se suman los dos elementos que han quedado en array y se divide entre 2
    } else {
        while (arra.length > 2) {
            arra.shift();
            arra.pop();
        }
        let sum = 0;
        arra.forEach(element => {
            sum += element;
        });
        console.log(`La mediana del array es: ${sum / 2}`)
    }
}

mediana(b);
mediana(c);

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