import styled from 'styled-components'

const NavWrapper = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 12px;
  margin: -64px 0 48px 0;
  border: 1px solid ${props => props.theme.primary};
  border-radius: 8px;
  a.category-title {
    padding: 0 16px;
    color: ${props => props.theme.text};
    transition: all 0.4s;
    border-right: 1px solid ${props => props.theme.primary};
    text-transform: uppercase;
    &:hover {
      border-bottom: 1px solid ${props => props.theme.primary};
    }
  }
`

export default NavWrapper
