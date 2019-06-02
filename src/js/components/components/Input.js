/* REACT */
import React from 'react'
import PropTypes from 'prop-types'

const Input = ({
  inputName,
  inputType,
  inputValue,
  handleChange,
  inputPlaceholder,
  inputIsRequired
}) => (
  <input
    name={inputName}
    type={inputType}
    value={inputValue}
    onChange={handleChange}
    placeholder={inputPlaceholder}
    required={inputIsRequired}
  />
)

Input.propTypes = {
  inputName: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  inputPlaceholder: PropTypes.string,
  inputIsRequired: PropTypes.bool
}

export default Input
