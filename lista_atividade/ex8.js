let frutas = ["morango", "banana", "melao"]
alert(frutas)
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}
let nova_fruta = prompt("digite uma nova fruta")
frutas.push(nova_fruta)
console.log(frutas)
alert(frutas)

frutas.pop()
console.log(frutas)
alert(frutas)






