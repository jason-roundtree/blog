import { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../components/GlobalStyles'
import themes from '../colorsAndThemes'

function MyApp({ Component, pageProps }) {
    const [ userThemeStr, setUserThemeStr ] = useState('light')
    const [ userThemeObj, setUserThemeObj ] = useState(themes[userThemeStr])

    useEffect(() => {
        setUserThemeObj(themes[userThemeStr])
    }, [userThemeStr])
    
    function handleThemeToggle() {
        console.log('event ran')
        setUserThemeStr(
            userThemeStr === 'dark' ? 'light' : 'dark'
        )
    }

    return (
        <ThemeProvider theme={userThemeObj}>
            <GlobalStyles />
            <Component 
                {...pageProps} 
                onToggleThemeClick={handleThemeToggle}
                themeString={userThemeStr}
            />
        </ThemeProvider>
    )
}

export default MyApp