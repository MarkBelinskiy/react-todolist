import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import EditNote from '../components/notes/EditNote';
import Note from '../components/notes/Note';
import * as noteActions from '../actions/index'



const styles = theme => ({
	grid: {
		marginTop: '2em',
	}
});

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
		const { classes, data, triggerEditNote, removeNote, updateNote } = this.props;
		const { id } = data;
		const { editMode, noteControls } = this.state;
		// console.log( this.props );

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

const combinedHOC = compose(

	withStyles( styles ),
	connect( null, mapDispatchToProps ),
);

export default combinedHOC( NoteController )