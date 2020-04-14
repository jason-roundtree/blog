import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'

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
    font-size: 2em;
    
`
const ToggleBtn = styled.img`
    height: 2em;
    width: 2em;
    &:hover {
        cursor: pointer;
    }
`

function HeaderLayout(props) {
    console.log('propsaaa: ', props)
    return (
        <>
            <Head>
                <title>Jason Roundtree - Blog</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                {/* <link href="https://fonts.googleapis.com/css?family=Archivo+Narrow:400,500,600,700&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css?family=Lustria&display=swap" rel="stylesheet"></link>
                

                <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap" rel="stylesheet"></link> */}
                {/* <link href="https://fonts.googleapis.com/css2?family=Lato:300,400,700&display=swap" rel="stylesheet"></link> */}
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans300,400,600&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Cuprum&family=Fjalla+One&display=swap" rel="stylesheet"></link>
            </Head>

            <Header>
                <nav>
                    <H1>
                        <Link href='/'>
                            <a>Jason Roundtree</a>
                        </Link>
                        
                    </H1>
                    {/* <Span>a web dev blog, by </Span><a href='http://jasonroundtree.info/' target="_blank">jason roundtree</a> */}
                    
                </nav>
                <ToggleBtn
                    src='/images/029-moon-6.svg'
                    onClick={props.onToggleThemeClick}
                ></ToggleBtn>

            </Header>

            <main>{props.children}</main>
        </>
    )
}

export default HeaderLayout