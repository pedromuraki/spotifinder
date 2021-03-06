/* REACT */
import React from 'react'
import PropTypes from 'prop-types'

/* REDUX */
import { connect } from 'react-redux'

/* ROUTER */
import history from '../router/history'

/* COMPONENTS */
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import Loading from './components/Loading'

/* CONFIG */
import { AUTH_URL } from '../config/spotifyApi'

/* ACTION CREATORS */
import { setToken } from '../reducers/token/action-creators'

export class App extends React.Component {
  componentDidMount() {
    // If coming from auth url...
    if (history.location.hash.slice(0, 13) === '#access_token') {
      // Set the 'token' reducer using the returning auth url as ref
      const token = history.location.hash
        .replace(/#access_token=/, '')
        .replace(/&token_type=Bearer&expires_in=3600/, '')

      this.props.setToken(token)

      // Set 'token' in localStorage
      localStorage.setItem('token', token)

      // Push to main route to clear the returning auth url
      history.push('/')

      return
    }

    // If token does not exist, send to auth url
    if (!this.props.token) location.assign(AUTH_URL) // window.location.href = AUTH_URL
  }

  render() {
    return (
      <>
        <Header />
        <Content />
        <Footer />
        <Loading />
      </>
    )
  }
}

App.propTypes = {
  setToken: PropTypes.func,
  token: PropTypes.string
}

export default connect(
  state => {
    return {
      token: state.token
    }
  },
  { setToken }
)(App)
