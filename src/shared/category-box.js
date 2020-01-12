import styled from 'styled-components';

const CategoryBox = styled.div`
  border: 1px solid ${props => props.theme.secondary};
  padding: 12px;
  border-radius: 8px;
  h2 {
    border-bottom: 1px solid ${props => props.theme.secondary};
    color: ${props => props.theme.primary};
    margin: 4px 0 8px 0;
    padding: 0 0 8px 0;
  }
  .post-title {
    a {
      color: ${props => props.theme.primary};
      &:hover {
        color: ${props => props.theme.emphasize};
        transition: all 0.4s;
      }
    }
    i {
      margin-right: 4px;
    }
    span {
      margin-left: 4px;
    }
  }
`

export default CategoryBox;