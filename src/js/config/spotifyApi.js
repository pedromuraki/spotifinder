export const CLIENT_ID = '6c1d012c158b4f0497d3d8c9099d2992'

export const REDIRECT_URI =
  process.env.NODE_ENV === 'production'
    ? 'https://styles--pedromuraki-spotifinder.netlify.com/'
    : 'http://0.0.0.0:8080/'

export const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token`

export const API_URL = 'https://api.spotify.com/v1'
