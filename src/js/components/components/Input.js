/* REACT */
import React from 'react'
import PropTypes from 'prop-types'

/* STYLES */
import styled from 'styled-components'
import fonts from '../../styles/constants/fonts'

const Input = ({
  inputName,
  inputType,
  inputValue,
  handleChange,
  inputPlaceholder,
  inputIsRequired,
  className
}) => (
  <input
    name={inputName}
    type={inputType}
    value={inputValue}
    onChange={handleChange}
    placeholder={inputPlaceholder}
    required={inputIsRequired}
    className={className}
  />
)

const StyledInput = styled(Input)`
  ${fonts.ms}
  width: 400px;
  border-radius: 5px;
  border: 1px solid #eee;
  padding: 0 5px;
  margin-right: 10px;

  ${props => {
    switch (props.size) {
      case 'sm':
        return `
          height: 28px;
          line-height: 28px;
        `

      case 'md':
        return `
          height: 38px;
          line-height: 38px;
        `

      case 'lg':
        return `
          height: 48px;
          line-height: 48px;
        `

      default:
        return `
          height: 38px;
          line-height: 38px;
        `
    }
  }}
`

Input.propTypes = {
  inputName: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  inputPlaceholder: PropTypes.string,
  inputIsRequired: PropTypes.bool
}

export default StyledInput
