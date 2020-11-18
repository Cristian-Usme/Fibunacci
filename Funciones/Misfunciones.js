export const PI = 3.1416;

export function numerosImpares(){
    for (let i = 1; i <= 100; i += 2) {
        console.log(i)
    }
}

function numerosPares(){
    let contador = 0;
    while (contador <= 100) {
        if (contador % 2 == 0) {
            console.log(contador)
        }
        contador = contador + 1;
    }
}


function sumarNumeros(n1, n2){
    let suma = 0;
    suma = n1 + n2;
    return suma;
}

function condionalNumero() {
    var numero = 2;
    let numero1 = 1;
    const PI = 3.1416;
    let suma = numero + numero1;

    if (suma >= 5) {
        console.log("La suma es mayor o igual a 5");
    } else {
        console.log("La suma es menor que 5");
    }
}

