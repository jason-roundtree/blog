import { createGlobalStyle } from 'styled-components';
import { colors } from '../colorsAndThemes'

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
        font-family: 'Open Sans', sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* font-family: 'Archivo Narrow', sans-serif; */
        /* font-family: 'Nanum Gothic', sans-serif; */
        /* font-family: 'Lato', sans-serif; */
        
        font-weight: 300;
        color: var(--primary-color)
    }

    h2 {
        font-size: 1.5em;
        margin-top: 1.5em;
        font-family: 'Cuprum', sans-serif;
        font-family: 'Fjalla One', sans-serif;
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
        line-height: 1.5em;
        color: ${({ theme }) => theme.text};
    }

    .selectedTag.selectedTag {
        background-color: var(--primary-darker)
    }
    pre {
        font-family: 'Courier Prime', monospace;
    }
`
