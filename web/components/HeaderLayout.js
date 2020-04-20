import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'
import themes from '../colorsAndThemes'

const Main = styled.main`
    max-width: 750px;
    margin: 0 auto;
`
const Header = styled.header`
    padding: 1em 40px;
    background: rgb(250, 223, 147);
    color: ${({ theme }) => theme.primaryColor};
    background: ${({ theme }) => theme.secondaryColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const H1 = styled.h1`
    /* font-weight: normal; */
    font-size: 1.5em;
`
const ToggleBtn = styled.img`
    height: 1.8em;
    width: 1.8em;
    &:hover { cursor: pointer; }
    /* &:active {
        height: 1.6em;
        width: 1.6em;
    } */
`

function HeaderLayout(props) {
    // console.log('HeaderLayout props: ', props)
    const theme = props.themeString === 'light'
        ? themes['light']
        : themes['dark']

    return (
        <>
            <Head>
                <title>Jason Roundtree - Blog</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans300,400,600&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Cuprum&family=Fjalla+One&display=swap" rel="stylesheet"></link>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/themes/prism.min.css"
                ></link>
            </Head>

            <Header>
                <nav>
                    <H1>
                        <Link href='/'>
                            <a>Jason Roundtree - Blog</a>
                        </Link>
                    </H1>
                    {/* <Span>a web dev blog, by </Span><a href='http://jasonroundtree.info/' target="_blank">jason roundtree</a> */}
                </nav>
                <ToggleBtn
                    src={`${theme.iconSrc}`}
                    alt={`${theme.iconAlt}`}
                    onClick={props.onToggleThemeClick}
                ></ToggleBtn>
            </Header>

            <Main>{props.children}</Main>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/prism.min.js"></script>
        </>
    )
}

export default HeaderLayout