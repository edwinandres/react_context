import React from 'react'

const Header = ({ theme, handleTheme }) => {
    return (
        <div>
            <header className={theme}>
                <h2>Mi aplicacion SIN Context API</h2>
                <h3>Mi cabecera</h3>
                <select name='language'>
                    <option value="es">Español</option>
                    <option value="en">Ingles</option>
                </select>
                <input type="radio" name="theme" value="light" id='light' onClick={handleTheme} />
                <label htmlFor="light">Claro</label>
                <input type="radio" name="theme" value="dark" id='dark' onClick={handleTheme} />
                <label htmlFor="dark">Oscuro</label>
                <button type="button">Iniciar Sesión</button>

            </header>
        </div>
    )
}

export default Header
