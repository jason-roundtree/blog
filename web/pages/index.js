import client from '../client'
import Link from 'next/link'
import HeaderLayout from '../components/HeaderLayout'
import "../globalStyles.css"

const Index = (props) => {
    // console.log('props: ', props)
    const propsArray = Object.values(props)
    const posts = propsArray.slice(0, propsArray.length - 1)
    console.log('posts: ', posts)
    return (
        <div>
            <HeaderLayout />
            <h2>Posts:</h2>

            {posts.map(
                ({ _id, title = '', slug = '', _createdAt = '' }) => (
                    <li key={_id}>
                        <Link
                            href='/post/[slug]'
                            as={`/post/${slug.current}`}
                        >
                            <a>{title}</a>
                        </Link>
                        <span>{_createdAt}</span>
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