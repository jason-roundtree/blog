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
    const [ filteredPosts, setFilteredPosts ] = useState(posts)
    // const [ allTags, setAllTags ] = useState(tags)
    const [ tagCounts, setTagCounts ] = useState([])
    const [ filteredKeywords, setFilteredKeywords ] = useState([])
    console.log('tagCounts: ', tagCounts)
    
    useEffect(() => {
        const tagCounts = []
        tags.forEach(async (tag) => {
            const count = await client.fetch(`
                count(*[ _type == "post" && $tagID in tags[]._ref ])
            `, { tagID: tag._id })
            const tagCount = {
                _id: tag._id,
                name: tag.name,
                count
            }
            // console.log('tagCount: ', tagCount)
            // setTagCounts(state => [...state, tagCount])
            // tagCounts.push(tagCount)
            setTagCountsState(tagCount)
            
        })
    }, [])
    
    function setTagCountsState(tagCount) {
        setTagCounts(state => [...state, tagCount])
    }

    async function getFilteredPosts() {
        const posts = await client.fetch(`
            *[ _type == "post" && $tagID in tags[]._ref ]
        `, { })
        console.log('posts: ', posts)
        setFilteredPosts(posts)
    }

    function handleTagFilter(e) {
        const selectedKeyword = e.target.firstChild.data
        // console.log('selectedKeyword: ', selectedKeyword)
        if (!filteredKeywords.includes(selectedKeyword)) {
            setFilteredKeywords([...filteredKeywords, selectedKeyword])
        } else {
            setFilteredKeywords(filteredKeywords.filter(keyword => {
               return keyword !== selectedKeyword
            }))
        }
        console.log('filteredKeywords: ', filteredKeywords)
        getFilteredPosts()
    }


    return (
        <HeaderLayout>
            <h2>Tags:</h2>
            <KeywordTags 
                tags={allPosts}
                handleTagFilter={handleTagFilter}
            />

            <h2>Posts:</h2>
            {filteredPosts.map(
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
        *[ _type == "tag" ]{
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