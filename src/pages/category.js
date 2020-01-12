import React from 'react'
import {  graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Bio from '../components/bio'
import CategoryBox  from '../shared/category-box'
import Helmet from 'react-helmet'

const Category = ({  data, location }) => {
    const siteTitle = data.site.siteMetadata.title
    const categories =  data.allMarkdownRemark.group;
  return (
    <Layout location={location} title={siteTitle}>
        <Helmet>
                <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossorigin="anonymous"
        />
      </Helmet>
      <SEO title="All posts" />
      <Bio />
      {categories.map(category => {
        const posts = category.edges;
        return (
      <CategoryBox>
        <h2>{`${category.name} (${category.totalCount})`}</h2>
          {posts.map(post => (
            <div className="post-title">
            <i className="fas fa-hand-point-right"></i>
            <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link>
          <span>{`(${post.node.fields.readingTime.text})`}</span>
            </div>
          ))}
      </CategoryBox>
        )
      })}
    </Layout>
  )
}

export default Category

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
                 }
               }
             }
            }
           }
         }
       `
