/* REACT */
import React from 'react'

/* REDUX */
import { connect } from 'react-redux'

/* CONTAINERS */
import FormContainer from './FormContainer'
import ResultsList from '../components/ResultsList'

/* ACTION CREATORS */
import { search } from '../../reducers/results/action-creators'

class SearchContainer extends React.Component {
  constructor() {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)

    this.inputs = [
      {
        inputName: 'searchQuery',
        inputType: 'text',
        inputPlaceholder: 'Search for an album or a track...',
        inputIsRequired: true
      }
    ]
  }

  handleSubmit(values) {
    this.props.search(values.searchQuery, this.props.token)
  }

  render() {
    return (
      <>
        <FormContainer
          inputs={this.inputs}
          handleSubmit={this.handleSubmit}
          btnText="Search"
        />
        <ResultsList />
      </>
    )
  }
}

export default connect(
  state => {
    return {
      token: state.token
    }
  },
  { search }
)(SearchContainer)
