import styled from 'styled-components'
import {rhythm} from '../utils/typography'

const CategoryHeader = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: ${rhythm(2)};

  h2 {
    margin: 0;
    color: ${props => props.theme.primary};
    position: relative;
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 4px;
      background-color: ${props => props.theme.emphasize};
      left: 0;
      bottom: -8px;
      right: 0;
    }
  }
  span {
    color: ${props => props.theme.secondary};
    font-size: 24px;
    margin-left: 8px;
  }
`

export default CategoryHeader