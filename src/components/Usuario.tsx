import { useState } from 'react';


interface User {
    uuid: string,
    name: string
}

const Usuario = () => {

    const [user, setUser] = useState<User>()

    const login = () => {
        setUser({
            uuid: 'dada1234',
            name: 'Misho'
        })
    }

    return (
        <div className='mt-5'>
            <h3>Usuario: useState</h3>
            <button className='btn btn-outline-primary' onClick={login}>
                login
            </button>

            {(!user) ? <pre> no hay usuario todavia </pre> : <pre>{JSON.stringify(user)}</pre>}


        </div>
    )
}

export default Usuario