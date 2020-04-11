const colors = {
    darkThemeColorText: `rgb(250,250,250)`,
    darkThemeColorBg: `rgb(54, 53, 55)`,
    lightThemeColorText: `rgb(54, 53, 55)`,
    lightThemeColorBg: `rgb(250,250,250)`,
    primaryColor: `rgb(3, 152, 252)`,
    primaryColorDarker: `rgb(0, 85, 143)`,
    secondaryColor: `rgb(250, 223, 147)`,
    tertiaryColor: `rgb(16, 46, 36)`
}

const modes = {
    dark: {
        body: `${colors.darkThemeColorBg}`,
        text: `${colors.darkThemeColorText}`,
        primaryColor: `${colors.secondaryColor}`,
        secondaryColor: `${colors.primaryColorDarker}`,
    },
    light: {
        body: `${colors.lightThemeColorBg}`,
        text: `${colors.lightThemeColorText}`,
        primaryColor: `${colors.primaryColorDarker}`,
        secondaryColor: `${colors.secondaryColor}`,
    }
}

export default modes