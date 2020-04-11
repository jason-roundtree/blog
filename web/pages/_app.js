import { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../components/GlobalStyles'
import modes from '../colorScheme'

function MyApp({ Component, pageProps }) {
    const [ userThemeStr, setUserThemeStr ] = useState('light')
    const [ userThemeObj, setUserThemeObj ] = useState(modes[userThemeStr])
    // console.log('userThemeStr: ', userThemeStr)
    // console.log('userThemeObj: ', userThemeObj)

    useEffect(() => {
        setUserThemeObj(modes[userThemeStr])
    }, [userThemeStr])
    
    function handleThemeToggle() {
        setUserThemeStr(
            userThemeStr === 'dark'
                ? 'light'
                : 'dark'
        )
    }

    return (
        <ThemeProvider theme={userThemeObj}>
            <GlobalStyles />
            <Component 
                {...pageProps} 
                onToggleThemeClick={handleThemeToggle}
            />
        </ThemeProvider>
    )
}

export default MyApp