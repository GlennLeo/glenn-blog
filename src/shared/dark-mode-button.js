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
            color: 'yellow',
            paddingRight: 2
          }}
        >
          <i className="far fa-lightbulb" />
        </div>
      }
      checkedIcon={
        <i
          style={{ marginLeft: '8px', color: 'orange' }}
          className="far fa-moon"
        />
      }
      offColor="#132238"
      onColor="#000"
      className="react-switch"
      id="icon-switch"
    />
  </StyledDarkModeBtn>
)

export default DarkModeButton
