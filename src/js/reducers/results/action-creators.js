/* ACTION TYPES */
import { UPDATE_RESULTS } from './action-types'

/* HELPERS */
import axios from 'axios'
import { refreshTokenIfExpired } from '../../helpers'

/* CONFIG */
import { API_URL } from '../../config/spotifyApi'

export const search = (query, token) => {
  return {
    type: UPDATE_RESULTS,
    promise: axios({
      method: 'GET',
      url: `${API_URL}/search?query=${query}&type=album,track&offset=0&limit=5`,
      headers: {
        Authorization: 'Bearer ' + token
      }
    }),
    meta: {
      onFailure: (result, getState) => {
        console.log(result)
        // refreshTokenIfExpired
      }
    }
  }
}
