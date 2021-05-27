import { useState, useEffect } from 'react'
import styled from 'styled-components'

const PostImgContainer = styled.div`
    position: relative;
    margin: 2.5em auto;
`
const PostImg = styled.img`
    position: relative;
    max-width: 100%;
    height: auto;
    transition: opacity 400ms ease 0ms;
    /* width: 100%; */
    /* TODO: what exactly were these supposed to be doing? */
    /* top: 0;
    left: 0;
    display: block; */
`
const PostLqipImg = styled(PostImg)`
    position: absolute;
    /* width: 100%; */
    /* TODO: what exactly were these supposed to be doing? */
    /* transform: scale(1);
    transition: visibility 0ms ease 400ms; */
`
const PhotoCredit = styled.p`
    text-align: center;
`

function PostImage(props) {
    console.log('Image props: ', props)
    const [isLoaded, setIsLoaded] = useState(false);
    // const [fullImgUrl, setFullImgUrl] = useState(null)
    // const [lqipImgUrl, setLqipImgUrl] = useState(null)
    // console.log('isLoaded: ', isLoaded)

    // useEffect(() => {
    //     console.log('useEffect')
    // }, [])

    // function handleOnLoad() {
    //     console.log('handleOnLoad: ', isLoaded)
    // }

    return (
        <PostImgContainer>
            <PostLqipImg 
                src={props.postImg.metadata.lqip}
                alt={`Image of ${props.postImg.description} by ${props.postImg.creditLine}`}
                style={{ visibility: isLoaded ? "hidden" : "visible" }}
            />

            <PostImg 
                // key set to unique value ensures that LQIP image doesn't persist on page refresh
                key={Date.now()}
                onLoad={() => setIsLoaded(true)}
                src={props.postImg.url}
                alt={`Image of ${props.postImg.description} by ${props.postImg.creditLine}`}
                // TODO: move these style tags to Styled Components?
                style={{ opacity: isLoaded ? 1 : 0 }}
            />
        
            <PhotoCredit>
                Photo by 
                    <a href={props.postImg.source.url} target="_blank">
                        {props.postImg.creditLine.replace('by Unsplash', ' ')} 
                    </a>
                on <a href="https://unsplash.com/" target="_blank">Unsplash</a>
            </PhotoCredit>
        </PostImgContainer>
    )
} 

export default PostImage