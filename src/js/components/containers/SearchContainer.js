/* REACT */
import React from 'react'

/* CONTAINERS */
import FormContainer from './FormContainer'
import ResultsList from '../components/ResultsList'

class SearchContainer extends React.Component {
  constructor() {
    super()

    this.inputs = [
      {
        inputName: 'search',
        inputType: 'text',
        inputPlaceholder: 'Search for an album or a track...',
        inputIsRequired: true
      }
    ]

    this.state = {
      results: [
        {
          img: 'aaa',
          title: 'Álbum 1',
          artist: 'The Clash'
        },
        {
          img: 'bbb',
          title: 'Testessss',
          artist: 'Ramones'
        }
      ]
    }
  }

  handleSubmit(values) {
    console.log(values)
  }

  render() {
    return (
      <>
        <FormContainer
          inputs={this.inputs}
          handleSubmit={this.handleSubmit}
          btnText="Search"
        />
        <ResultsList results={this.state.results} />
      </>
    )
  }
}

export default SearchContainer
