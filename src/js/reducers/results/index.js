/* ACTION TYPES */
import { UPDATE_RESULTS, ADD_RESULTS } from './action-types'

/* REDUX PACK */
import { handle } from 'redux-pack'

const initialState = {
  query: null,
  albums: {},
  tracks: {},
  isLoading: false
}

const results = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_RESULTS:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isLoading: true,
          query: action.meta.query
        }), //, error: null
        finish: prevState => ({ ...prevState, isLoading: false }),
        // failure: prevState => ({ ...prevState, error: payload }),
        success: prevState => ({
          ...prevState,
          albums: action.payload.data.albums,
          tracks: action.payload.data.tracks
        })
        // always: prevState => prevState
      })

    case ADD_RESULTS:
      return handle(state, action, {
        start: prevState => ({ ...prevState, isLoading: true }),
        finish: prevState => ({ ...prevState, isLoading: false }),
        success: prevState => {
          const key = Object.keys(action.payload.data)[0]
          const { data } = action.payload
          return {
            ...prevState,
            [key]: {
              ...data[key],
              items: prevState[key].items.concat(data[key].items)
            }
          }
        }
      })

    default:
      return state
  }
}

export default results
