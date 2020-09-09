import { createGlobalStyle } from 'styled-components';
import { colors } from '../colorsAndThemes'

export const GlobalStyles = createGlobalStyle`
    :root {
        --primary-color: ${colors.primaryColor};
        --primary-darker: ${colors.primaryColorDarker};
        --secondary-color: ${colors.secondaryColor};
        --tertiary-color: ${colors.tertiaryColor};
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-weight: 400;
        color: ${({ theme }) => theme.primaryColor};
    }
    
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        font-family: 'Nunito Sans', sans-serif;
    }

    h2 {
        font-size: 1.75em;
        margin-top: 1.5em;
        font-family: 'Fjalla One', sans-serif;
    }

    main {
        padding: 0 2.25em 2.25em 2.25em;
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

    button {
        padding: 7px 10px;
        color: var(--secondary-color);
        font-size: 1em;
        border: none;
        background-color: var(--primary-color);
        font-family: 'Nanum Gothic Coding', monospace;
        &:hover {
            cursor: pointer;
        }
    }

    pre {
        font-family: 'Courier Prime', monospace;
    }
    
    @media screen and (max-width: 600px) {
        body {
            font-size: 80%;
        }
    }
`
