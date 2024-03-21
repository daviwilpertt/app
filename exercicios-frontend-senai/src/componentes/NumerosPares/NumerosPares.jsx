import './NumerosPares.css'

const NumerosPares = (props) => {
    
    let numeros = props.numeros
    if (numeros % 2 === 0) {
        
        return <div className='numerosPares'>
            <ul>
                {numeros.map()}
            </ul>
        </div>
        }
}

export default NumerosPares