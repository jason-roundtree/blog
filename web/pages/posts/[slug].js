import client from '../../client'
import HeaderLayout from '../../components/HeaderLayout'
import styled from 'styled-components'
import moment from 'moment'
import Prism from 'prismjs/components/prism-core'
import Highlight, { defaultProps } from 'prism-react-renderer'
import themes from '../../colorsAndThemes'

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
const AsideBlock = styled.div`
    margin-bottom: 1em;
    padding: 1em 2em;
    background-color: ${({ theme }) => theme.asideBackground};
    font-size: .9em;
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

    function paragraphBlock(content, key) {
        return <PBlock key={key}>{content}</PBlock>
    }

    function asideStringNewlines(content, key) {
        const contentArray = content.split('\n')
        console.log('contentArray: ', contentArray)
        const renderedLines = []
        for (const line of contentArray) {
            renderedLines.push(<div>{line}</div>)
        }
        return <AsideBlock>{renderedLines}</AsideBlock>
        // return <AsideBlock key={key}>{content}</AsideBlock>
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
        // TODO: change to switch:
        if (section._type === 'block') {
            postContent.push(
                paragraphBlock(
                    section.children[0].text, section._key
                )
            )
        } else if (section._type === 'code') {
            postContent.push(
                prismafyCodeBlock(section.code, section._key)
            )
        } else if (section._type === 'post_aside') {
            postContent.push(
                asideStringNewlines(
                    section.string_content, section._key
                )
            )
        }
    })

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

export async function getStaticPaths() {
    const posts = await client.fetch(`
        *[ _type == "post" ]{
            ..., 
            tags[]->{_id, name}
        }
    `)
    // Get the paths we want to pre-render based on posts
    const paths = posts.map(post => ({
        params: { slug: post.slug.current },
    }))
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}
  
export async function getStaticProps(context) {
    const { slug } = context.params
    const post = await client.fetch(`
        *[_type == "post" && slug.current == $slug][0]
    `, { slug } )
    return { props: post }
}
  
// Post.getInitialProps = async function(context) {
//     // default the slug so that it doesn't return "undefined"
//     // console.log('context: ', context)
//     const { slug = "" } = context.query
//     const data = await client.fetch(`
//         *[_type == "post" && slug.current == $slug][0]
//     `, { slug })
//     return data
// }

export default Post