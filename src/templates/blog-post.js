import React from 'react'
import {graphql} from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {rhythm} from '../utils/typography'
import PostTitle from '../shared/post-title'
import Pagination from '../shared/pagination'

class BlogPostTemplate extends React.Component {
	render() {
		const post = this.props.data.markdownRemark
		const siteTitle = this.props.data.site.siteMetadata.title
		const timeReading = post.fields.readingTime.text
		const {previous, next} = this.props.pageContext

		return (
			<Layout location={this.props.location} title={siteTitle}>
				<SEO
					title={post.frontmatter.title}
					description={post.frontmatter.description || post.excerpt}
				/>
				<article>
					<PostTitle
						title={post.frontmatter.title}
						timeReading={timeReading}
						slug={post.fields.slug}
						createdAt={post.frontmatter.date}
						category={post.frontmatter.category}
						tags={post.frontmatter.tags}
					/>
					<section dangerouslySetInnerHTML={{__html: post.html}} />
					<hr
						style={{
							marginBottom: rhythm(1)
						}}
					/>
					<footer>
						<Bio />
					</footer>
				</article>
				<Pagination previous={previous} next={next} />
			</Layout>
		)
	}
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
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
`
