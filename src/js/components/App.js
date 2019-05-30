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
      token: null
    }
  }

  componentDidMount() {
    // If not returning from auth (based on url hash), redirect to it
    if (history.location.hash.slice(0, 13) !== '#access_token') {
      window.location.href = AUTH_URL
    }

    // Set the 'token' state using the returning auth url as ref
    this.setState({
      token: history.location.hash
        .replace(/#access_token=/, '')
        .replace(/&token_type=Bearer&expires_in=3600/, '')
    })

    // Push to main route to clear the returning auth url
    history.push('/')
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
