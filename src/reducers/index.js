import { combineReducers } from 'redux'
import notes from './notes'
import menuActions from './menuActions'

export default combineReducers({
	notes,
	menuActions
})