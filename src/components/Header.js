import React from 'react'

const Header = ({ theme, handleTheme, handleLanguage, texts, auth, handleAuth }) => {
    return (
        <div>
            <header className={theme}>
                <h2>{texts.headerTitle}</h2>
                <h3>{texts.headerSubtitle}</h3>
                <select name='language' onChange={handleLanguage}>
                    <option value="es">Español</option>
                    <option value="en">Ingles</option>
                </select>
                <input type="radio" name="theme" value="light" id='light' onClick={handleTheme} />
                <label htmlFor="light">{texts.headerLight}</label>
                <input type="radio" name="theme" value="dark" id='dark' onClick={handleTheme} />
                <label htmlFor="dark">{texts.headerDark}</label>
                
                <button type="button" onClick={handleAuth}>{auth ? texts.buttonLogout :texts.buttonLogin}</button>

            </header>
        </div>
    )
}

export default Header
