import Head from 'next/head'
import Link from 'next/link'

function HeaderLayout() {
    return (
        <div>
            <Head>
                <title>Blog - Jason Roundtree</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="https://fonts.googleapis.com/css?family=Archivo+Narrow:400,500,600,700&display=swap" rel="stylesheet"></link>
            </Head>

            <header>
                <nav>
                    <Link href='/'>
                        <h1>
                            <a>Blog</a>
                        </h1>
                    </Link>
                    {/* <a href='http://jasonroundtree.info/' target="_blank">Personal Site</a> */}
                </nav>
            </header>
        </div>
    )
}

export default HeaderLayout