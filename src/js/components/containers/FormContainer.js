/* REACT */
import React from 'react'
import PropTypes from 'prop-types'

/* COMPONENTS */
import Form from '../components/Form'

class FormContainer extends React.Component {
  constructor(props) {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      values: this.setInitialValues(props.inputs)
    }
  }

  setInitialValues(inputs) {
    return inputs.reduce((acc, cur) => ({ ...acc, [cur.inputName]: '' }), {})
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

    this.setState({
      values: this.setInitialValues(this.props.inputs)
    })
  }

  render() {
    return (
      <Form
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        inputs={this.props.inputs}
        values={this.state.values}
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
