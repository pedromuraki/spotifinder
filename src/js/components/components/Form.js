/* REACT */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/* COMPONENTS */
import Button from './Button'

export const Form = props => {
  return (
    <form onSubmit={props.handleFormSubmit} className={props.className}>
      <input
        type="text"
        value={props.inputValue}
        onChange={props.handleInputValueChange}
        placeholder={props.inputPlaceholder}
      />
      <Button primary type="submit">
        {props.btnText}
      </Button>
    </form>
  )
}

const StyledForm = styled(Form)`
  input {
    border: 2px solid #000;
    border-radius: 5px;
  }
`

Form.propTypes = {
  handleFormSubmit: PropTypes.func,
  className: PropTypes.string,
  inputValue: PropTypes.string,
  handleInputValueChange: PropTypes.func
}

export default StyledForm
