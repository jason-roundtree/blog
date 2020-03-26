import client from '../../client'
import HeaderLayout from '../../components/HeaderLayout'

const Post = (props) => {
    return (
        <HeaderLayout>
            <article>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <p>{props.body}</p>
                <p>{props._createdAt}</p>
            </article>
        </HeaderLayout>
    )
}

Post.getInitialProps = async function(context) {
    // default the slug so that it doesn't return "undefined"
    // console.log('context: ', context)
    const { slug = "" } = context.query
    const data = await client.fetch(`
        *[_type == "post" && slug.current == $slug][0]
    `, { slug })
    // console.log('data: ', data)
    return data
  }

export default Post