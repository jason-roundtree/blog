export default (arrayOfObjects, sortOn) => {
    // sort tags from a - z
    if (sortOn === 'name') {
        return arrayOfObjects.sort((a, b) => (
            (a[sortOn] > b[sortOn]) ? 1 : -1
        ))
    }
    // sort posts by most recent
    return arrayOfObjects.sort((a, b) => (
        (a[sortOn] < b[sortOn]) ? 1 : -1
    ))
}