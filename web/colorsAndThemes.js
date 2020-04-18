const colors = {
    white: `rgb(250,250,250)`,
    darkGrey: `rgb(54, 53, 55)`,
    primaryColor: `rgb(3, 152, 252)`, 
    primaryColorDarker: `rgb(0, 85, 143)`,
    secondaryColor: `rgb(250, 223, 147)`,
    tertiaryColor: `rgb(16, 46, 36)`
}

const themes = {
    dark: {
        body: `${colors.darkGrey}`,
        text: `${colors.white}`,
        primaryColor: `${colors.secondaryColor}`,
        secondaryColor: `${colors.primaryColorDarker}`,
        iconSrc: '/images/sun.svg',
        iconAlt: 'Icon of moon for "Dark Mode" theme'
    },
    light: {
        body: `${colors.white}`,
        text: `${colors.darkGrey}`,
        primaryColor: `${colors.primaryColorDarker}`,
        secondaryColor: `${colors.secondaryColor}`,
        iconSrc: '/images/moon.svg',
        iconAlt: 'Icon of sun for "Light Mode" theme'
    }
}

export { themes as default, colors }