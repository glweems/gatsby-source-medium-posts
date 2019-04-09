# Gatsby Source Medium Posts

[![CircleCI](https://circleci.com/gh/glweems/gatsby-source-medium-posts.svg?style=svg)](https://circleci.com/gh/glweems/gatsby-source-medium-posts)

### Setup

`npm install gatsby-source-medium-posts`

```javascript
// gatsby-node.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-medium-posts`,
      options: {
        username: "glweems",
      },
    },
  ],
}
```

Content field returns html of your blog post.

```javascript
// Example Query
{
  allMediumPost {
    edges {
      node {
        id
        title
        pubDate
        link
        guid
        author
        thumbnail
        content
        categories
        description
      }
    }
  }
}
```
