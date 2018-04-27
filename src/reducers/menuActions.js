import listIcon from '../images/menu-actions/list.svg';
import noteIcon from '../images/menu-actions/summary.svg';

const initialState = [
	{
		id: 0,
		title: 'Create a List',
		iconURL: listIcon,
		itemAction: 'addList'
	},
	{
		id: 1,
		title: 'Create a Note',
		iconURL: noteIcon,
		itemAction: 'addNote'

	},
]


export default function menuActions( state = initialState ) {
	return state
}