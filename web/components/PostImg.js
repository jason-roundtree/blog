import { useState } from 'react'
import styled from 'styled-components'

const PostImgContainer = styled.div`
    position: relative;
    margin: 2.5em 0;
`
const PostImg = styled.img`
    position: relative;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    transition: opacity 400ms ease 0ms;
`
const PostLqipImg = styled(PostImg)`
    position: absolute;
    width: 100%;
    filter: blur(10px);
    transform: scale(1.1);
    transition: visibility 0ms ease 400ms;
`
const PhotoCredit = styled.p`
    text-align: center;
`

function PostImage(props) {
    // console.log('PI props: ', props)
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <PostImgContainer>
            <PostImg 
                onLoad={() => setIsLoaded(true)}
                onBeforeUnload={() => setIsLoaded(false)}
                src={props.postImg.url}
                alt={`Image of ${props.postImg.description} by ${props.postImg.creditLine}`}
                // TODO: move these style tags to Styled Components?
                style={{ opacity: isLoaded ? 1 : 0 }}
            />
        
            <PostLqipImg 
                src={props.postImg.metadata.lqip}
                alt={`Image of ${props.postImg.description} by ${props.postImg.creditLine}`}
                style={{ visibility: isLoaded ? "hidden" : "visible" }}
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