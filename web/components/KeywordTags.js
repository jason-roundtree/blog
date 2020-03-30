import styled from 'styled-components'

const TagBtn = styled.button`
    padding: 10px 15px;
    margin: 15px 0 0 15px;
    color: rgb(250, 223, 147);
    font-size: 1.2em;
    border: none;
    background-color: rgb(3, 152, 252);
    font-family: 'Lustria', serif;
    &:hover {
        cursor: pointer;
    }
`
const Span = styled.span`
    margin: 0 5px;
    color: rgb(250, 223, 147);
`

function KeywordTags(props) {
    console.log('props: ', props)
    
    
    // tagCountsArray.sort((a, b) => {
    //     return (a.name > b.name) ? 1 : -1
    // })

    return (
        null
        // <div>
        //     {tagCountsArray.map(tag => (
        //         <TagBtn 
        //             key={tag.name}
        //             onClick={props.handleTagFilter}
        //         >   
        //             {tag.name}
        //             <Span>({tag.count})</Span>
        //         </TagBtn>
        //     ))}
        // </div>
    )
}

export default KeywordTags