import client from '../client'
import Link from 'next/link'
import HeaderLayout from '../components/HeaderLayout'
import styled from 'styled-components'
import moment from 'moment'
import '../globalStyles.css'

const ListItem = styled.li`
    margin: 1em 0;
    font-size: 1.75em;
`
const DateP = styled.p`
    font-size: .85em;
`

const Index = (props) => {
    // console.log('props: ', props)
    const propsArray = Object.values(props)
    // last item in props is next.js metadata
    const posts = propsArray.slice(
        0, propsArray.length - 1
    )
    // console.log('posts: ', posts)
    return (
        <HeaderLayout>
            <h2>Posts:</h2>
            {posts.map(
                ({ 
                    _id, 
                    _createdAt,
                    slug, 
                    title, 
                    description, 
                }) => (
                    <ListItem key={_id}>
                        <Link
                            href='/post/[slug]'
                            as={`/post/${slug.current}`}
                        >
                            <a>{title}</a>
                        </Link>
                        <p>{description}</p>
                        <DateP>
                            {moment.utc(_createdAt).format("LL")}
                        </DateP>
                    </ListItem>
                )
            )}
        </HeaderLayout>
    )
}

Index.getInitialProps = async function() {
    return await client.fetch(`
        *[_type == "post"]
    `)
}

export default Index