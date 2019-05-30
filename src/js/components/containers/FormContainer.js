/* REACT */
import React from 'react'
import PropTypes from 'prop-types'

/* COMPONENTS */
import Form from '../components/Form'

class FormContainer extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      values: {}
    }
  }

  handleChange(e) {
    const target = e.target

    this.setState({
      values: { ...this.state.values, [target.name]: target.value }
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.handleSubmit(this.state.values)

    this.setState({ values: {} })
  }

  getInputs() {
    const { values } = this.state

    return this.props.inputs.map(input => ({
      inputName: input.inputName,
      inputType: input.inputType,
      inputPlaceholder: input.inputPlaceholder,
      inputValue: values[input.inputName] || '',
      inputIsRequired: input.inputIsRequired
    }))
  }

  render() {
    return (
      <Form
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        inputs={this.getInputs()}
        btnText={this.props.btnText}
      />
    )
  }
}

FormContainer.propTypes = {
  inputs: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired
}

export default FormContainer
