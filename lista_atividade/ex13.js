function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        let total = numero * i
        console.log(`${numero} x ${i} = ${total}`)
    }
}
tabuada(5)