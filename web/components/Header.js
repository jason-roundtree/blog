import Link from 'next/link'

const Header = () => {
    return (
        <header>
            <nav>
                <Link href='/'>
                    <a>Blog</a>
                </Link>
                <a href='http://jasonroundtree.info/' target="_blank">Personal Site</a>
            </nav>
        </header>
    )
}

export default Header