import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledButton = styled.section`
  a {
    text-align: end;
    padding: 12px;
    &:hover {
      opacity: 0.8;
    }
  }
`

const ReadmoreButton = ({ slug }) => (
  <StyledButton id="bottom">
    <Link className="bg-primary white" to={slug}>
      Read More →
    </Link>
  </StyledButton>
)

export default ReadmoreButton
