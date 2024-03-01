const numeros = [18, 7, 15, 19, 53, 12, 40, 30, 34, 66];

function impares() {
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 1) {
            console.log(numeros[i])
        }
    }
}
impares()

const pares = numeros.filter(
    (numero) => {
        if (numero % 2 === 0) {
            return true;
        }
        else {
            return false;
        }
    }
)

console.log(pares)
alert(pares)