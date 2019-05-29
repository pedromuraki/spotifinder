/* REDUX */
import { createStore, combineReducers, applyMiddleware } from 'redux'

/* REDUCERS */
import searchResults from './searchResults'

// import { composeWithDevTools } from 'redux-devtools-extension'
// import { someMiddleware } from '../actions/index'

const combinedReducers = combineReducers({
  searchResults
})

const store = createStore(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // composeWithDevTools(applyMiddleware(someMiddleware))
)

export default store
