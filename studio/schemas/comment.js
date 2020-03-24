export default {
    title: 'Comment',
    name: 'comment',
    type: 'document',
    fields: [
        {
            title: 'Author',
            name: 'author',
            type: 'reference',
            to: [{ type: 'author' }]
        },
        {
            title: 'Body',
            name: 'body',
            type: 'text'
        },
    ]         
}