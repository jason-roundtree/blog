import client from '../../client'
import HeaderLayout from '../../components/HeaderLayout'
import styled from 'styled-components'
import moment from 'moment'
// import Prism from 'prismjs/components/prism-core'
import Highlight, { defaultProps } from "prism-react-renderer"
import prismTheme from 'prism-react-renderer/themes/nightOwl'

const DivBody = styled.div`
    margin-top: 1.5em;
    font-size: 1.15em;
    line-height: 1.75em;
`
const PDesc = styled.p`
    font-size: 1.25em;
    color: ${({ theme }) => theme.primaryColor};
    margin: 3px 0 0;
`
const PDate = styled(PDesc)`
    font-size: 1.15em;
    color: ${({ theme }) => theme.text};
`
const Pre = styled.pre`
    font-family: 'Courier Prime', monospace;
    font-size: .85em;
    text-align: left;
    margin: 1em 0;
    padding: 0.5em;
    & .token-line {
        line-height: 1.3em;
        height: 1.3em;
    }
`
const LineNo = styled.span`
    display: inline-block;
    width: 2em;
    user-select: none;
    opacity: 0.3;
`

function formatParagraphBlock(block) {
    return <p>{block}</p>
}

function formatCodeBlock(block) {
    return (
        <Highlight {...defaultProps} theme={prismTheme} code={block} language="jsx">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Pre className={className} style={style}>
                {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                    <LineNo>{i + 1}</LineNo>
                    {line.map((token, key) => <span {...getTokenProps({ token, key })} />)}
                </div>
                ))}
            </Pre>
            )}
        </Highlight>
    )
}

function Post(props) {
    console.log('propsPost: ', props.body)
    const postContent = []
    props.body.forEach(section => {
            if (section._type === 'block') {
                let formattedPara = formatParagraphBlock(section.children[0].text)
                postContent.push(formattedPara)
            } else if (section._type === 'code') {
                let formattedCode = formatCodeBlock(section.code)
                postContent.push(formattedCode)
            }
    })

    // console.log('postContent: ', postContent)
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
                <DivBody>
                    {postContent.map(content => content)}
                </DivBody>
            
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