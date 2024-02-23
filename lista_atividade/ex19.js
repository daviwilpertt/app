const numeros = [18, 7, 15, 19, 53, 12, 40, 30, 34, 66];

function fizz_buzz() {
    for (let i = 0; i < numeros.length; i++) {
        let num_atual = numeros[i]
        if (num_atual % 3 == 0 && num_atual % 5 == 0) {
            console.log("fizzbuzz")
        }
        else if (num_atual % 3 == 0) {
            console.log("fizz")
        }
        else if (num_atual % 5 == 0) {
            console.log("buzz")
        }
        else {
            console.log(num_atual)
        }

    }
}
fizz_buzz()
