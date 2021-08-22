import { useState, useEffect } from 'react'
import styled from 'styled-components'

const PostImgContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    margin: ${( props ) => props.isUnsplashImg 
        ? `2.5em auto 0` 
        : `1.5em auto`
    }
   ;
`
const PostImg = styled.img`
    position: relative;
    max-width: 100%;
    height: auto;
    transition: opacity 400ms ease 0ms;
    /* TODO: what exactly were these supposed to be doing? */
    /* top: 0; */
    /* left: 0; */
    /* display: block; */
`
const PostLqipImg = styled(PostImg)`
    position: absolute;
    /* width: 100%; */
    height: auto;
    /* TODO: what exactly were these supposed to be doing? */
    /* transform: scale(1);
    transition: visibility 0ms ease 400ms; */
`
const PhotoCredit = styled.p`
    text-align: center;
`

function PostImage({ postImg, altText, caption }) {
    const [isLoaded, setIsLoaded] = useState(false)
    const { width, height } = postImg.metadata.dimensions
    const isUnsplashImg = Boolean(postImg?.creditLine)
    const _altText = isUnsplashImg
        ? `Image of ${postImg.description} by ${postImg.creditLine}`
        : altText

    return (
        <>
            <PostImgContainer isUnsplashImg={isUnsplashImg} >
                <PostLqipImg 
                    src={postImg.metadata.lqip}
                    alt={_altText}
                    style={{ visibility: isLoaded ? "hidden" : "visible" }}
                    width={width}
                    height={height}
                />

                <PostImg 
                    // key set to unique value ensures that LQIP image doesn't persist on page refresh
                    key={Date.now()}
                    onLoad={() => setIsLoaded(true)}
                    src={postImg.url}
                    alt={_altText}
                    // TODO: move these style tags to Styled Components?
                    style={{ opacity: isLoaded ? 1 : 0 }}
                    width={width}
                    height={height}
                />
            </PostImgContainer>

            {postImg?.source && (
                <PhotoCredit>
                    Photo by 
                        <a href={postImg.source.url} target="_blank">
                            {postImg.creditLine.replace('by Unsplash', ' ')} 
                        </a>
                    on <a href="https://unsplash.com/" target="_blank">Unsplash</a>
                </PhotoCredit>
            )}
        </>
    )
} 

export default PostImage