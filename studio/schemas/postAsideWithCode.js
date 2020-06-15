export default {
    title: 'Post Aside with Code',
    name: 'post_aside_with_code',
    type: 'document',
    fields: [
        {
            title: 'Body',
            name: 'body',
            type: 'array',
            of: [
                { type: 'text' },
                { type: 'code' },
                { 
                    type: 'block', 
                    of: [{
                        type: 'inline_code'
                    }]
                },
                
            ]
        },
    
        // TODO: image:
        // {
        //     title: '',
        //     name: '',
        //     type: '',
        // },
    ]
}