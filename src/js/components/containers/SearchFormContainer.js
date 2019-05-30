/* REACT */
import React from 'react'

/* COMPONENTS */
import Form from '../components/Form'

class SearchFormContainer extends React.Component {
  constructor() {
    super()

    this.handleInputValueChange = this.handleInputValueChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)

    this.state = { inputValue: '' }
  }

  handleInputValueChange(e) {
    this.setState({ inputValue: e.target.value })
  }

  handleFormSubmit(e) {
    e.preventDefault()

    console.log(this.state.inputValue)

    this.setState({ inputValue: '' })
  }

  render() {
    return (
      <Form
        handleFormSubmit={this.handleFormSubmit}
        inputValue={this.state.inputValue}
        handleInputValueChange={this.handleInputValueChange}
        inputPlaceholder="Search for an album or a track..."
        btnText="Search"
      />
    )
  }
}

export default SearchFormContainer
