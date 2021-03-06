import React, { useState } from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const initialTheme = 'light';
const initialLanguage = 'es';
const initialAuth = false;

const translations ={
    es: {
        headerTitle: "Mi aplicación SIN Context API",
        headerSubtitle: "Mi cabecera",
        headerLight: "Claro",
        headerDark: "Oscuro",
        buttonLogin: "Iniciar Sesión",
        buttonLogout: "Cerrar Sesión",
        mainWelcome: "Bienvenid@ invitad@",
        mainHello: "Hola Usuari@",
        mainContent: "Mi contenido principal",
        footerTitle: "Mi pié de página",
    },
    en: {
    headerTitle: "My application without Context API",
    headerSubtitle: "My header",
    headerLight: "Light",
    headerDark: "Dark",
    buttonLogin: "Login",
    buttonLogout: "Logout",
    mainWelcome: "Welcome Guest",
    mainHello: "Hello User",
    mainContent: "My main content",
    footerTitle: "My footer",
    },
}

const MyPage = () => {

    const [theme, setTheme] = useState(initialTheme);
    const [language, setLanguage] = useState(initialLanguage);
    const [texts, setTexts] = useState(translations[language]);
    const [auth, setAuth] = useState(initialAuth);

    const handleTheme = (e) => {       
        setTheme(e.target.value)
    };

    const handleLanguage = (e) => {       
        setLanguage(e.target.value);
        setTexts(translations[e.target.value]);
    };

    const handleAuth = () => {

    };

    
    return (
        <div className="my-page">
            <Header theme={theme} auth='auth' handleAuth={handleAuth} handleTheme={handleTheme} texts={texts} handleLanguage={handleLanguage} />
            <Main theme={theme} texts={texts} auth={auth}/>
            <Footer theme={theme} texts={texts} />           
        </div>
    );
};

export default MyPage
