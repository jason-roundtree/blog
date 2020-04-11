import client from '../../client'
import HeaderLayout from '../../components/HeaderLayout'
import styled from 'styled-components'
import moment from 'moment'

const P = styled.p`
    margin-top: 1.5em;
`
const H3 = styled.h3`
    font-size: 1.5em;
    font-family: 'Lustria', serif;
    color: ${({ theme }) => theme.primaryColor};
    margin: 3px 0;
`
const DateH3 = styled(H3)`
    font-size: 1em;
    font-weight: normal;
    color: ${({ theme }) => theme.text};
`

function Post(props) {
    return (
        <HeaderLayout>
            <article>
                <h2>{props.title}</h2>
                <H3>{props.description}</H3>
                <DateH3>{moment.utc(props._createdAt).format("LL")}</DateH3>
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
    return data
}

export default Post