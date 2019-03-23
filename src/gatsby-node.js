const axios = require(`axios`)

const API = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed`

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest },
  { username }
) => {
  const { createNode } = actions
  // Fetch data and return items array
  const posts = await axios
    .get(`${API}/@${username}`)
    .then(res => res.data.items)
    .catch(err => {
      throw new Error(err)
    })
  // Process data into nodes.
  posts.forEach(post => {
    const nodeMeta = {
      id: createNodeId(post.title),
      parent: null,
      children: [],
      internal: {
        type: `mediumPost`,
        contentDigest: createContentDigest(post),
      },
    }
    const node = Object.assign({}, post, nodeMeta)
    createNode(node)
  })
  return
}
