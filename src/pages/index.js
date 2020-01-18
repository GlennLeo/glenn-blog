import React from 'react'
import { Link, graphql } from 'gatsby'
import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PostTitle from '../shared/post-title'
import ArticleContainer from '../shared/article-container'
import ReadmoreButton from '../shared/readmore-button'
import CategoryNav from '../components/category-nav'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const categories = data.allMarkdownRemark.group
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <CategoryNav categories={categories} />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const timeReading = node.fields.readingTime.text
          return (
            <ArticleContainer key={node.fields.slug}>
              <PostTitle
                title={title}
                timeReading={timeReading}
                slug={node.fields.slug}
                createdAt={node.frontmatter.date}
                category={node.frontmatter.category}
                tags={node.frontmatter.tags}
              />
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt
                  }}
                />
              </section>
              <ReadmoreButton slug={node.fields.slug} />
            </ArticleContainer>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      group(field: frontmatter___category) {
        name: fieldValue
        totalCount
      }
      edges {
        node {
          excerpt
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            category
            tags
          }
        }
      }
    }
  }
`
