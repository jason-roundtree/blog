import client from '../client'
import Link from 'next/link'
// import groq from 'groq'
import Header from '../components/Header'

const Index = (props) => {
    console.log('props: ', props)
    const propsArray = Object.values(props)
    const posts = propsArray.slice(0, propsArray.length - 1)
    console.log('posts: ', posts)
    return (
        <div>
            <Header />
            <h1>Welcome to my blog!</h1>

            {posts.map(
                ({ _id, title = '', slug = '', _createdAt = '' }) => (
                    <li key={_id}>
                        <Link
                            href='/post/[slug]'
                            as={`/post/${slug.current}`}
                        >
                            <a>{title}</a>
                        </Link>
                        <p>{_createdAt}</p>
                    </li>
                )
            )}
        </div>
    )
}

Index.getInitialProps = async function() {
    return await client.fetch(`
        *[_type == "post"]
    `)
}

export default Index