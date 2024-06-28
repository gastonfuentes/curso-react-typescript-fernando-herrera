
import { useForm } from "../hooks/useForm"


interface FormData {
    email: string,
    nombre: string,
    edad: number
}


export const Formulario = () => {


    const { formulario, handleChange } = useForm<FormData>({
        email: 'gaston@gaston.com',
        nombre: 'gaston fuentes',
        edad: 30
    })

    const { edad, email, nombre } = formulario

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={handleChange}
                    value={email}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input
                    type="text"
                    className="form-control"
                    name="nombre"
                    onChange={handleChange}
                    value={nombre}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Edad:</label>
                <input
                    type="number"
                    className="form-control"
                    name="edad"
                    onChange={handleChange}
                    value={edad}
                />
            </div>

            <pre>{JSON.stringify(formulario)}</pre>
        </form>
    )
}
