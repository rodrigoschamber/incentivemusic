import * as spotifyAPI from '../utils/spotifyAPI'
export const GET_PLAYLISTS = 'GET_PLAYLISTS'

export function getPlayLists( country, limit, locale, timeStamp, offSet ) {
  return dispatch => spotifyAPI.getPlayLists( country, limit, locale, timeStamp, offSet )
    .then(res => res.json())
    .then(
      (listOfResults) => dispatch({ type: 'GET_PLAYLISTS', listOfResults })
    )
}

