import client from '../client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
// import useSWR from 'swr'
import styled from 'styled-components'
import moment from 'moment'
import HeaderLayout from '../components/HeaderLayout'
import KeywordTags from '../components/KeywordTags'
import '../globalStyles.css'

const ListItem = styled.li`
    margin: 15px 0 0 15px;
    padding: 10px 15px;
    font-size: 1.75em;
    border: 1px solid rgb(0, 85, 143);
`
const TagListItem = styled.li`
    display: inline-block;
    margin-right: 5px;
    padding: 3px 5px;
    font-size: .5em;
    background-color: rgb(250, 223, 147);
`
const DateP = styled.p`
    font-size: .75em;
`

function Index({ posts, tags }) {
    console.log('posts: ', posts)
    // console.log('tags: ', tags)
    const [ allPosts, setAllPosts ] = useState(posts)
    const [ filteredPosts, setFilteredPosts ] = useState([])
    const [ tagCounts, setTagCounts ] = useState([])
    const [ filteredTags, setFilteredTags ] = useState([])
    // console.log('tagCounts: ', tagCounts)
    console.log('filteredTags global: ', filteredTags)
    console.log('filteredPosts global: ', filteredPosts)
    
    useEffect(() => {
        tags.forEach(async tag => {
            const count = await client.fetch(`
                count(*[ _type == "post" && $tagID in tags[]._ref ])
            `, { tagID: tag._id })
            // TODO: this check is in case i've added a tag in sanity studio but haven't assigned it to a post yet:
            if (count > 0) {
                const tagCount = {
                    _id: tag._id,
                    name: tag.name,
                    count
                }
                // TODO: Should i call all these at once??
                setTagCounts(state => [...state, tagCount])
            }
        })
    }, [])

    
    useEffect(() => {
        console.log('getFilteredPosts')
        console.log('filteredTags useEffect: ', filteredTags)

        // TODO: not totally sure how this mounted variable 
        // and the cleanup function at the end are working
        // to prevent react's memory leak warning:
        // https://www.debuggr.io/react-update-unmounted-component/
        let mounted = true
        if (filteredTags.length > 0 && mounted) {
        // if (filteredTags.length > 0) {
            const allMatchedPosts = filteredTags.map(tag => {
                return client.fetch(`
                    *[ _type == "post" && $tagID in tags[]._ref ]{
                        ..., 
                        tags[]->{_id, name}
                    }
                `, { tagID: tag })
            })
            Promise.all(allMatchedPosts).then(data => {
                // console.log('then', data)
                const flattenedPosts = data.flat()
                const uniqueArray = (posts) => [
                    ...new Set(posts.map(postObj => JSON.stringify(postObj)))
                ].map(postStr => JSON.parse(postStr))
                const uniquePosts = uniqueArray(flattenedPosts)
                console.log('uniquePosts: ', uniquePosts)
                setFilteredPosts(uniquePosts)
            })
            console.log('sadsadszddsa')
        } else {
            setFilteredPosts([])
        }
        return () => mounted = false
    }, [filteredTags])

    function handleTagFilter(e) {
        const selectedTagID = e.target.id
        console.log('selectedTagID: ', selectedTagID)
        if (!filteredTags.includes(selectedTagID)) {
            setFilteredTags(state => [...state, selectedTagID])
        } else {
            setFilteredTags(filteredTags.filter(tag => {
               return tag !== selectedTagID
            }))
        }
    }

    const postsToRender = filteredPosts.length > 0 
        ? filteredPosts 
        : allPosts

    return (
        <HeaderLayout>
            <h2>Tags:</h2>
            <KeywordTags 
                tags={tagCounts}
                handleTagFilter={handleTagFilter}
                filteredTags={filteredTags}
            />

            <h2>Posts:</h2>

            {postsToRender.map(
                ({ 
                    _id, 
                    _createdAt,
                    description, 
                    slug,
                    title, 
                    tags
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
                        <ul>
                            {tags.map(tag => {
                                return (
                                    <TagListItem key={tag._id}>
                                        {tag.name}
                                    </TagListItem>
                                )
                                
                            })}
                        </ul>
                    </ListItem>
                )
            )}
        </HeaderLayout>
    )
}

export async function getStaticProps() {
    // TODO: should these be chained somehow?
    const posts = await client.fetch(`
        *[ _type == "post" ]{
            ..., 
            tags[]->{_id, name}
        }
    `)

    const tags = await client.fetch(`
        *[ _type == "tag" ] {
            _id, name
        }
    `)

    return { 
        props: { 
            posts,
            tags
        } 
    }
}

export default Index