import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

const StyledPostTitle = styled.section`
  #title {
    margin-bottom: 15px;
    .entry__title {
      position: relative;
      display: inline;
      font-weight: 700;
      font-family: 'Baloo', sans-serif;
      font-size: ${props => (props.categorized ? '24px' : '36px')};
      margin: 0;
      text-align: left;
      // padding-left: 25px;
      line-height: 1.2;
      z-index: 2;
    }
    a,
    span {
      position: relative;
      color: ${props => props.theme.primary};
      z-index: 100;
    }
    &:hover {
      transform: scale(1.01);
      a {
        color: ${props => props.theme.secondary};
      }
    }
    .big-word {
      position: absolute;
      top: -30px;
      left: -5px;
      font-size: 85px;
      color: ${props => props.theme.emphasize};
      font-weight: bold;
      z-index: 1;
      opacity: 0.7;
    }
  }

  #info {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 14px;
    font-style: italic;
    height: 20px;
    margin-bottom: 30px;

    .mh-2 {
      margin-left: 10px;
      margin-right: 10px;
    }

    .info__timeRead {
      font-size: 14px;
      display: flex;
      flex-flow: row;
      align-items: start;
    }
    .info__category {
      font-weight: 700;
      margin: 0;
    }
  }

  @media only screen and (max-width: 600px) {
    #title {
      .entry__title {
        font-size: 24px;
      }
      .big-word {
        font-size: 70px;
      }
    }
    #info {
      font-size: 12px;

      .mh-2 {
        margin-left: 8px;
        margin-right: 8px;
      }

      .info__timeRead {
        display: flex;
        flex-flow: row;
        align-items: start;
        font-size: 12px;
      }
    }
  }
`

const PostTitle = ({
  categorized,
  slug,
  title,
  category,
  createdAt,
  timeReading
}) => {
  return (
    <StyledPostTitle categorized={categorized}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Baloo"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Serif"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossorigin="anonymous"
        />
        >
      </Helmet>
      <header id="title">
        <h2 className="entry__title">
          {/* <span className="big-word">{title[0]}</span> */}
          {slug ? (
            <Link style={{ boxShadow: `none` }} to={slug}>
              {title}
            </Link>
          ) : (
            <span>{title}</span>
          )}
        </h2>
      </header>
      <section id="info">
        {category && (
          <Link to={`/category/${category}`}>
            <p className="info__category mh-2 border border-primary ph-2">
              {category}
            </p>
          </Link>
        )}
        <p className="mh-2">{createdAt}</p>
        <div className="info__timeRead">
          <span className="mh-2">
            <i className="fas fa-coffee" />
          </span>
          {timeReading}
        </div>
      </section>
    </StyledPostTitle>
  )
}

export default PostTitle
