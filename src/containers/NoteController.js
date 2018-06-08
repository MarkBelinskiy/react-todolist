import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditNote from '../components/notes/EditNote';
import Note from '../components/notes/Note';
import * as noteActions from '../actions/index'



class NoteController extends Component {

	constructor( props ) {
		super( props );
		this.state = {
			noteControls: false,
			editMode: false,
		};
	}


	showNoteControls = () => {
		this.setState( { noteControls: true } );
	};
	hideNoteControls = () => {
		this.setState( { noteControls: false } );
	};

	triggerEditNote = () => {
		this.setState( { editMode: !this.state.editMode } );
	};

	render() {
		const {  data, removeNote, updateNote } = this.props;
		const { id } = data;
		const { editMode, noteControls } = this.state;

		return (
			<div className="grid-item">
				<Note
					data={ data }
					editMode={ editMode }
					noteControls={ noteControls }
					showNoteControls={ () => this.showNoteControls() }
					hideNoteControls={ () => this.hideNoteControls() }
					triggerEditNote={ () => this.triggerEditNote() }
					removeNote={ () => removeNote( id ) }
					updateNote={ updateNote }
				/>
				{ /*{ editMode ?
				 <EditNote
				 data={ data }
				 editMode={ editMode }
				 triggerEditNote={ () => triggerEditNote( id ) }
				 removeNote={ () => removeNote( id ) }
				 updateNote={ updateNote }
				 /> :
				 <Note
				 data={ data }
				 editMode={ editMode }
				 noteControls={ noteControls }
				 showNoteControls={ () => this.showNoteControls() }
				 hideNoteControls={ () => this.hideNoteControls() }
				 triggerEditNote={ () => this.triggerEditNote() }
				 removeNote={ () => removeNote( id ) }
				 />
				 }*/ }
			</div>
		);
	}
}


const mapDispatchToProps = dispatch => {
	return {
		// triggerEditNote: id => dispatch( noteActions.triggerEditNote( id ) ),

		updateNote: noteItem => {
			dispatch( noteActions.updateNote( noteItem ) );
			// dispatch(noteActions.triggerEditNote(noteItem.id));
		},
	}
}

export default connect( null, mapDispatchToProps )( NoteController )