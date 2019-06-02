/* CONFIG */
import { AUTH_URL } from '../config/spotifyApi'

export const refreshTokenIfExpired = status => {
  if (status === 401) {
    alert(
      'Your authorization has expired. You will be redirected to Spotify to grant permission again.'
    )
    window.location.href = AUTH_URL
  }
}
