import './NumerosImpares.css'

const NumerosImpares = (props) => {

    let numeros = props.numeros
    if (numeros % 2 === 1) {
        return <div className='numerosImpares'>
            <ul>
                <li>{numeros}</li>
            </ul>
        </div>
    }
}
export default NumerosImpares