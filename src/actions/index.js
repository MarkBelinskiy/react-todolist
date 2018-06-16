import { ADD_NOTE, REMOVE_NOTE, UPDATE_NOTE } from '../constants/Note'

// NOTE ACTIONS
export const addNote = noteItem => ({ type: ADD_NOTE, noteItem });

export const updateNote = noteItem => ({ type: UPDATE_NOTE, noteItem });

export const removeNote = id => ({ type: REMOVE_NOTE, id });

