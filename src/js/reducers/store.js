/* REDUX */
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { middleware as reduxPackMiddleware } from 'redux-pack'
import { composeWithDevTools } from 'redux-devtools-extension'

/* REDUCERS */
import token from './token'
import results from './results'

const combinedReducers = combineReducers({
  token,
  results
})

const store = createStore(
  combinedReducers,
  composeWithDevTools(applyMiddleware(reduxPackMiddleware))
)

export default store
