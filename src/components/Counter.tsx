import { useState } from "react"


const Counter = () => {

    const [counter, setCounter] = useState(0)

    const incrementar = () => {
        setCounter(counter + 1)
    }

    return (
        <div className='mt-5'>
            <h3>Counter: usestate</h3>
            <span>Valor: {counter}</span>
            <br />
            <button className="btn btn-outline-primary mt-2" onClick={incrementar}>
                +1
            </button>
        </div>
    )
}

export default Counter