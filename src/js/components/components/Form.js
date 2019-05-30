/* REACT */
import React from 'react'
import PropTypes from 'prop-types'

/* COMPONENTS */
import Input from './Input'
import Button from './Button'

export const Form = ({
  handleSubmit,
  handleChange,
  inputs,
  values,
  btnText
}) => {
  return (
    <form onSubmit={handleSubmit}>
      {inputs.map(input => (
        <Input
          inputName={input.inputName}
          inputType={input.inputType}
          inputValue={values[input.inputName]}
          handleChange={handleChange}
          inputPlaceholder={input.inputPlaceholder}
          inputIsRequired={input.inputIsRequired}
          key={input.inputName}
        />
      ))}

      <Button btnType="submit" btnText={btnText} />
    </form>
  )
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  inputs: PropTypes.array.isRequired,
  btnText: PropTypes.string.isRequired
}

export default Form
