import client from '../../client'
import HeaderLayout from '../../components/HeaderLayout'
import styled from 'styled-components'
import moment from 'moment'
// import Prism from 'prismjs/components/prism-core'
import Highlight, { defaultProps } from 'prism-react-renderer'
import themes from '../../colorsAndThemes'
// TODO: import both light and dark theme in one line. Can it also be combined with above improt?
console.log('themes: ', themes)

const MainContent = styled.div`
    margin-top: 1.5em;
    font-size: 1.15em;
    line-height: 1.75em;
`
const PDesc = styled.p`
    font-size: 1.1em;
    color: ${({ theme }) => theme.primaryColor};
    margin: 3px 0 0;
`
const PDate = styled(PDesc)`
    font-size: 1em;
    color: ${({ theme }) => theme.text};
`
const PBlock = styled.p`
    margin-bottom: 1em;
`
// TODO: fix overflow and add horizontal scroll
const Pre = styled.pre`
    /* font-family: 'Courier Prime', monospace;
    font-family: 'Cutive Mono', monospace; */
    font-family: 'Nanum Gothic Coding', monospace;
    font-size: .9em;
    overflow: auto;
    text-align: left;
    margin: 1em 0;
    padding: 0.5em;
    & .token-line {
        line-height: 1.3em;
        height: 1.3em;
    }
    /* box-shadow: 0px 6px 7px -4px; */
`
const LineNo = styled.span`
    display: inline-block;
    width: 2em;
    user-select: none;
    opacity: 0.3;
`
// TODO: add block type for blockquote-like content



function Post(props) {
    console.log('propsPost: ', props)
    const postContent = []
    function formatParagraphBlock(content, key) {
        return <PBlock key={key}>{content}</PBlock>
    }
    
    function prismafyCodeBlock(content, _key) {
        return (
            <Highlight 
                {...defaultProps} 
                theme={
                    props.themeString === 'light'
                        ? themes.light.syntax
                        : themes.dark.syntax
                } 
                code={content} 
                language="jsx"
                key={_key}
            >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <Pre className={className} style={style}>
                        {tokens.map((line, i) => (
                            <div {...getLineProps({ line, key: i })}>
                                <LineNo>{i + 1}</LineNo>
                                {line.map((token, key) => {
                                    return (
                                        <span {...getTokenProps({ token, key })} />
                                    )
                                })}
                            </div>
                        ))}
                    </Pre>
                )}
            </Highlight>
        )
    }

    
    props.body && props.body.forEach(section => {
        if (section._type === 'block') {
            postContent.push(
                formatParagraphBlock(section.children[0].text, section._key)
            )
        } else if (section._type === 'code') {
            postContent.push(
                prismafyCodeBlock(section.code, section._key)
            )
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
                {/* // TODO: Add _updatedAt field? */}
                <PDate>{moment.utc(props._createdAt).format("LL")}</PDate>
                <MainContent>
                    {postContent.map(content => content)}
                </MainContent>
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