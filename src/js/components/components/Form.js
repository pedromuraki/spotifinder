/* REACT */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/* COMPONENTS */
import Input from './Input'
import Button from './Button'

export const Form = ({
  handleFormSubmit,
  inputValue,
  handleInputValueChange,
  inputPlaceholder,
  btnText,
  className
}) => {
  return (
    <form onSubmit={handleFormSubmit} className={className}>
      <Input
        inputType="text"
        inputValue={inputValue}
        handleInputValueChange={handleInputValueChange}
        inputPlaceholder={inputPlaceholder}
      />
      <Button btnType="submit" btnText={btnText} />
    </form>
  )
}

Form.propTypes = {
  handleFormSubmit: PropTypes.func,
  className: PropTypes.string,
  inputValue: PropTypes.string,
  handleInputValueChange: PropTypes.func
}

export default Form

// const StyledForm = styled(Form)`
//   input {
//     border: 2px solid #000;
//     border-radius: 5px;
//   }
// `

// export default StyledForm
