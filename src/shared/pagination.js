import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledPagination = styled.nav`
  a {
    padding: 12px;
    border: 1px solid ${props => props.theme.primary};
    border-radius: 4px;
    &:hover {
      opacity: 0.8;
    }
  }
`

const Pagination = ({ previous, next }) => (
  <StyledPagination>
    <ul
      style={{
        display: `flex`,
        flexWrap: `wrap`,
        justifyContent: `space-between`,
        listStyle: `none`,
        padding: 0
      }}
    >
      <li>
        {previous && (
          <Link to={previous.fields.slug} rel="prev">
            ← {previous.frontmatter.title}
          </Link>
        )}
      </li>
      <li>
        {next && (
          <Link to={next.fields.slug} rel="next">
            {next.frontmatter.title} →
          </Link>
        )}
      </li>
    </ul>
  </StyledPagination>
)

export default Pagination
