/* REACT */
import React from 'react'

/* REDUX */
import { connect } from 'react-redux'

/* CONTAINERS */
import FormContainer from './FormContainer'
import ResultsList from '../components/ResultsList'

/* HELPERS */
import axios from 'axios'
import { refreshTokenIfExpired } from '../../helpers'

/* CONFIG */
import { API_URL } from '../../config/spotifyApi'

class SearchContainer extends React.Component {
  constructor() {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)

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
    const { search } = values

    axios({
      method: 'GET',
      url: `${API_URL}/search?query=${search}&type=album,track&offset=0&limit=5`,
      headers: {
        Authorization: 'Bearer ' + this.props.token
      }
    })
      .then(res => console.log(res))
      .catch(refreshTokenIfExpired)
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

export default connect(state => {
  return {
    token: state.token
  }
})(SearchContainer)
