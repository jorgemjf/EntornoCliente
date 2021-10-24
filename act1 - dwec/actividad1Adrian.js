console.log("|<<------------------Requerimiento 1:------------------>>|");

/*
Realiza un programa en JavaScript que recorra un array de 10 números y calcule la media aritmética de diez números. Los números deben de estar comprendidos entre el 0 y 100, si se detectará algún número fuera de ese rango no se tendría en cuenta para su cálculo.
Cada integrante del equipo debe de proporcionar un algoritmo con la solución y se debe elegir la mejor solución de todas las propuestas con unas conclusiones.
*/
console.log("|<<----------------------------------------------------->>|");

// Creamos un Array con 10 valores.

let a1 = new Array(10);

// Creamos dos variables, una que sea la suma de los números comprendidos entre el 0 y el 100, y la otra como contador para la media.

let suma = 0;
let count = 0;

// Asignamos 10 valores al Array.

a1 = [27, 89, 100, 65, -15, 43, 29, 118, -54, 20]

// Bucle for: Elementos >= 0 y Elementos <=100, se vayan sumando entre ellos.

a1.forEach(Element => {
    if (Element >= 0 && Element <= 100) {
        suma += Element;
        count++;
    }
});

// Media: Suma / Contador de números.

let media = suma/count;
console.log("|<<----------------------------------------------------->>|");
console.log("- La media aritmética es: " + media);
console.log("-----------------------------------------------------------");

console.log();

console.log("|<<------------------Requerimiento 2:------------------>>|");
// Calcular también la moda. No hace falta que cada integrante aporte una solución.
console.log("-----------------------------------------------------------");

let a2 = new Array(12);

a2 = [2, 2, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9];


// Función "mode" ("moda").
function mode(array){

// Método sort para ordenar los valores de menor a mayor.
    return array.sort((a,b) =>
          array.filter(v => v===a).length
        - array.filter(v => v===b).length
    ).pop();
}

console.log(mode(a2));