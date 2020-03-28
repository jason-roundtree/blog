import styled from 'styled-components'

const TagBtn = styled.button`
    padding: 10px;
    margin: 10px;
    font-family: 'Lustria', serif;
    color: rgb(16, 46, 36);
    font-size: 1.2em;
`

function KeywordTags(props) {
    const tagCountsArray = []
    for (const [tag, count] of Object.entries(props.tags)) {
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