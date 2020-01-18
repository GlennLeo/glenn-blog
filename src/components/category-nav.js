import React from 'react'
import { Link } from 'gatsby'
import NavWrapper from '../shared/nav-wrapper'

const CategoryNav = ({ categories }) => {
  return (
    <NavWrapper>
      <Link className="category-all category-title" to="/category">
        <span>🏠 </span>
        All
      </Link>
      {categories.map(category => (
        <Link className="category-title" to={`category/${category.name}`}>
          {category.name}
        </Link>
      ))}
    </NavWrapper>
  )
}

export default CategoryNav
