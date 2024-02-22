let palavra = prompt("digite qualquer coisa: ")
let tamanho_palavra = palavra.length
let msg
if (tamanho_palavra <= 5) {
    msg = `a string "${palavra}" é pequena`
    alert(msg)
    console.log(msg)
}
else if (tamanho_palavra > 6 && tamanho_palavra <= 10) {
    msg = `a string "${palavra}" é média`
    alert(msg)
    console.log(msg)
}
else if (tamanho_palavra > 10) {
    msg = `a string "${palavra}" é grande`
    alert(msg)
    console.log(msg)
}
else {

}