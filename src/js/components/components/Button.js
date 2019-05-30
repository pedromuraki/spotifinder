/* REACT */
import React from 'react'
import PropTypes from 'prop-types'

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
