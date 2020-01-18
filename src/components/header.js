import React from 'react'
import { scale } from '../utils/typography'
import { Link } from 'gatsby'

const Header = ({ title, isRoot }) => {
  if (isRoot) {
    return (
      <h1
        style={{
          ...scale(1.5),
          marginTop: 0,
          marginBottom: 0
        }}
      >
        <Link
          className="primary"
          style={{
            boxShadow: `none`,
            textDecoration: `none`
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  }
  return (
    <h3
      style={{
        fontFamily: `Montserrat, sans-serif`,
        marginTop: 0,
        marginBottom: 0
      }}
    >
      <Link
        className="primary"
        style={{
          boxShadow: `none`,
          textDecoration: `none`
        }}
        to={`/`}
      >
        {title}
      </Link>
    </h3>
  )
}

export default Header
