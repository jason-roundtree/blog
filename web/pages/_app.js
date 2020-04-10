import { useState, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../components/GlobalStyles'

const testDarkTheme = {
    body: '#363537',
    text: '#FAFAFA',
    secondaryColor: 'rgb(250, 223, 147)',
    toggleBorder: '#6B8096',
    gradient: 'linear-gradient(#091236, #1E215D)',
}

function MyApp({ Component, pageProps }) {
    const [ userTheme, setUserTheme ] = useState('lightMode')

    return (
        <ThemeProvider theme={testDarkTheme}>
            <GlobalStyles />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp