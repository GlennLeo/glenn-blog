import React from 'react'
import styled from 'styled-components'
import Switch from 'react-switch'

const StyledDarkModeBtn = styled.div``

const DarkModeButton = ({ isDarkMode, toggle }) => (
  <StyledDarkModeBtn>
    <Switch
      checked={isDarkMode}
      onChange={toggle}
      uncheckedIcon={
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            fontSize: 15,
            color: 'orange',
            paddingRight: 2
          }}
        >
          Off
        </div>
      }
      checkedIcon={
        <svg viewBox="0 0 10 10" height="100%" width="100%" fill="aqua">
          <circle r={3} cx={5} cy={5} />
        </svg>
      }
      className="react-switch"
      id="icon-switch"
    />
  </StyledDarkModeBtn>
)

export default DarkModeButton
