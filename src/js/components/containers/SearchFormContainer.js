/* REACT */
import React from 'react'

/* COMPONENTS */
import Form from '../components/Form'

class SearchFormContainer extends React.Component {
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

    console.log(this.state.values.search)

    this.setState({ values: {} })
  }

  getInputs() {
    const { values } = this.state

    return [
      {
        inputName: 'search',
        inputType: 'text',
        inputPlaceholder: 'Search for an album or a track...',
        inputValue: values['search'] || ''
      }
    ]
  }

  render() {
    return (
      <Form
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        inputs={this.getInputs()}
        btnText="Search"
      />
    )
  }
}

export default SearchFormContainer
