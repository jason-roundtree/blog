import client from '../../client'
import HeaderLayout from '../../components/HeaderLayout'
import styled from 'styled-components'
import moment from 'moment'

const P = styled.p`
    margin-top: 1.5em;
`

function Post(props) {
    return (
        <HeaderLayout>
            <article>
                <h2>{props.title}</h2>
                <P>{moment.utc(props._createdAt).format("LL")}</P>
                <P>{props.description}</P>
                <P>{props.body}</P>
            </article>
        </HeaderLayout>
    )
}

Post.getInitialProps = async function(context) {
    // default the slug so that it doesn't return "undefined"
    // console.log('context: ', context)
    const { slug = "" } = context.query
    const data = await client.fetch(`
        *[_type == "post" && slug.current == $slug][0]
    `, { slug })
    // console.log('data: ', data)
    return data
}

export default Post