import React from 'react'
import {  graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PostTitle from '../shared/post-title'
import Bio from '../components/bio'
import ArticleContainer from '../shared/article-container'
import ReadmoreButton from '../shared/readmore-button'
import CategoryHeader from '../shared/category-header'

const Category = ({ pageContext, data, location }) => {
  const { category } = pageContext
  const posts  = data.allMarkdownRemark.edges
    const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      <CategoryHeader id="header">
        <h2>Category: </h2>
        <span>{category}</span>
      </CategoryHeader>
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
                  __html: node.frontmatter.description || node.excerpt,
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

export default Category

export const pageQuery = graphql`
         query($category: String) {
           site {
              siteMetadata {
                title
              }
           }
           allMarkdownRemark(
             limit: 2000
             sort: { fields: [frontmatter___date], order: DESC }
             filter: { frontmatter: { category: { in: [$category] } } }
           ) {
             edges {
               node {
                 fields {
                   slug
                   readingTime {
                     text
                   }
                 }
                 frontmatter {
                   title
                   date(formatString: "MMMM DD, YYYY")
                   description
                   category
                   tags
                 }
               }
             }
           }
         }
       `
