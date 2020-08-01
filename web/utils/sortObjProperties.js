export default (arrayOfObjects, sortOn) => {
    if (sortOn === 'name') {
        return arrayOfObjects.sort((a, b) => (
            (a[sortOn] > b[sortOn]) ? 1 : -1
        ))
    }
    return arrayOfObjects.sort((a, b) => (
        (a[sortOn] < b[sortOn]) ? 1 : -1
    ))
}