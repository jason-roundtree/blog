import styled from 'styled-components'

const TagBtn = styled.button`
    padding: 10px;
    margin: 15px 0 0 15px;
    color: rgb(250, 223, 147);
    font-size: 1.2em;
    background-color: rgb(3, 152, 252);
    border: 3px solid;
    font-family: 'Lustria', serif;
`

function KeywordTags(props) {
    const tagCountsArray = []
    for (const [
        tag, 
        count
    ] of Object.entries(props.tags)) {
        tagCountsArray.push({
            'name': tag,
            'count': count
        })

    }
    console.log('tagCountsArray: ', tagCountsArray)

    return (
        <div>
            {tagCountsArray.map(tag => (
                <TagBtn key={tag.name}>
                    {tag.name}:
                    {tag.count}
                </TagBtn>
            ))}
        </div>
    )
}

export default KeywordTags