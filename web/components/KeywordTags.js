import styled from 'styled-components'
import sortObjProperties from '../utils/sortObjProperties.js'

const TagBtn = styled.button`
    margin: 15px 0 0 15px;
    background-color: ${({ theme }) => theme.listItemBgColor};
    color: ${({ theme }) => theme.primaryColor};
    &:hover {
        background-color: ${({ theme }) => theme.secondaryColor};
    }
    ${({active, theme }) => active && `
        background-color: ${theme.secondaryColor}
    `}
`
const TagCount = styled.span`
    font-family: 'Fjalla One', sans-serif;
    font-size: .8em;
    color: ${({ theme }) => theme.primaryColor};
`

function KeywordTags(props) {
    // console.log('props: ', props)
    const tags = props.tags.length > 0 ? sortObjProperties(props.tags, 'name') : null
    
    return (
        <div>
            {/* this prevents the `All Posts` button from rendering prior to the rest of the tag buttons and allows me to style the background-color independently of the others */}
            {tags && (
                <TagBtn
                    onClick={props.handleTagFilter}
                    id='clearFilter'
                    active={
                        props.filteredTags.length > 0 
                            ? false
                            : true
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
                        active={
                            props.filteredTags.includes(tag._id) 
                                ? true
                                : false
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