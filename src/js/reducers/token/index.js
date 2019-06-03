/* ACTION TYPES */
import { SET_TOKEN } from './action-types'

const initialState = localStorage.getItem('token') || null

const token = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return action.token

    default:
      return state
  }
}

export default token
