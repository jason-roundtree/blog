export default {
    title: 'Post Aside Note',
    name: 'post_aside_note',
    type: 'document',
    fields: [
        {
            title: 'String Content',
            name: 'str_content',
            type: 'array',
            of: [
                { type: 'text' },
                { 
                    type: 'block', 
                    of: [{
                        type: 'inline_code'
                    }]
                },
            ]
        }
    ]
}