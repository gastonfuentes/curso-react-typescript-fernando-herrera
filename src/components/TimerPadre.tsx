import { useState } from "react"
import { Timer } from "./Timer"

export const TimerPadre = () => {

    const [milisegundos, setMilisegundos] = useState(1000)

    return (
        <>
            <span>Milisengundos: {milisegundos}</span>

            <br />

            <button className="btn btn-primary" onClick={() => setMilisegundos(1000)}>

                1000
            </button>

            <button className="btn btn-primary" onClick={() => setMilisegundos(2000)}>
                2000
            </button>

            <Timer milisegundos={milisegundos} />

        </>
    )
}
