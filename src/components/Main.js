import React from 'react'

const Main = ({theme}) => {
    return (
        <div>
            <main className={theme} >
                <p>Hola, bienvenido invitado</p>
                <p>Hola usuario</p>
                <p>Mi contenido principal</p>
            </main>
        </div>
    )
}

export default Main
