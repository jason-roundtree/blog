import Head from 'next/head'
import Link from 'next/link'
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
    font-size: 1.5em;
`
const ToggleBtn = styled.img`
    height: 1.8em;
    width: 1.8em;
    &:hover { cursor: pointer; }
`

function Layout(props) {
    // console.log('Layout props: ', props)
    const BtnTheme = props.themeString === 'light'
        ? themes['light']
        : themes['dark']

    return (
        <>
            <Head>
                {/* Global site tag (gtag.js) - Google Analytics */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-128287631-2"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html:`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments)}
                            gtag('js', new Date());
                            gtag('config', 'UA-128287631-2');
                        `
                    }}
                />

                <title>Jason Roundtree - Blog</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Cuprum&family=Fjalla+One&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap" rel="stylesheet"/>
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
                    src={`${BtnTheme.iconSrc}`}
                    alt={`${BtnTheme.iconAlt}`}
                    onClick={props.onToggleThemeClick}
                ></ToggleBtn>
            </Header>

            <Main>{props.children}</Main>
        </>
    )
}

export default Layout