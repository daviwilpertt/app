const numeros = [18, 7, 15, 19, 53, 12, 40, 30, 34, 66];

function maior20() {
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 20) {
            console.log(numeros[i])
        }
    }
}
maior20()