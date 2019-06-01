/* ACTION TYPES */
import { UPDATE_RESULTS } from './action-types'

/* REDUX PACK */
import { handle } from 'redux-pack'

const initialState = {
  albums: {},
  tracks: {},
  isLoading: false
}

const results = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_RESULTS:
      console.log(action)
      return handle(state, action, {
        start: prevState => ({ ...prevState, isLoading: true }), //, error: null
        finish: prevState => ({ ...prevState, isLoading: false }),
        // failure: prevState => ({ ...prevState, error: payload }),
        success: prevState => ({
          ...prevState,
          albums: action.payload.data.albums,
          tracks: action.payload.data.tracks
        })
        // always: prevState => prevState
      })

    default:
      return state
  }
}

export default results
