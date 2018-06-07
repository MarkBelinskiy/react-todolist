import { combineReducers } from 'redux'
import notes from './notes'
import menu from './menu'

export default combineReducers({
	notes,
	menu
})