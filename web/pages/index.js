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
    border: 1px solid rgb(250, 223, 147);
`
const DateP = styled.p`
    font-size: .75em;
`

function Index({ posts, tags }) {
    console.log('posts: ', posts)
    console.log('tags: ', tags)
    const [ allPosts, setAllPosts ] = useState(posts)
    const [ filteredPosts, setFilteredPosts ] = useState([])
    const [ tagCounts, setTagCounts ] = useState([])
    const [ filteredTags, setFilteredTags ] = useState([])
    console.log('tagCounts: ', tagCounts)
    console.log('filteredTags global: ', filteredTags)
    console.log('filteredPosts global: ', filteredPosts)
    
    useEffect(() => {
        tags.forEach(async tag => {
            const count = await client.fetch(`
                count(*[ _type == "post" && $tagID in tags[]._ref ])
            `, { tagID: tag._id })

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
        // console.log('getFilteredPosts')
        // console.log('filteredTags: ', filteredTags)
        if (filteredTags.length > 0) {
            // const postsWithFilteredTag = []
            filteredTags.forEach(async tag => {
                const matchedPosts = await client.fetch(`
                    *[ _type == "post" && $tagID in tags[]._ref ]{
                        ..., 
                        tags[]->{_id, name}
                    }
                `, { tagID: tag })
                console.log('matchedPosts: ', matchedPosts)
                setFilteredPosts(matchedPosts)
            })
            
        }
    }, [filteredTags])

    function handleTagFilter(e) {
        // console.log('e: ', e.target.id);
        const selectedTagID = e.target.id
        // console.log('selectedKeyword: ', selectedKeyword)
        if (!filteredTags.includes(selectedTagID)) {
            setFilteredTags(state => [...state, selectedTagID])
        } else {
            setFilteredTags(filteredTags.filter(tag => {
               return tag !== selectedTagID
            }))
        }
    }

    const postsToRender = filteredPosts.length > 0 ? filteredPosts : allPosts
    return (
        <HeaderLayout>
            <h2>Tags:</h2>
            <KeywordTags 
                tags={tagCounts}
                handleTagFilter={handleTagFilter}
            />

            <h2>Posts:</h2>

            {postsToRender.map(
                ({ 
                    _id, 
                    _createdAt,
                    description, 
                    slug,
                    title, 
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