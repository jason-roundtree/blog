import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: '9k4z7s6m', 
    dataset: 'production', 
    useCdn: false // `false` if you want to ensure fresh data
})