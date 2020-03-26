import Head from 'next/head'
import Link from 'next/link'
// import styles from './Header.module.css'
import styled from 'styled-components'

const Header = styled.header`
    /* margin-bottom: 2em; */
    padding: 1em 1.5em;
    background: rgb(250, 223, 147);
`
const Span = styled.span`
    /* display: block; */
    /* font-size: .2em; */
    margin-left: 1em;
`

function HeaderLayout(props) {
    return (
        <>
            <Head>
                <title>Blog - Jason Roundtree</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="https://fonts.googleapis.com/css?family=Archivo+Narrow:400,500,600,700&display=swap" rel="stylesheet"></link>
                {/* <link href="https://fonts.googleapis.com/css?family=Viga&display=swap" rel="stylesheet"></link> */}
            </Head>

            <Header>
                <nav>
                    <h1>
                        <Link href='/'>
                            <a>Goober's Trundle</a>
                        </Link>
                    </h1>
                    <Span>a web dev blog, by </Span><a href='http://jasonroundtree.info/' target="_blank">jason roundtree</a>
                </nav>
            </Header>

            <main>{props.children}</main>
        </>
    )
}

export default HeaderLayout