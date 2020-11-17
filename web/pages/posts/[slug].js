import { useEffect, useState } from 'react'
import Link from 'next/link'
import client from '../../client'
import styled from 'styled-components'
import moment from 'moment'
import Highlight, { defaultProps } from 'prism-react-renderer'
import Layout from '../../components/Layout'
import PostImg from '../../components/PostImg'
import themes from '../../colorsAndThemes'
import matchExtLinkMarkDef from '../../utils/matchExtLinkMarkDef'
// import img from '/img.svg'

const MainContent = styled.div`
    margin-top: 1.5em;
    font-size: 1.25em;
    line-height: 1.75em;
`
// const PostTitle = styled.h2`
// `
const PostDescription = styled.p`
    font-size: 1.3em;
    font-weight: 600;
    color: ${({ theme }) => theme.primaryColor};
`
const PostDate = styled(PostDescription)`
    font-weight: 400;
    font-size: 1em;
    color: ${({ theme }) => theme.text};
`
const ArticleBlock = styled.div`
    margin-bottom: 1em;
    color: ${({ theme }) => theme.text};
`
const AsideBlock = styled.div`
    margin-bottom: 1em;
    padding: 1em 1.5em;
    background-color: ${({ theme }) => theme.asideBackground};
    font-size: .9em;
    line-height: 1.5em;
    border: 1px solid rgba(114, 143, 203, .5);
    /* border-left: 5px solid rgba(114, 143, 203, .5); */
`
const Pre = styled.pre`
    font-family: 'Fira Mono', monospace;
    font-size: .80em;
    overflow: auto;
    text-align: left;
    margin: 1em 0;
    padding: 0.5em;
    /* TODO: is this really doing much? */
    & .token-line {
        line-height: 1.4em;
        height: 1.3em;
    }
`
const LineNo = styled.span`
    display: inline-block;
    width: 2em;
    user-select: none;
    opacity: 0.3;
`
const InlineCodeMain = styled.span`
    font-family: 'Fira Mono', monospace;
    display: inline-block;
    font-size: .85em;
    line-height: 1.3;
    border-radius: 3px;
    background-color: ${({ theme }) => theme.secondaryColor};
    padding: 1px 3px;
`
// TODO: why does this format inline code in asideWithCode all wonky when I remove the 0 padding
const AsideCode = styled(InlineCodeMain)`
    padding: 0 5px;
`
const AsideCodeDescription = styled.p`
    margin-top: 1.1em;
    display: block;
    font-weight: 400;
`
const CodeNote = styled.p`
    /* margin-top: -.5em; */
    margin-bottom: 1.2em;
    font-style: italic;
    color: ${({ theme }) => theme.primaryColor};
`
const ExternalLink = styled.a`
    text-decoration: underline;
    color: ${({ theme }) => theme.articleLinks};
`
const Button = styled.button`
    font-size: .8em;
    font-weight: bold;
    display: block; 
    margin: auto;
`
const H3 = styled.h3`
    font-size: 1.5em;
    font-weight: bold;
    margin-top: 1.5em;
    font-family: 'Cuprum', sans-serif;
`
const UL = styled.ul`
    margin-bottom: 15px;
`

