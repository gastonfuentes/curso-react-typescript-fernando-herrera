import { useState } from "react"


const Counter = () => {

    const [counter, setCounter] = useState(0)

    const incrementar = (numero: number = 1) => {
        setCounter(counter + numero)
    }

    /*  const reset = (reset:number) =>{
         counter = 0
     } */

    return (
        <div className='mt-5'>
            <h3>Counter: usestate</h3>
            <span>Valor: {counter}</span>
            <br />
            <button className="btn btn-outline-primary mt-2" onClick={() => incrementar()}>
                +1
            </button>
            <button className="btn btn-outline-primary mt-2" onClick={() => incrementar(2)}>
                +2
            </button>
            <button className="btn btn-outline-danger mt-2" onClick={() => setCounter(0)}>
                Reset
            </button>
        </div>
    )
}

export default Counter