import { ADD_NOTE, UPDATE_NOTE, REMOVE_NOTE } from '../constants/Note'

export const addToDo = () => ({ type: ADD_NOTE });

export const removeNote = id => ({ type: REMOVE_NOTE, id });

export const updateNote = ( noteItem ) => ({ type: UPDATE_NOTE, noteItem });

// export const triggerEditNote = id => ({ type: TRIGGER_EDIT_NOTE, id });