const InfoIcon = styled.img`
    float: left;
    margin: 0 15px 0 0;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.secondaryColor};
    box-shadow: ${({ theme }) => `0 0 15px ${theme.secondaryColor}`};
    @media screen and (max-width: 600px) {
        margin: 0 5px 0 0;
    }
`
const ListItem = styled.li`
    /* &:before {
        content: ''
    } */
    list-style-type: square;
    color: ${({ theme }) => theme.text};
`
function Post(props) {
    const [articleBtmPos, setArticleBtmPos] = useState(0)
    // console.log('Post props: ', props)
    
    useEffect(() => {
        const articleBottom = document.querySelector('article').getClientRects()[0].bottom
        setArticleBtmPos(articleBottom)
    }, [])

    function handleScrollToTop() {
        window.scroll({
            top: 0, 
            behavior: 'smooth'
        })
    }

    function formatListItem(listItemParts) {
        const listItem = []
        for (let i = 0; i < listItemParts.length; i++) {
            if (listItemParts[i]._type === 'inline_code') {
                listItem.push(
                    <InlineCodeMain key={listItemParts[i]._key}>
                        {listItemParts[i].str_content_inline}
                    </InlineCodeMain>
                )
            } else {
                listItem.push(listItemParts[i].text)
            }
        }
        return listItem
    }

    const postContent = []
    // TODO: change these to use functional loops?
    // TODO: move some of these functions to a separate file so this file is cleaner
    function paragraphBlock(section) {
        // console.log('paragraphBlock section: ', section)
        const blockContent = []
        for (let i = 0; i < section.children.length; i++) {
            // TODO: find a better way to check type of section
            if (!section.children[i].marks) {
                // console.log('section.children[i]: ', section.children[i])
                blockContent.push(
                    <InlineCodeMain key={section.children[i]._key}>
                        {section.children[i].str_content_inline}
                    </InlineCodeMain>
                )
            }
            // returns href of external link that matches href mark with actual href info
            else if (section.children[i].marks.length > 0) {
                const hrefTarget = matchExtLinkMarkDef(
                    section.children[i], 
                    section.markDefs
                )
                hrefTarget && (
                    blockContent.push(
                        <ExternalLink 
                            target="_blank"
                            href={hrefTarget.href}
                            key={hrefTarget._key}
                        >
                            {hrefTarget.text}
                        </ExternalLink>
                    )
                )
            } 
            else if (section.style === 'h3') {
                blockContent.push(<H3 key={section._key}>{section.children[0].text}</H3>)
            }
            // unformatted text block
            else {
                blockContent.push(section.children[i].text)
            }
        }
        // console.log('blockContent: ', blockContent)
        return <ArticleBlock key={section._key}>{blockContent}</ArticleBlock>
    }

    function asideStringNewlines(content, _key) {
        const contentArray = content.split('\n')
        const renderedLines = []
        for (let i = 0; i < contentArray.length; i++) {
            renderedLines.push(
                <p key={i}>{contentArray[i]}</p>
            )
        }
        return (
            <AsideBlock key={_key}>
                {renderedLines}
            </AsideBlock>
        )
    }
    
    function asideWithCode(content, _key, isAsideNote) {
        // console.log('asideWithCode: ', content)
        const renderedContent = []
        for (let i = 0; i < content.length; i++) {
            const { children } = content[i]
            if (children.length > 1) {
                // console.log('children: ', children)
                for (let j = 0; j < children.length; j++) {
                    // inline text
                    if (children[j].text) {
                        renderedContent.push(children[j].text)
                    } else {
                        renderedContent.push(
                            <AsideCode key={children[j]._key}>
                                {children[j].str_content_inline}
                            </AsideCode>
                        )
                    }
                }
            } 
            // TODO: Remove asterisk from sanity and fix rendering if necessary
            else if (children.length === 1 && children[0].text[0] === '*') {
                renderedContent.push(
                    <CodeNote key={children[0]._key}>
                        {children[0].text.slice(1)}
                    </CodeNote>
                )
            }
            // aside note with no special formatting
            else if (isAsideNote) {
                renderedContent.push(children[0].text)
            }
            else {
                renderedContent.push(
                    <AsideCodeDescription key={children[0]._key}>
                        {children[0].text}
                    </AsideCodeDescription>
                )
            }
        }
        // console.log('renderedContent: ', renderedContent)
        return (
            <AsideBlock key={_key}>
                {isAsideNote && (
                    <InfoIcon 
                        src="/info.svg" 
                        width="40" 
                        height="40" 
                        alt="info icon" 
                    /> 
                )}
                {renderedContent}
            </AsideBlock>
        )
    }

    function asideNote(content, _key) {
        return asideWithCode(content, _key, true)
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

    let list = []
    props.body && props.body.forEach(section => {
        // console.log('section._type: ', section._type)
        if (section.listItem) {
            list.push(
                <ListItem>{formatListItem(section.children)}</ListItem>
            )
        } else {
            if (list.length > 0) {
                postContent.push(
                    <UL>{list}</UL>
                )
                list = []
            }
            switch(section._type) {
                case 'block':
                    postContent.push(
                        paragraphBlock(section)
                    )
                    break
                case 'code':
                    postContent.push(
                        prismafyCodeBlock(section.code, section._key)
                    )
                    break
                case 'post_aside':
                    postContent.push(
                        asideStringNewlines(
                            section.str_content_newline, section._key
                        )
                    )
                    break
                case 'post_aside_note':
                    postContent.push(
                        asideNote(section.str_content, section._key)
                    )
                    break
                case 'post_aside_with_code':
                    postContent.push(
                        asideWithCode(section.body, section._key)
                    )
                    break
                // default:
                //     console.log('default case')
            }
            // console.log('postContent: ', postContent)
        }
    })


    return (
        <Layout 
            onToggleThemeClick={props.onToggleThemeClick}
            themeString={props.themeString}
        >
            <article>
                <h2>{props.title}</h2>
                
                <PostDescription>{props.description}</PostDescription>

                {/* // TODO: Add _updatedAt field? */}
                <PostDate>
                    {props.manual_pub_date 
                        ? moment.utc(props.manual_pub_date).format("LL")
                        : moment.utc(props._createdAt).format("LL")
                    }
                </PostDate>

                <PostImg postImg={props.postImg} />

                <MainContent>
                    {postContent.map(content => content)}
                </MainContent>
            </article>

            {articleBtmPos > 1000 && (
                <Button onClick={handleScrollToTop}>
                    Back to top
                </Button>
            )}
            
            <br />

            <Link href="/">
                <a>
                    <Button>Blog Home</Button>
                </a>
            </Link>
            
        </Layout>
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
    // Pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}
  
export async function getStaticProps(context) {
    const { slug } = context.params
    const post = await client.fetch(`
        *[_type == "post" && slug.current == $slug][0]{
            ...,
            "postImg": image.asset->,
        }
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