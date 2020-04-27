import styled from 'styled-components'
import sortObjProperties from '../utils/sortObjProperties.js'

// const TagsContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     flex-wrap: wrap;
// `
const TagBtn = styled.button`
    padding: 7px 10px;
    margin: 15px 0 0 15px;
    color: var(--secondary-color);
    font-size: 1em;
    border: none;
    background-color: var(--primary-color);
    /* font-family: 'Lustria', serif; */
    font-family: 'Nanum Gothic Coding', monospace;
    &:hover {
        cursor: pointer;
        background-color: var(--primary-darker);
    }
`
const TagCount = styled.span`
    font-family: 'Fjalla One', sans-serif;
    color: var(--secondary-color);
    font-size: .8em;
`

function KeywordTags(props) {
    // console.log('props: ', props)
    const tags = sortObjProperties(props.tags)
    
    return (
        <div>
            {/* this length check prevents `All Posts` button from rendering prior to the rest of the tag buttons */}
            {tags.length > 0 && (
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
            
            {tags.map(tag => (
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