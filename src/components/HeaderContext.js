import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext';
import LanguageContext from '../context/LanguageContext';
import ThemeContext from '../context/ThemeContext'

const HeaderContext = () => {

    const {theme, handleTheme} = useContext(ThemeContext);
    const {language, handleLanguage, texts} = useContext(LanguageContext)
    const {auth, handleAuth} = useContext(AuthContext)
    
    return (
        <div>
            <header className={theme}>
                <h2>{texts.headerTitle}</h2>
                <h3>{texts.headerSubtitle}</h3>
                <select name='language' onChange={handleLanguage}>
                    <option value="es">Español</option>
                    <option value="en">Ingles</option>
                </select>
                <input type="radio" name="theme" value="light" id='lightContext' onClick={handleTheme} />
                <label htmlFor="lightContext">{texts.headerLight}</label>
                <input type="radio" name="theme" value="dark" id='darkContext' onClick={handleTheme} />
                <label htmlFor="darkContext">{texts.headerDark}</label>
                
                <button type="button" onClick={handleAuth}>{auth ? texts.buttonLogout :texts.buttonLogin}</button>

            </header>
        </div>
    )
}

export default HeaderContext
