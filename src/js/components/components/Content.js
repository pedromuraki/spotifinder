/* REACT */
import React from 'react'

/* ROUTER */
import { Switch, Route, Link } from 'react-router-dom'
import Main from '../routes/Main'
import Album from '../routes/Album'

const Content = ({ token }) => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Main token={token} />} />
      <Route exact path="/album" component={Album} token={token} />
    </Switch>
  )
}

export default Content
