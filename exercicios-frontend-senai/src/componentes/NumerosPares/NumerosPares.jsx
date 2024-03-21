import './NumerosPares.css'

const NumerosPares = (props) => {
    
    let numeros = props.numeros
    if (numeros % 2 === 0) {
        return <div className='numerosPares'>
            <ul>
                {numeros.map((numero, index) => (
                    <li key={index}>{numero}</li>
                ))}
            </ul>
        </div>
        }
}

export default NumerosPares