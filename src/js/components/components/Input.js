/* REACT */
import React from 'react'

const Input = ({
  inputType,
  inputValue,
  handleInputValueChange,
  inputPlaceholder
}) => (
  <input
    type={inputType}
    value={inputValue}
    onChange={handleInputValueChange}
    placeholder={inputPlaceholder}
  />
)

export default Input
