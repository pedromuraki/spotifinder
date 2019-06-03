/* ACTION TYPES */
import { SET_TOKEN } from './action-types'

export const setToken = token => {
  return {
    type: SET_TOKEN,
    token
  }
}
