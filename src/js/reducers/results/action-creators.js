/* ACTION TYPES */
import { UPDATE_RESULTS, ADD_RESULTS } from './action-types'

/* HELPERS */
import axios from 'axios'
import { refreshTokenIfExpired } from '../../helpers'

/* CONFIG */
import { API_URL } from '../../config/spotifyApi'

export const search = (query, token, type, offset) => {
  return {
    type: UPDATE_RESULTS,
    promise: axios({
      method: 'GET',
      url: `${API_URL}/search?query=${query}&type=${type ||
        'album,track'}&offset=${offset || '0'}&limit=5`,
      headers: {
        Authorization: 'Bearer ' + token
      }
    }),
    meta: {
      query,
      onFailure: (result, getState) => {
        refreshTokenIfExpired(result.response.status)
      }
    }
  }
}

export const loadNext = (url, token) => {
  return {
    type: ADD_RESULTS,
    promise: axios({
      method: 'GET',
      url,
      headers: {
        Authorization: 'Bearer ' + token
      }
    }),
    meta: {
      onFailure: (result, getState) => {
        refreshTokenIfExpired(result.response.status)
      }
    }
  }
}
