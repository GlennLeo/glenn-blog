import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { rhythm } from '../utils/typography'
import Header from '../shared/header'
import DarkModeButton from '../shared/dark-mode-button'

const theme = {
  primary: '#132238',
  secondary: '#364e68',
  text: '#000',
  emphasize: '#ccc',
  lightBlue: '#98ccd3',
  black: '#23282E',
  white: '#fff',
  gray: '#eee',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  background: '#FFF'
}

const darkTheme = {
  primary: '#dfa612',
  secondary: '#EFBB35',
  text: '#fff',
  emphasize: '#FAE042',
  lightBlue: '#98ccd3',
  black: '#23282E',
  white: '#fff',
  gray: '#eee',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  background: '#132238'
}

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    background: ${props => props.theme.background};
    padding: 0;
    margin: 0;
	color: ${props => props.theme.text};
  }
  p, a, h1, h2, h3, h4, h5, h6, span {
  	color: ${props => props.theme.text};
  	&.primary {
  		color: ${props => props.theme.primary}
  	}
	&.white {
		color: ${props => props.theme.white}
	}
	&.black {
		color: ${props => props.theme.black}
	}
  }
  a {
    text-decoration: none;
	box-shadow: none;
  }
  .bg{
	&-primary {
		background-color: ${props => props.theme.primary}
	}
	&-secondary {
		background-color: ${props => props.theme.secondary}
	}
  }
  .border{
  	border-width: 1px;
	border-radius: 8px;
	border-style: solid;
	&-primary {
		border-color: ${props => props.theme.primary}
	}
  }
  .p{
	&-2{
		padding: ${rhythm(0.5)}
	}
	&h-2{
		padding-left: ${rhythm(0.5)}
		padding-right: ${rhythm(0.5)}
	}
  }
  article ul li {
  	list-style: none;
	position: relative;
	padding-left: 29px;
	&::before {
		content: '';
		position: absolute;
		left: 0;
		top: 12px;
		width: 12px;
		height: 4px;
		background-color: ${props => props.theme.primary};
	}
  }
  blockquote {
  	border-left-color: ${props => props.theme.primary}
  }
`

class Layout extends React.Component {
  state = {
    isDarkMode: localStorage.getItem('isDarkMode') == 'true'
  }
  componentWillMount = () => {
    const isCurrentDarkMode = localStorage.getItem('isDarkMode') == 'true'
    if (isCurrentDarkMode) {
      this.setState({ isDarkMode: true })
    }
  }
  _toggleDarkMode = () => {
    const isCurrentDarkMode = localStorage.getItem('isDarkMode') == 'true'
    if (isCurrentDarkMode) {
      this.setState({ isDarkMode: false })
      localStorage.setItem('isDarkMode', false)
    } else {
      this.setState({ isDarkMode: true })
      localStorage.setItem('isDarkMode', true)
    }
  }
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header = (
      <Header isRoot={location.pathname === rootPath} title={title} />
    )
    return (
      <ThemeProvider theme={this.state.isDarkMode ? darkTheme : theme}>
        <GlobalStyle />
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            position: 'relative'
          }}
        >
          <header>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              {header}
              <DarkModeButton
                isDarkMode={this.state.isDarkMode}
                toggle={this._toggleDarkMode}
              />
            </div>
          </header>
          <main>{children}</main>
          <footer>© {new Date().getFullYear()}, Built by Glenn</footer>
        </div>
      </ThemeProvider>
    )
  }
}

export default Layout
