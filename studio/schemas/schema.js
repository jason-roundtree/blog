// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import post from './post'
import comment from './comment'
import author from './author'
import tag from './tag'
import postAside from './postAside'
import postAsideNote from './postAsideNote'
import postAsideWithCode from './postAsideWithCode'
import inlineCode from './inlineCode'
import codeNoLineNumber from './codeNoLineNumber'
import postBodyImage from './postBodyImage'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'blogSchema',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    post,
    comment,
    author,
    tag,
    postAside,
    postAsideNote,
    postAsideWithCode,
    inlineCode,
    codeNoLineNumber,
    postBodyImage
  ])
})
