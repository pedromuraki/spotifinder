/* REACT */
import React from 'react'

/* REDUX */
import { connect } from 'react-redux'

/* CONTAINERS */
import FormContainer from './FormContainer'
import ResultsList from '../components/ResultsList'

/* HELPERS */
import axios from 'axios'

/* CONFIG */
import { API_URL, AUTH_URL } from '../../config/spotifyApi'

/* REDUCERS */
const mapStateToProps = state => {
  return {
    token: state.token
  }
}

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
      .catch(err => {
        console.log(err)
        console.log(err.response)
        // alert('Your authorization has expired. You will be redirected to Spotify to grant permission again.')
        // window.location.href = AUTH_URL
      })
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

export default connect(mapStateToProps)(SearchContainer)
