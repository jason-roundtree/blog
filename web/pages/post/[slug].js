import client from '../../client'
import HeaderLayout from '../../components/HeaderLayout'
import styled from 'styled-components'
import moment from 'moment'

const PBody = styled.p`
    margin-top: 1.5em;
    font-size: 1.15em;
    /* font-weight: 300; */
    line-height: 1.75em;
`
const PDesc = styled.p`
    font-size: 1.25em;
    /* font-family: 'Lustria', serif; */
    color: ${({ theme }) => theme.primaryColor};
    margin: 3px 0 0;
`
const PDate = styled(PDesc)`
    font-size: 1.15em;
    /* font-weight: normal; */
    color: ${({ theme }) => theme.text};
`

function Post(props) {
    return (
        <HeaderLayout onToggleThemeClick={props.onToggleThemeClick}>
            <article>
                <h2>{props.title}</h2>
                <PDesc>{props.description}</PDesc>
                <PDate>{moment.utc(props._createdAt).format("LL")}</PDate>
                <PBody>{props.body}</PBody>
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