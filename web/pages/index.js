import client from '../client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
// import useSWR from 'swr'
import styled from 'styled-components'
import moment from 'moment'
import HeaderLayout from '../components/HeaderLayout'
import KeywordTags from '../components/KeywordTags'

const ListItem = styled.li`
    margin: 15px 0 0 15px;
    padding: 10px 15px;
    font-size: 1.75em;
    border: 1px solid var(--primary-darker);
`
const TagListItem = styled.li`
    display: inline-block;
    margin-right: 5px;
    padding: 3px 5px;
    font-size: .5em;
    color: ${({ theme }) => theme.secondaryColor};
    background: ${({ theme }) => theme.primaryColor};
`
const DescP = styled.p`
    font-size: .85em;
    color: ${({ theme }) => theme.primaryColor};
`
const DateP = styled.p`
    font-size: .7em;
`

// removes duplicate post objects by converting each post into a JSON string so that they can be compared and filtered using `new Set`, then parsing the final unique array of posts back to a normal array of objects
function uniquePostsArray(posts) {
    return [
        ...new Set(posts.map(postObj => {
            return JSON.stringify(postObj)
        }))
    ].map(postStr => {
       return JSON.parse(postStr)
    })
}

function getTagCountsData(tags) {
    return Promise.all(
        tags.map(async tag => {
            return await client.fetch(`
                *[ _id == $tagID ]{
                    name,
                    _id,
                    "count": count(
                        *[ 
                            _type == "post" && 
                            $tagID in tags[]._ref 
                        ]
                    )
                }[0]
            `, { tagID: tag._id })
        })
    )
}

function Index({ 
    posts, 
    tags, 
    onToggleThemeClick
}) {
    // console.log('posts: ', posts)
    // console.log('tags: ', tags)
    const [ allPosts ] = useState(posts)
    const [ filteredPosts, setFilteredPosts ] = useState([])
    const [ tagCounts, setTagCounts ] = useState([])
    const [ filteredTags, setFilteredTags ] = useState([])
    console.log('tagCounts: ', tagCounts)

    useEffect(() => {
        getTagCountsData(tags)
            .then(tagCounts => {
                setTagCounts(tagCounts)
            })
            .catch(err => console.log('error getting tag counts: ', err))
    }, [])

    useEffect(() => {
        if (filteredTags.length > 0) {
            const _filteredPosts = []
            allPosts.forEach(post => {
                post.tags.forEach(tag => {
                    if (filteredTags.includes(tag._id)) {
                        _filteredPosts.push(post)
                    }
                })
            })  
            setFilteredPosts(
                uniquePostsArray(_filteredPosts)
            )
        } else {
            setFilteredPosts([])
        }
    }, [filteredTags])

    function handleTagFilter(e) {
        const selectedTagID = e.target.id
        if (selectedTagID === 'clearFilter') {
            setFilteredTags([])
        } else if (!filteredTags.includes(selectedTagID)) {
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
            {/* TODO: move to header? Add icons */}
            <button onClick={onToggleThemeClick}>
                toggle mode
            </button>

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
                        <DescP>{description}</DescP>
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