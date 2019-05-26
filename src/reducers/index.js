import { combineReducers } from 'redux'
import {
  GET_PLAYLISTS,
} from '../actions'

function playLists (state={}, action){
  switch (action.type){
    case GET_PLAYLISTS:
      return action.listOfResults
    default:
      return state
  }
}

export default combineReducers({playLists})