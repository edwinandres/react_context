import React, { useState } from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const initialTheme = 'light';

const MyPage = () => {

    const [theme, setTheme] = useState(initialTheme);

    const handleTheme = (e) => {
        
        setTheme(e.target.value);
        console.log(theme)
    };

    
    return (
        <div className="my-page">
            <Header theme={theme} handleTheme={handleTheme} />
            <Main theme={theme} />
            <Footer theme={theme} />           
        </div>
    );
};

export default MyPage
