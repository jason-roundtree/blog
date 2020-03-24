export default {
    title: 'Author',
    name: 'author',
    type: 'document',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string'
        },
        {
            title: 'Avatar',
            name: 'avatar',
            type: 'image'
        },
        {
            title: 'Posts',
            name: 'posts',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{ type: 'post' }]
            }]
        },
        {
            title: 'Comments',
            name: 'comments',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{ type: 'comment' }]
            }]
        },
    ]
}