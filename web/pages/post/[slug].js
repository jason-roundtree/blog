// import { useRouter } from 'next/router'
import client from '../../client'

const Post = (props) => {
    // const router = useRouter()
    return (
        <article>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>{props.body}</p>
            <p>{props._createdAt}</p>
            
        </article>
    )
}

Post.getInitialProps = async function(context) {
    // It's important to default the slug so that it doesn't return "undefined"
    console.log('context: ', context)
    const { slug = "" } = context.query
    const data = await client.fetch(`
        *[_type == "post" && slug.current == $slug][0]
    `, { slug })
    console.log('data: ', data)
    return data
  }

export default Post