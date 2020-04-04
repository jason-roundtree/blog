import styled from 'styled-components'
import '../globalStyles.css'

const TagBtn = styled.button`
    padding: 10px 15px;
    margin: 15px 0 0 15px;
    color: var(--secondary-color);
    font-size: 1.2em;
    border: none;
    background-color: var(--primary-color);
    font-family: 'Lustria', serif;
    &:hover {
        cursor: pointer;
    }
`

function KeywordTags(props) {
    // console.log('props: ', props)
    props.tags.sort((a, b) => {
        return (a.name > b.name) ? 1 : -1
    })
    
    return (
        <div>
            <TagBtn
                onClick={props.handleTagFilter}
                id='clearFilter'
                className={props.filteredTags.length > 0 
                    ? ''
                    : 'selectedTag'
                }
            >
                All Posts
            </TagBtn>

            {props.tags.map(tag => (
                tag.count && (
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
                        ({tag.count})
                    </TagBtn>
                )
            ))}
        </div>
    )
}

export default KeywordTags