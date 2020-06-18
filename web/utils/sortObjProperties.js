export default arrayOfObjects => {
    return arrayOfObjects.sort((a, b) => (
        (a.name > b.name) ? 1 : -1
    ))
}