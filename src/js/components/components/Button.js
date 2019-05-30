/* REACT */
import React from 'react'
import PropTypes from 'prop-types'
// import styled, { css } from 'styled-components'

const Button = ({ btnType, btnText, handleClick }) => (
  <button type={btnType} onClick={handleClick}>
    {btnText}
  </button>
)

Button.propTypes = {
  btnType: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  handleClick: PropTypes.func
}

export default Button

// const Button =
//   styled.button.attrs(props => ({
//     type: props.type
//   }))`
//     background: transparent;
//     border-radius: 3px;
//     border: 2px solid palevioletred;
//     color: palevioletred;
//     margin: 0 1em;
//     padding: 0.25em 1em;
//     ${props => props.primary && css`
//       background: palevioletred;
//       color: white;
//     `};
//   `
