export default {
    title: 'Post',
    name: 'post',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Description',
            name: 'description',
            type: 'text',
            rows: 3
        },
        {
            title: 'Body',
            name: 'body',
            type: 'array',
            of: [
                { 
                    type: 'block', 
                    of: [{
                        type: 'inline_code'
                    }]
                },
                { type: 'code' },
                { type: 'post_body_image' },
                { type: 'code_no_line_number' },
                // TODO: update these type names:
                { type: 'post_aside' },
                { type: 'post_aside_note' },
                { type: 'post_aside_with_code' }
            ]
        },
        {
            title: 'Published',
            name: 'published',
            type: 'boolean'
        },
        {
            title: 'Manual Published Date',
            name: 'manual_pub_date',
            type: 'date',
            validation: Rule => Rule.required()
            // options: {
            //     dateFormat: 'YYYY-MM-DD',
            // }
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
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image'
        }
    ]
}