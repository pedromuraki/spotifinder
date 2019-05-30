/* REACT */
import React from 'react'

/* ROUTER */
import { Switch, Route } from 'react-router-dom'
import Main from '../routes/Main'
import Album from '../routes/Album'

const Content = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/album" component={Album} />
    </Switch>
  )
}

export default Content
