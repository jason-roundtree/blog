export default {
    title: 'Post',
    name: 'post',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },
        {
            title: 'Description',
            name: 'description',
            type: 'text',
            rows: 3
        },
        // {
        //     name: 'codeExample',
        //     title: 'Code Example',
        //     type: 'code',
        //     options: {
        //         language: 'js',
        //         theme: 'monokai'
        //     }
        // },
        {
            title: 'Body',
            name: 'body',
            type: 'array',
            of: [
                { type: 'block' },
                { type: 'code' }
            ]
        },
                // { 
                //     name: 'codeExample',
                //     type: 'code',
                //     options: {
                //         language: 'js',
                //         theme: 'tomorrow'
                //     }
                // }
        //     ]
        // },
        {
            title: 'Published',
            name: 'published',
            type: 'boolean'
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image'
        },
        {
            title: 'Author',
            name: 'author',
            type: 'reference',
            to: [{ type: 'author' }],
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
        {
            title: 'Tags',
            name: 'tags',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{ type: 'tag' }]
            }]
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
        }
    ]
}