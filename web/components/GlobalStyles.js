import { createGlobalStyle } from 'styled-components';
import { colors } from '../colorScheme'

export const GlobalStyles = createGlobalStyle`
    :root {
        --primary-color: ${colors.primaryColor};
        --primary-darker: ${colors.primaryColorDarker};
        --secondary-color: ${colors.secondaryColor};
        --tertiary-color: ${colors.tertiaryColor};
    }

    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Archivo Narrow', sans-serif;
        color: var(--primary-color)
    }

    h2 {
        font-size: 2em;
        font-weight: 700;
        margin-top: .75em;
    }

    main {
        padding: 0 2.5em 2.5em 2.5em;
    }

    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }

    p {
        font-family: 'Lustria', serif;
        line-height: 1.75em;
        color: ${({ theme }) => theme.text};
    }

    .selectedTag.selectedTag {
        background-color: var(--primary-darker)
    }
`
