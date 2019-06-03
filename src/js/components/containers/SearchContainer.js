/* REACT */
import React from 'react'
import PropTypes from 'prop-types'

/* REDUX */
import { connect } from 'react-redux'

/* CONTAINERS */
import FormContainer from './FormContainer'
import Results from '../components/Results'

/* ACTION CREATORS */
import { search } from '../../reducers/results/action-creators'

export class SearchContainer extends React.Component {
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
        <Results />
      </>
    )
  }
}

SearchContainer.propTypes = {
  search: PropTypes.func,
  token: PropTypes.string
}

export default connect(
  state => {
    return {
      token: state.token
    }
  },
  { search }
)(SearchContainer)
