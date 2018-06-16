import uuidv4 from 'uuid/v4';

import { ADD_NOTE, REMOVE_NOTE, UPDATE_NOTE } from '../constants/Note'

const initialState =
	[
		{
			id: uuidv4(),
			title: 'This is a sheet of paper 1.',
			note: 'Lorem ipsum dolor sitet exercitationem in magni modi, nesciunt placeat quas quasi qui quia quibusdamLorem ipsum dolor sitet exercitationem in magni modi, nesciunt placeat quas quasi qui quia quibusdamLorem ipsum dolor sitet exercitationem in magni modi, nesciunt placeat quas quasi qui quia quibusdamLorem ipsum dolor sitet exercitationem in magni modi, nesciunt placeat quas quasi qui quia quibusdamLorem ipsum dolor sitet exercitationem in magni modi, nesciunt placeat quas quasi qui quia quibusdam quidem quo quos reiciendis repudiandae rerum sed totam ut velit voluptates! Dolores, hic!',
			createTime: 1528798605
		},
		{
			id: uuidv4(),
			title: 'This is a FIRST LIST.',
			note: [
				{ title: 'First punkt', done: false },
				{
					title: 'Second punkt with Lorem LoremLoremLorem ipsum dolor sitet exercitationem in magni modi, nesciunt placeat quas quasi qui quia quibusdam quidem quo quos reiciendis repudiandae reru',
					done: true
				},
				{ title: 'TIKAY Z SELA, TOBI PIZDA', done: false },
			],
			createTime: 1528798706

		},
		{
			id: uuidv4(),
			title: 'This is a sheet of paper 2.',
			note: 'Lorem LoremLorem ipsum dolor sitet exercitationem in magni modi, nesciunt placeat quas quasi qui quia quibusdam quidem quo quos reiciendis repudiandae rerum sed totam ut velit voluptates! Dolores, hic!',
			createTime: 1528798717
		},
		{
			id: uuidv4(),
			title: 'This is a sheet of paper 3.',
			note: 'Lorem LoremLoremLorem ipsum dolor sitet exercitationem in magni modi, nesciunt placeat quas quasi qui quia quibusdam quidem quo quos reiciendis repudiandae rerum sed totam ut velit voluptates! Dolores, hic! Lorem LoremLoremLorem ipsum dolor sitet exercitationem in magni modi, nesciunt placeat quas quasi qui quia quibusdam quidem quo quos reiciendis repudiandae rerum sed totam ut velit voluptates! Dolores, hic!',
			createTime: 1528798727
		},
	];


export default function notes( state = initialState, action ) {
	switch ( action.type ) {
		case ADD_NOTE:
			const newNote = {
				id: uuidv4(),
				title: action.noteItem.title,
				note: action.noteItem.note,
			};
			return [
				newNote,
				...state

			];
		case REMOVE_NOTE:

			const removedNote = state.filter( elem => elem.id !== action.id );

			return [
				...removedNote
			];

		case UPDATE_NOTE:
			const updatedNote = state.map( elem => {
				elem.id === action.noteItem.id && (
					elem = {
						id: action.noteItem.id,
						title: action.noteItem.title,
						note: action.noteItem.note
					}
				);
				return elem;
			} );

			return [
				...updatedNote
			];
// TODO: remove to local storage
		/*case TRIGGER_EDIT_NOTE:
		 const filteredNote = state.filter( elem => {
		 if ( elem.id === action.id ) {
		 return (( elem.title !== '') || elem.note !== '')
		 }
		 return elem
		 } );
		 const changedEditMode = filteredNote.map( elem => {
		 elem.id === action.id && ( elem.editMode = !elem.editMode );
		 return elem;
		 } );

		 return [
		 ...changedEditMode
		 ];*/
		default:
			return state
	}
}