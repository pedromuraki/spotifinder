/* REACT */
import React from 'react'

/* ROUTER */
import history from '../router/history'

/* COMPONENTS */
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

/* CONFIG */
import { AUTH_URL } from '../config/spotifyApi'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      token: localStorage.getItem('token') || null
    }
  }

  componentDidMount() {
    // If coming from auth url...
    if (history.location.hash.slice(0, 13) === '#access_token') {
      // Set the 'token' state and localStorage using the returning auth url as ref
      const token = history.location.hash
        .replace(/#access_token=/, '')
        .replace(/&token_type=Bearer&expires_in=3600/, '')

      this.setState({ token: token })

      localStorage.setItem('token', token)

      // Push to main route to clear the returning auth url
      history.push('/')

      return
    }

    // If token does not exist, send to auth url
    if (!this.state.token) window.location.href = AUTH_URL
  }

  render() {
    return (
      <>
        <Header />
        <Content token={this.state.token} />
        <Footer />
      </>
    )
  }
}

export default App
