export default arrayOfObjects => {
    return arrayOfObjects.sort((a, b) => {
        return (a.name > b.name) ? 1 : -1
    })
}