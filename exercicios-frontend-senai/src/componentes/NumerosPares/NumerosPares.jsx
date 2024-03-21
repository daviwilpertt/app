import './NumerosPares.css'

const NumerosPares = (props) => {

    let numeros = props.numeros
    if (numeros % 2 === 0) {
        return <div className='numerosPares'>
            <ul>
                <li>{numeros}</li>
            </ul>
        </div>
    }
    else {
        return 
    }
}

export default NumerosPares