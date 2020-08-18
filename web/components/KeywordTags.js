import styled from 'styled-components'
import sortObjProperties from '../utils/sortObjProperties.js'

// const TagsContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     flex-wrap: wrap;
// `
const TagBtn = styled.button`
    margin: 15px 0 0 15px;
    /* padding: 7px 10px;
    color: var(--secondary-color);
    font-size: 1em;
    border: none;
    background-color: var(--primary-color);
    font-family: 'Nanum Gothic Coding', monospace;
    &:hover {
        cursor: pointer;
        background-color: var(--primary-darker);
    } */
`
const TagCount = styled.span`
    font-family: 'Fjalla One', sans-serif;
    color: var(--secondary-color);
    font-size: .8em;
`

function KeywordTags(props) {
    // console.log('props: ', props)
    const tags = props.tags.length > 0 ? sortObjProperties(props.tags, 'name') : null
    
    return (
        <div>
            {/* this prevents `All Posts` button from rendering prior to the rest of the tag buttons */}
            {tags && (
                <TagBtn
                    onClick={props.handleTagFilter}
                    id='clearFilter'
                    className={
                        props.filteredTags.length > 0 
                            ? ''
                            : 'selectedTag'
                    }
                >
                    All Posts
                </TagBtn>
            )}
            
            {tags && tags.map(tag => (
                tag.count > 0 && (
                    <TagBtn 
                        key={tag.name}
                        id={tag._id}
                        onClick={props.handleTagFilter}
                        className={
                            props.filteredTags.includes(tag._id) 
                                ? 'selectedTag'
                                : ''
                        }
                    >   
                        {tag.name}
                        &nbsp;
                        <TagCount>({tag.count})</TagCount>
                    </TagBtn>
                )
            ))}
        </div>
    )
}

export default KeywordTags