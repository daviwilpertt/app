import './BotaoContador.css'

const BotaoContador = () => {
    let numero = 0
    const incrementar = () => {
        numero += 1
    }
    return <button onClick={incrementar}>{numero}</button>
}

export default BotaoContador