export default list => {
    return list.sort((a, b) => {
        return (a.name > b.name) ? 1 : -1
    })
}