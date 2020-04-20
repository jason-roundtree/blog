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
{/* <pre>
    <code className="language-js">
        ${section.code}
    </code>
</pre> */}

function Post(props) {
    console.log('propsPost: ', props.body)
    // let postContent = ''
    // props.body.forEach(section => {
    //         if (section._type === 'block') {
    //             postContent += section.children[0].text
    //         } else if (section._type === 'code') {
    //             postContent += section.code
    //         }
    // })

    return (
        <HeaderLayout 
            onToggleThemeClick={props.onToggleThemeClick}
            themeString={props.themeString}
        >
            <article>
                <h2>{props.title}</h2>
                <PDesc>{props.description}</PDesc>
                <PDate>{moment.utc(props._createdAt).format("LL")}</PDate>
                {/* <PBody>{props.body.map(section => section.children)}</PBody> */}
                {/* <PBody>
                    {postContent}
                </PBody>
                <pre>
                    <code className="language-js">
                        {`
        function test() { 
            return 'hello hello!'
        }
                        `}
                    </code>
                </pre> */}
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