import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import NoteControlButtons from './NoteControlButtons'
import NoteDescriptionView from './NoteDescriptionView'
import EditNote from './EditNote';
import './Note.scss'


function DialogTransition( props ) {
	return <Grow direction="up" { ...props } />;
}
class Note extends Component {

	showNoteControls = () => {
		this.setState( { noteControls: true } );
	};
	hideNoteControls = () => {
		this.setState( { noteControls: false } );
	};
	triggerEditNote = () => {
		this.setState( { editMode: !this.state.editMode } );
	};

	constructor( props ) {
		super( props );
		this.state = {
			noteControls: false,
			editMode: false,
		};
	}

	render() {
		const { data, removeNote, updateNote } = this.props;

		const { id, title, note } = data;
		const { editMode, noteControls } = this.state;

		return (
			<div className="grid-item">
				<Paper className="paper"
					   onMouseEnter={ () => this.showNoteControls() }
					   onMouseLeave={ () => this.hideNoteControls() }>
					{ title &&
					<Typography variant="headline" component="h3">
						{ title }
					</Typography>
					}

					{ note &&
					<NoteDescriptionView noteData={ note }/>
					}
					<NoteControlButtons
						noteControls={ noteControls }
						triggerEditNote={ () => this.triggerEditNote() }
						removeNote={ () => removeNote( id ) }
					/>

					<Dialog
						PaperProps={ { className: 'dialog' } }
						open={ editMode }
						TransitionComponent={ DialogTransition }
						keepMounted
						onClose={ () => { this.child.handleClearForm() } }
						aria-labelledby="form-dialog-title"
					>
						<DialogTitle className="dialog-title" id="form-dialog-title">Edit Note</DialogTitle>
						<EditNote
							ref={ e => { this.child = e} }
							data={ { id, title, note } }
							removeNote={ () => removeNote( id ) }
							submitMethod={ ( id ) => updateNote( id ) }
							popupCloseMethod={ () => this.triggerEditNote() }
						/>
					</Dialog>
				</Paper>

			</div>
		);
	}
}

export default Note