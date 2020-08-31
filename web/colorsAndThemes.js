import duotoneLight from 'prism-react-renderer/themes/duotoneLight'
import duotoneDark from 'prism-react-renderer/themes/duotoneDark'

const colors = {
    offWhite: `rgb(252, 249, 237)`,
    darkGrey: `rgb(45, 45, 45)`,
    primaryColor: `rgb(3, 152, 252)`, 
    primaryColorDarker: `rgb(0, 85, 143)`,
    secondaryColor: `rgb(250, 223, 147)`,
    tertiaryColor: `rgb(16, 46, 36)`,
    articleLinksLight: `rgb(114, 143, 203)`,
    articleLinksDark: `rgb(255, 204, 153)`,
}

const themes = {
    dark: {
        body: colors.darkGrey,
        text: colors.offWhite,
        primaryColor: colors.secondaryColor,
        secondaryColor: colors.primaryColorDarker,
        iconSrc: '/sun.svg',
        iconAlt: 'Icon of moon for "Dark Mode" theme',
        syntax: duotoneDark,
        asideBackground: duotoneDark.plain.backgroundColor,
        articleLinks: colors.articleLinksDark
    },
    light: {
        body: colors.offWhite,
        text: colors.darkGrey,
        primaryColor: colors.primaryColorDarker,
        secondaryColor: colors.secondaryColor,
        iconSrc: '/moon.svg',
        iconAlt: 'Icon of sun for "Light Mode" theme',
        syntax: duotoneLight,
        asideBackground: duotoneLight.plain.backgroundColor,
        articleLinks: colors.articleLinksLight
    }
}

export { themes as default, colors }